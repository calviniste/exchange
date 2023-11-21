import { useEffect } from 'react';
import ab from '../assets/img/about.png'
import WOW from 'wowjs';
import '../styles/lib/animate/animate.min.css'
import '../styles/lib/owlcarousel/assets/owl.carousel.min.css'
const About = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img class="img-fluid" src={ab} alt="" />
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="h-100">
              <h1 class="display-6">About Us</h1>
              <p class="text-primary fs-5 mb-4">The Most Trusted CryptoExchange Platform</p>
              <p>
                We are the best and unique manufacturer of HIGH QUALITY undetectable counterfeit banknotes.  </p>
                <p>With over a billion of our products circulating around the world. </p>
                <p>We only offer original, high-quality counterfeit bills.</p>
               <p>We ship worldwide.  We also print and sell Class A banknotes from over 52 currencies worldwide.  Here is your chance to become a millionaire.
                </p> 
                <p>Our money is perfectly reproduced, visually and haptically indistinguishable.  We ship in different sizes, boxed and hidden.</p>
                <p>All our notes carry all holograms and watermarks and pass the light detector test.</p>
                <p>We deliver the money directly to your home without customs intervention.</p>
             
            
              <p class="mb-4">We have a huge amount in stock</p>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>EUROS</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>DOLLARS</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>POUNDS AND NEW DOCUMENTS LIKE PASSPORTS</span>
              </div>
              <div class="d-flex align-items-center mb-4">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>GREEN CARDS AND DRIVING LICENSES</span>
              </div>
              <a class="btn btn-primary py-3 px-4" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default About