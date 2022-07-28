import "./Style/global.css"
import Home  from "./Pages/Home"
import "swiper/css";
import "swiper/css/bundle";
import {Routes,Route} from "react-router-dom"
import Details from "./Pages/Details";
import HomeLayout from "./Pages/HomeLayout";
import Category from "./Pages/Category";
import Page404 from "./Pages/Page404";

const App = () => {
  return (
   <div>
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index={true} element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/category/:name" element={<Category/>}/>
      </Route>
      <Route path="*" element={<Page404 />}/>
    </Routes>
   </div>
  )
}

export default App