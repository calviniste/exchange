import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Book from "./Book"
import Menu from "./Menu"
import About from "./About"
import Services from "../components/Service"
import Faq from "../components/Faq"


const Home = () => {
    return (
        <div>


            <Header />
            <About />
            <Services />
            <Faq />



        </div>
    )
}

export default Home