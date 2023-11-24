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
import DetailEuro from "../components/detailEuro"
import SOutlet from "../components/SOutlet"
import DetailP from "../components/detailP"
import DetailDA from "../components/detailDA"
const AppNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Outlets />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="service" element={<SOutlet />}>
                        <Route path="" element={<Services />} />
                        <Route path="usdA" element={<DetailDA />} />
                        <Route path="usd" element={<Detail />} />
                        <Route path="euro" element={<DetailEuro />} />
                        <Route path="sterling" element={<DetailP />} />
                    </Route>
                    <Route path="faq" element={<Faq />} />
                    <Route path="usdA" element={<DetailDA />} />
                    <Route path="usd" element={<Detail />} />
                    <Route path="euro" element={<DetailEuro />} />
                    <Route path="sterling" element={<DetailP />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppNavigation