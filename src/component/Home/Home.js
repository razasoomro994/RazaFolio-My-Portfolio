import React,{useState} from 'react'
import {UserSave} from "../../action/user.js"
import {useDispatch,connect} from 'react-redux';


import {
 
  Link
} from "react-router-dom";

// import './Home.css'

function Home() {

  
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  
  const [subject,setSubject] =useState("")
  const [message,setMessage] =useState("")

  const saveUser = (e) => {
    e.preventDefault();
    let user = {name,subject,message,email,}
    console.log("user", user)
    dispatch(UserSave(user));

  };

  const dispatch= useDispatch()

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
                <a className="nav-link scrollto active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#about">About</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link scrollto" href="#services">Service</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/project">project</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link scrollto" href="#contact">Contact</a>
              </li>
            </ul>     
           </span>
          </div>
        </div>
      </nav>
    
      {/* ======= Hero Section ======= */}
      <div id="hero" className="hero route bg-image" >
        <div className="overlay-itro" />
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              {/*<p class="display-6 color-d">Hello, world!</p>*/}
              <h1 className="hero-title mb-4">I am <b>Hasnain Raza</b> </h1>
              <p className="hero-subtitle  "><span className='typewriter' > Designer, Developer, Freelancer, </span></p>
              {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
          </div>
        </div>
      </div>{/* End Hero Section */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about-mf sect-pt4 route">
        <div className="title-box text-center">
                <h3 className="title-a">
                  About
                </h3>
               
                <div className="line-mf" />
              </div>
                          <br/>
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

      <hr/>

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

            {/* ======= Contact Section ======= */}

  <hr/>
      <div className="title-box text-center">
                <h3 className="title-a">
                  Contact
                </h3>
               
                <div className="line-mf" />
              </div>

     
      {/* ======= Contact Section ======= */}
      <section id='contact' className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(assets/img/overlay-bg.jpg)' }}>
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div  className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          Send Message Us
                        </h5>
                      </div>
                      <div>
                        <form    onSubmit={saveUser} className="php-email-form">
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="text" name="name" className="form-control"
                                                onChange={(e) => setName(e.target.value)}

                                 id="name" value={name} placeholder="Your Name" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="email" className="form-control"
                                                onChange={(e) => setEmail(e.target.value)}

                                 name="email" id="email" value={email} placeholder="Your Email" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="text" className="form-control"
                                                onChange={(e) => setSubject(e.target.value)}

                                 name="subject" value={subject} id="subject" placeholder="Subject" required />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea className="form-control"
                                                onChange={(e) => setMessage(e.target.value)}

                                 name="message" value={message} rows={5} placeholder="Message" required defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message" />
                              <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">
                        DISCUSS YOUR PROJECT TODAY!
                        </h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Send me message and disscuss more detail of project; 
                        </p>
                        <ul className="list-ico">
                          <li><span className="fa fa-phone" />  03052111729</li>
                          <li><span className="fa fa-envelope" /> razasoomro994@gmail.com</li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                        <li><a target='_blank' href='https://www.facebook.com/profile.php?id=100075840205914'><span className="ico-circle"><i className="fa fa-facebook" /></span></a></li>
                          <li><a target='_blank' href="https://www.instagram.com/hasaninraza994/"><span className="ico-circle"><i className="fa fa-instagram" /></span></a></li>
                          <li><a target='_blank' href='https://twitter.com/Razasoomro994'><span className="ico-circle"><i className="fa fa-twitter" /></span></a></li>
                          <li><a target='_blank' href='https://www.linkedin.com/in/hasnain-raza-156a20216/'><span className="ico-circle"><i className="fa fa-linkedin" /></span></a></li> </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}
      {/* End #main */}
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
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="fa fa-arrow-up" aria-hidden="true">top</i></a>


    </div>

  )
}

const mapStateToProps=(state)=>({
  UserReducer: state.UserReducer
})





export default connect(mapStateToProps,null)(Home)