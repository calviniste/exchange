import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import About from "../pages/About"
import Book from "../pages/Book"

const AppNavigation=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Home/>}>
                
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppNavigation