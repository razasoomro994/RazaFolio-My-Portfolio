import React from 'react'
import {
 
    Link
  } from "react-router-dom";
  
function About() {
    return (
        <div>

            
             {/* ======= Header ======= */}

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
                <Link className="nav-link scrollto" to="/project">project</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/service">Service</Link>
              </li>
            </ul>     
           </span>
          </div>
        </div>
      </nav>

    
    

      
    
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img src="assets/" className="img-fluid rounded b-shadow-a" alt="Profile" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>Hasnain Raza</span></p>
                            <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                            <p><span className="title-s">Email: </span> <span>razasoomro994@gmail.com</span></p>
                            <p><span className="title-s">Phone: </span> <span>(03052111729)</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Skill</p>
                        <span>HTML,CSS,JAVASCRIPT</span> <span className="pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>REACT</span> <span className="pull-right">75%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>REACT-NATIVE</span> <span className="pull-right">80%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>FLUTTER</span> <span className="pull-right">90%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            About me
                          </h5>
                        </div>
                        <p className="lead">
                          <b> My Name is Hasnain Raza, born on the 8th of May 2002.
                          I live in the Pakistan
                          I am a creative
                          front-end And Backend developer and designer also...
                        </b>
                         </p>
                        <p className="lead">
                         <b>
                         a freelance software developer specialized in
                        both front-end and back-end web development.

                           </b> </p>
                        <p className="lead">
                         <b>I am a  programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</b> </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End About Section */}
      </main>

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

export default About