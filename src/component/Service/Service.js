import React from 'react'
import {
 
    Link
  } from "react-router-dom";
  
 function Service() {
    return (
        <div>
                 
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RazaFolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link scrollto active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/project">project</Link>
              </li>
            </ul>     
           </span>
          </div>
        </div>
      </nav>      
    
      {/* ======= Services Section ======= */}
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Services
                </h3>
               
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="fa fa-desktop" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Design</h2>
                  <p className="s-description text-center">
                  Responsive web design simply means making websites that can adapt to the size of the visitor's viewport
                  The best quality web designing services especially custom web design.
                  We are the best choice for small business website design.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="fa fa-code" /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Development</h2>
                  <p className="s-description text-center">
                  We deliver innovative web solutions to clients by helping them identify their most important business and technology opportunities 

                  Our passion to build trusted long-term relationships with our customers. Finding the right solution not just for your business now, </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="fa fa-mobile" /></span>
                </div>  
                <div className="service-content">
                  <h2 className="s-title"> Mobile App Development</h2>
                  <p className="s-description text-center">
                   
                  I am working on the multiple mobile apps development platforms Android and IOS Apps development. We also offer mobile app customization if you need more specific features requirements on mobile applications.

</p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>{/* End Services Section */}

    {/* ======= Footer ======= */}
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">©Copyright <strong>RazaFolio</strong>. All Rights Reserved</p>
                <div className="credits">
                  {/*
            
             */}
                  Designed by <a >Hasnain Raza</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{/* End  Footer */}
        </div>
    )
}

export default Service
