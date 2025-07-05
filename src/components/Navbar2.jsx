import React from 'react'
import { Link } from 'react-router-dom';
import logo1 from "../assets/macro.jpg"

const Navbar2 = () => {
  return (
   <div className="px-3">
      <nav
        className="navbar navbar-expand-lg bg-white px-1 px-lg-5 p-3"
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={logo1} alt="Logo" className="img-fluid me-2" style={{ maxHeight: '30px' }} />
            <span className="text-dark">Macro</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-lg-3 text-center">
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-orange" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/About_us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Hire_Talent">Hire Talent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Find_job">Find Job</Link>
              </li>
            </ul>

            <Link to="/contact_us" className="btn btn-dark rounded-pill d-flex align-items-center gap-2">      
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar2
