import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/css/style.css";
import "../styles/css/bootstrap.min.css";
import ib from "../assets/img/hero-1.png";

const Nav = () => {
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    navigate(navItem);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top p-0 px-4 px-lg-5">
        <a href="" onClick={() => handleNavItemClick("")}
              className={`nav-item nav-link ${
                activeNavItem === "" ? "active" : ""}`} >
          <h2 className="m-0 text-primary">
            <img
              className="img-fluid me-2"
              src="img/icon-1.png"
              alt=""
              style={{ width: 45 }}
            />
            propnotesandclone
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-4 py-lg-0">
            <a
              href=""
              onClick={() => handleNavItemClick("")}
              className={`nav-item nav-link ${
                activeNavItem === "" ? "active" : ""
              }`}
            >
              Home
            </a>
            <a
              href="about"
              onClick={() => handleNavItemClick("about")}
              className={`nav-item nav-link ${
                activeNavItem === "about" ? "active" : ""
              }`}
            >
              About
            </a>
            <a
              href="service"
              onClick={() => handleNavItemClick("service")}
              className={`nav-item nav-link ${
                activeNavItem === "service" ? "active" : ""
              }`}
            >
              Service
            </a>
          </div>
          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href="https://wa.me/message/BTB6VMQ2TOOYK1"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-2"
              href="https://T.me/legitnotes101"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              className="btn btn-square rounded-circle bg-light text-primary me-0"
              href="https://www.snapchat.com/add/arkiez?share_id=QprYLNgosI0&locale=en-US"
            >
              <i className="fab fa-snapchat"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;