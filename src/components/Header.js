import React from "react"
import '../styles/css/style.css'
import '../styles/css/bootstrap.min.css'
import ib from '../assets/img/hero-1.png'
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
                <a href="index.html" class="navbar-brand d-flex align-items-center">
                    <h2 class="m-0 text-primary">
                        <img class="img-fluid me-2" src="img/icon-1.png" alt="" style={{ width: 45 }} />
                        PropnoteSandClone</h2>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-4 py-lg-0">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#about" class="nav-item nav-link">About</a>
                        <a href="#service" class="nav-item nav-link">Service</a>
                        <a href="#faq" class="nav-item nav-link">Faq</a>
                    </div>
                    <div class="h-100 d-lg-inline-flex align-items-center d-none">
                        <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                            class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                            class="fab fa-twitter"></i></a>
                        <a class="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i
                            class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </nav>

            <div class="container-fluid hero-header bg-light py-5 mb-5">
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6">
                            <h1 class="display-4 mb-3 animated slideInDown">Make Better Life With Trusted SandClone</h1>
                            <p class="animated slideInDown">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                                magna dolore erat amet</p>
                            <a href="" class="btn btn-primary py-3 px-4 animated slideInDown">Explore More</a>
                        </div>
                        <div class="col-lg-6 animated fadeIn">
                            <img class="img-fluid animated pulse infinite" style={{ animationDuration: 3 }} src={ib} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header