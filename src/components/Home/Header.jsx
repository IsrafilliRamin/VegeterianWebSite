import React from 'react'
import {GiKnifeFork} from "react-icons/gi"
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigation = useNavigate()
  return (
    <div className='w-full h-14 flex justify-start items-center cursor-pointer md:my-5' onClick={()=>navigation("/")}>
        <GiKnifeFork className='text-3xl' />
        <h3 className='font-bold text-xl md:text-4xl'>delicious</h3>
    </div>
  )
}

export default Header