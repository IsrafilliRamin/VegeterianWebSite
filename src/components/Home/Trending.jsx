import React, { useEffect, useState } from 'react'
import { getData } from '../../Server/server'
import ListBox from './ListBox'
import { Swiper, SwiperSlide } from "swiper/react";


const Trending = () => {
  const [data, setData] = useState([])
  const item = false

  // get trending data 
  let trendingData = async () => {
    let response = await getData(item)
    setData(response)
  }

  // sehife ilk yuklendiyinde datalarin apiden cekilmesi
  useEffect(() => {
    trendingData()
  }, [])

  return (
    <div className='mt-24 flex gap-6 flex-col mb-32'>
      <h2 className='font-bold text-lg font-montserrat md:text-2xl'>Trending</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          className="mySwiper"
          breakpoints={{
            200: {
              slidesPerView:1,
              spaceBetween:10
            },
            540: {
              slidesPerView:2,
              spaceBetween:10
            },
            768: {
              slidesPerView:3,
              spaceBetween:10
            },
            1024:{
              slidesPerView:3,
            },
            1200:{
              slidesPerView:4
            }
          }}
        >
          {
            data?.map(item => (
              <SwiperSlide key={item.id}><ListBox text="trending" id={item.id} image={item.image} desc={item.creditsText} /></SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}

export default Trending