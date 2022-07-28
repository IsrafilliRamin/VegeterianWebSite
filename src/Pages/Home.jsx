import React, { useState, useContext,useEffect } from 'react'
import ListBox from '../components/Home/ListBox'
import Trending from '../components/Home/Trending'
import VegeterianPicks from '../components/Home/VegeterianPicks'
import { MainContext } from '../Context/Context'
import { getSearchData } from '../Server/server'


const Home = () => {
  const { search } = useContext(MainContext)
  const [searchData, setSearchData] = useState([])

  const fecthSearchData = async () => {
    const res = await getSearchData(search)
    setSearchData(res);
  }

  useEffect(() => {
    fecthSearchData()
  }, [search])
  return (
    <div>
      {!search ?
        <>
          <VegeterianPicks />
          <Trending />
        </>
        : <div className='flex flex-wrap justify-center gap-10 mt-10'>
          {searchData.map(search=>(
          <ListBox key={search.id} image={search.image} desc={search.title}/>
          ))}
        </div>
        }

    </div>
  )
}

export default Home