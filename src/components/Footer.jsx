import React from 'react'
import macro from "../assets/macro.jpg"

const Footer = () => {
  return (
    <div>
        <div className="container-fluid bg-light py-5 position-relative">
        {/* Top: Logo + Menu */}
        <div className="d-flex justify-content-between align-items-start px-4 flex-wrap">
          {/* Logo + Tagline */}
          <div className="mb-4">
            <div className="d-flex align-items-center mb-2">
              <img src={macro} alt="Macro" style={{ height: '24px', marginRight: '8px' }} />
              <strong>Macro</strong>
            </div>
            <p className="text-muted small mb-0">Start Designing Your Next Big Innovation Today</p>
          </div>
      
          {/* Navigation */}
          <div className="d-flex flex-column flex-md-row align-items-md-start gap-3">
            <div className="d-flex flex-column">
              <a href="#" className="nav-link px-0">Home</a>
              <a href="#" className="nav-link px-0">About Us</a>
              <a href="#" className="nav-link px-0">Services</a>
              <a href="#" className="nav-link px-0">Opportunities</a>
            </div>
            <div className="d-flex flex-column">
              <a href="#" className="nav-link px-0">Blog</a>
              <a href="#" className="nav-link px-0">FAQs</a>
              <a href="#" className="nav-link px-0">Partner with Us</a>
            </div>
          </div>
        </div>
      
        {/* Center Text */}
        <div className="text-center my-5">
          <h1 className="macro-title m-0" id="Macro_head">MACRO</h1>
        </div>
      
        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center px-4 mt-5 flex-wrap border-top pt-3">
          <small className="text-muted">© 2025 Macro. All rights reserved.</small>
          <div className="d-flex gap-4 mt-2 mt-md-0">
            <a href="#" className="text-dark small text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-dark small text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
