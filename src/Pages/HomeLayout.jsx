import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header"
import Search from "../components/Home/Search"

const HomeLayout = () => {
    return (
        <div className='"flex flex-col xl:px-52 xl:py-4 sm:px-2 sm:py:2"'>
            <Header />
            <Search />
            <Outlet />
        </div>
    )
}

export default HomeLayout