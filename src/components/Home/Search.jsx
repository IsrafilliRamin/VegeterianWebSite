import React from 'react'
import { useContext } from 'react'
import {BsSearch} from "react-icons/bs"
import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {GiNoodles,GiChopsticks} from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../../Context/Context'

const Search = () => {
  const {setCategory,setSearch} = useContext(MainContext)
  const navigation = useNavigate()
  const iconsData = [
    {
      id:1,
      icons:<FaPizzaSlice className='text-white xl:text-sm lg:text-base md:text-lg' />,
      text:"Italian"
    },
    {
      id:2,
      icons:<FaHamburger className='text-white xl:text-sm lg:text-base md:text-lg'/>,
      text:"American"
    },
    {
      id:3,
      icons:<GiNoodles className='text-white xl:text-sm lg:text-base md:text-lg'/>,
      text:"Thai"
    },
    {
      id:4,
      icons:<GiChopsticks className='text-white xl:text-sm lg:text-base md:text-lg'/>,
      text:"Japanese"
    }
  ]

  const iconClick = (item) =>{
    setCategory(item)
    navigation(`/category/${item}`)
  }

  return (
    <div className='flex items-center flex-col gap-7 lg:mt-4 xl:mt-0'>
      {/* Input container start */}
      <div className='flex gap-2 items-center border rounded-lg w-[90vw] h-12 xl:w-[45vw] px-2 bg-mainBlack lg:w-[55vw] md:w-[60vw] md:h-12'>
      <BsSearch  className='text-white'/>
      <input onChange={(e)=>setSearch(e.target.value)} type="text" className='border-none outline-none w-full text-white bg-mainBlack placeholder:text-white' placeholder='cookies'/>
      </div>
       {/* Input container end */}

       {/* Circle  icons container start */}
        <div className='flex items-center justify-between gap-8'>
        {iconsData.map(icon=>(
          <div onClick={()=>iconClick(icon.text)} className='flex flex-col items-center justify-center border rounded-full w-16 h-16 2xl:w-18 2xl:h-18 xl:w-14 xl:h-14 lg:w-16 lg:h-16 md:w-20 md:h-20 bg-mainBlack cursor-pointer hover:animate-bounce' key={icon.id}>
            {icon.icons}
            <p className='xl:text-[0.7vw] lg:text-[1vw] md:text-sm text-[1.8vw] text-white'>{icon.text}</p>
          </div>
        ))}
        </div>
       {/* Circle  icons container end */}
    </div>
  )
}

export default Search