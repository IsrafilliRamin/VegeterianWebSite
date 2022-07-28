import { createContext, useState } from "react";

export const MainContext = createContext()

const Context = ({children}) =>{
    const [category,setCategory] = useState(null)
    const [search,setSearch] = useState(null)

    const data = {
        category,
        setCategory,
        search,
        setSearch
    }

    return(
        <MainContext.Provider  value={data}>
            {children}
        </MainContext.Provider>
    )
}

export default Context