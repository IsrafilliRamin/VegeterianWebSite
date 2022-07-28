export const getData = async (item) =>{
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10${item ? "&tags=vegetarian" : ""}`)
    const data = await res.json()
    return data.recipes
}


export const getSingleData = async (id) =>{
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await res.json()
    return data
}


export const getCategoryData = async (name) =>{
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const data = await res.json()
    return data.results
}


export const getSearchData = async (search) =>{
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search }`)
    const data = await res.json()
    return data.results
}
