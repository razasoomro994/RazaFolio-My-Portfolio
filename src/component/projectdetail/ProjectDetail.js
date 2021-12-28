import React from 'react'
import {Link }from 'react-router-dom'
import Port from '../../assets/img/portfolio-details-1.jpg'
// import Port1 from '../../assets/img/portfolio-details-2.jpg'
import './projectdetail.css'


function ProjectDetail() {
    return (
        <div>

  {/* ======= Header ======= */}
      
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">RazaFolio</a>
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
                <Link className="nav-link scrollto" to="/service">Service</Link>
              </li>
             

              <li className="nav-item">
                <Link className="nav-link scrollto" to="/contact">Contact</Link>
              </li>
            </ul>     
           </span>
          </div>
        </div>
      </nav>
    

            {/* navbar end  */}
            <div className="hero hero-single route bg-image" style={{backgroundImage: 'url(assets/img/overlay-bg.jpg)'}}>
          <div className="overlay-mf" />
          <div className="hero-content display-table">
            <div className="table-cell">
              <div className="container">
                <h2 className=" txtstyle mb-4">Project Details</h2>
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/project">Project</Link>
                  </li>
                  <li className="breadcrumb-item active">Project Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <main id="main">
          {/* ======= Portfolio Details Section ======= */}
          <section id="portfolio-details" className="portfolio-details">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <img src={Port} alt="picture" />
                        
                      </div>
                      {/* <div className="swiper-slide">
                        <img src={Port1} alt="" />
                      </div> */}
                      <div className="swiper-slide">
                        <img src="assets/img/portfolio-details-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                      <li><strong>Category</strong>: Web design</li>
                      <li><strong>Client</strong>: ASU Company</li>
                      <li><strong>Project date</strong>: 01 March, 2020</li>
                      <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                    </ul>
                  </div>
                  {/* <div className="portfolio-description">
                    <h2>This is an example of portfolio detail</h2>
                    <p>
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </section>{/* End Portfolio Details Section */}
        </main>{/* End #main */}

         {/* ======= Footer ======= */}
      <footer >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">©Copyright <strong>2021</strong>. All Rights Reserved</p>
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

export default  ProjectDetail  
