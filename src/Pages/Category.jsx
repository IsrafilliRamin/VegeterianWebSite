import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ListBox from '../components/Home/ListBox'
import { MainContext } from '../Context/Context'
import {getCategoryData} from "../Server/server"

const Category = () => {
    const [categoryData,setCategoryData] = useState(null)
    const {category} = useContext(MainContext)
    const {name} = useParams()

    const fetchData = async () =>{
      const responese = await getCategoryData(category)
      setCategoryData(responese)
    }

    useEffect(()=>{
       fetchData()
    },[name])


  return (
    <div className='flex flex-wrap gap-10 mt-10'>
       {categoryData?.map(cat=>(
        <ListBox key={cat.id} image={cat.image} desc={cat.title}/>
       ))}
    </div>
  )
}

export default Category