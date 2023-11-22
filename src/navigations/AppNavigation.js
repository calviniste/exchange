import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import About from "../pages/About"
import Book from "../pages/Book"
import Services from "../components/Service"
import Faq from "../components/Faq"
import Outlets from "../pages/Outlet"
import Buy from '../pages/Buy'
import Detail from "../components/detail"
const AppNavigation=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Outlets/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Services/>}/>
            <Route path="faq" element={<Faq/>}/>
            <Route path="buy" element={<Buy/>}/>
            <Route path="usd" element={<Detail/>}/>
            <Route path="euro" element={<Buy/>}/>
            <Route path="sterling" element={<Buy/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppNavigation