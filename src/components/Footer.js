import { NavLink, useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate=useNavigate()
    return (
        <div class="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-md-6">
                    <h1 class="text-primary mb-4"><img class="img-fluid me-2" src="img/icon-1.png" alt=""
                            style={{width:45}}/>PropnoteSandClone</h1>
                    <span>We offer undetectable counterfeit banknotes including Australian dollar, Euro, Pounds and Us dollar, For more details, contact us now.</span>
                </div>
                <div class="col-md-6">
                    <h5 class="mb-4">Newsletter</h5>
                    <div class="position-relative">
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email"/>
                        <button type="button"
                            class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-4">Services</h5>
                    <a class="btn btn-link" href="service" onClick={()=>navigate('service')}>Australian dollar</a>
                    <a class="btn btn-link" href="service" onClick={()=>navigate('service')}>Us dollar</a>
                    <a class="btn btn-link" href="service" onClick={()=>navigate('service')}>Pounds</a>
                    <a class="btn btn-link" href="service" onClick={()=>navigate('service')}>Euro</a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="about" onClick={()=>navigate('about')} >About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="service" onClick={()=>navigate('service')} >Services</a>
                    
                    
                    
                </div>
               
                <div class="col-lg-4 col-md-6">
                    <h5 class="mb-4 ">Get In Touch</h5>
                    <div class="mb-6 d-flex">
                        <a class="btn btn-square rounded-circle me-1" href="https://T.me/legitnotes101"><i class="fab fa-telegram"></i></a>
                        <a class="btn btn-square rounded-circle me-1" href="https://wa.me/message/BTB6VMQ2TOOYK1"><i class="fab fa-whatsapp"></i></a>
                        <a class="btn btn-square rounded-circle me-1" href="https://www.snapchat.com/add/arkiez?share_id=QprYLNgosI0&locale=en-US"><i class="fab fa-snapchat"></i></a>
                        <a class="btn btn-square rounded-circle me-1" href="mailto:propnotesandclone@gmail.com"><i class="fa fa-envelope"></i></a>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">propnotesandclone</a>, All Right Reserved.
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer