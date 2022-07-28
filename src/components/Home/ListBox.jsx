import React from 'react'
import {useNavigate} from "react-router-dom"

const ListBox = ({ text,image,desc,id }) => {
    const navigation = useNavigate()
    return (
        <div onClick={()=>navigation(`/details/${id}`)} key={id} className={`${text === "vegeterian" ? "w-72 h-60" : "w-60 h-72"} rounded-xl relative cursor-pointer hover:scale-125 transition-all`}>
            {/* img container start */}
            <div className='w-full h-full'>
                <img src={image} alt="" className='w-full h-full rounded-xl' />
            </div>
            {/* img container end */}
            {/* text container start */}
            <div className='relative bottom-24 flex justify-center items-center text-white z-50 px-2'>
                <p className='xl:text-sm md:line-clamp-2'>{desc}</p>
            </div>
             {/* text container end */}
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-xl' />
        </div>
    )
}

export default ListBox