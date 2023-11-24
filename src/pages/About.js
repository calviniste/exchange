import { useEffect } from 'react';
import ab from '../assets/img/machine.jpg'
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
              <p class="text-primary fs-5 mb-4">We offers you high quality counterfeit banknotes 🌟✔️  </p>
              
             
            
              <p class="mb-4">We use the latest technology to print our counterfeit notes/tickets that look 100% like the real ticket.  As with real banknotes, we ensure that all security features are accurate in our banknotes.  You can buy high quality undetectable counterfeit banknotes from us .  More than a billion of our products circulate all round the world .We deliver your products on short notice and offer full security, so don't be afraid to buy from us.  Delivery is discreet, safe and secure. ✅</p>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>Australian dollar</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>Us dollar</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>Euro</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span>Pounds</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default About