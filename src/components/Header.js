import React from "react"
import '../styles/css/style.css'
import '../styles/css/bootstrap.min.css'
import ib from '../assets/img/hero-1.png'
import i from '../assets/img/about.png'
import { NavLink, useNavigate } from "react-router-dom"
const Header = () => {
  const navigate=useNavigate()
    return (
      
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button></div>
  <div class="carousel-inner">
    <div class="it4 carousel-item"  data-bs-interval="10000">
    <div class='cri'>
     <h1>Buy Conterfeit USD Online </h1>
     <h5>We offer AA grade Us dollar notes which pass through all vending machines </h5>
     <button class="btn btn-primary" onClick={()=>navigate('euro')}>Order now</button> 
     </div>
    </div>
    <div class="it1 carousel-item  active"  data-bs-interval="10000">
      {/* <img src={ib} class="d-block w-100" alt="..."/> */}
     <div class='cri'>
     <h1>Buy contrefeit Australian dollar Online</h1>
     <h5>We offer AA grade Australian Dollar notes which pass through all vending machines </h5>
     <button class="btn btn-primary" onClick={()=>navigate('usdA')} >Order now</button> 
     </div>
    </div>
    <div class="it2 carousel-item"  data-bs-interval="10000">
    <div class='cri'>
     <h1>Buy contrefeit EURO Online</h1>
     <h5>We offer AA grade Euro notes which pass through all vending machines </h5>
     <button class="btn btn-primary" onClick={()=>navigate('euro')} >Order now</button>   
     </div>
    </div>
    <div class=" row it3 carousel-item"  data-bs-interval="10000">
    <div class='cri'>
     <h1>Buy contrefeit POUNDS STERLING Online</h1>
     <h5>We offer AA grade Pounds sterling notes which pass through all vending machines </h5>
     <button class="btn btn-primary " onClick={()=>navigate('sterling')} >Order now</button> 
     </div>
    
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Header