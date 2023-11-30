import { useEffect } from 'react';
import ab from '../assets/img/machine-min.jpg'
import WOW from 'wowjs';
import '../styles/lib/animate/animate.min.css'
import '../styles/lib/owlcarousel/assets/owl.carousel.min.css'
import vd from '../assets/vr.mp4'
import vd2 from '../assets/vrr.mp4'
const AboutV = () => {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div class="container-xxl py-5">
      <div class="container ">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow vd fadeInUp" data-wow-delay="0.1s">
           <video src={vd} controls></video>
          </div>
          <div class="col-lg-6 wow vd fadeInUp" data-wow-delay="0.5s">
          <video src={vd2} controls></video>
          </div>
        </div>
      </div>
    </div>)
}

export default AboutV