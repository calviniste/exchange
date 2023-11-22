import Footer from "../components/Footer"
import Header from "../components/Header"
import {Outlet} from 'react-router-dom'
import Nav from "../components/nav.js"
const Outlets=()=>{
    return(
        <div>
  <Nav />
        <Outlet/>
        <Footer />
        </div>
      
    )
}

export default Outlets