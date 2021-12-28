import React from 'react'
import {Link } from 'react-router-dom'

function Project() {
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

        {/* ======= Portfolio Section ======= */}
        <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Projects
                </h3>
                <p className="subtitle-a">
                 Here is My Some Projects
                  </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/work-1.jpg" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Web development</h2>
                      <div className="w-more">
                        <span className="w-ctegory">  Agency Website </span> / <span className="w-date"> 8 Dec 2021</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <Link to='/projectdetail'> <span className="fa fa-plus" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/work-2.jpg" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Loreda Cuno Nere</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <Link to="/projectdetail1"> <span className="fa fa-plus" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/work-3.jpg" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Portfolio</h2>
                      <div className="w-more">
                        <span className="w-ctegory">This Portfolio</span> / <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <Link to="/projectdetail2"> <span className="fa fa-plus" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/work-4.jpg" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">ReactJs Project</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Todo_List</span> / <span className="w-date">1 Sep. 2020</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                      <Link to="/projectdetail3"> <span className="fa fa-plus" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/work-5.jpg" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Lena Mado</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <Link to="/projectdetail4"> <span className="fa fa-plus" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="assets/img/work-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    <img src="assets/img/work-6.jpg" alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Studio Big Bang</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <Link to="/projectdetail5"> <span className="fa fa-plus" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Portfolio Section */}

    

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


export default Project