import React from "react"
import '../styles/css/style.css'
import '../styles/css/bootstrap.min.css'
import ib from '../assets/img/hero-1.png'
import { NavLink } from "react-router-dom"
const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
                <a href="index.html" class="navbar-brand d-flex align-items-center">
                    <h2 class="m-0 text-primary">
                        <img class="img-fluid me-2" src="img/icon-1.png" alt="" style={{ width: 45 }} />
                        propnotesandclone</h2>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-4 py-lg-0">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#about" class="nav-item nav-link">About</a>
                        <a href="#service" class="nav-item nav-link">Service</a>
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
        </div>
    )
}

export default Nav