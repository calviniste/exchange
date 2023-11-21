import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Book from "./Book"
import Menu from "./Menu"
import About from "./About"
import Services from "../components/Service"

const Home = () => {
    return (
        <div>
            <Header/>
            <div id="about">
            <About />
            </div>
          
 <div id="service">
                 <Services />
            </div>
           
            

            <Footer />
        </div>
    )
}

export default Home