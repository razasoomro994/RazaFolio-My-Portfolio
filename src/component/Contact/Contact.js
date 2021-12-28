import React,{useState} from 'react'
import {UserSave} from "../../action/user.js"
import {useDispatch,connect} from 'react-redux';




import {
 
    Link
  } from "react-router-dom";
import UserReducer from '../../reducer/user.js';
  
 function Contact(props) {

  
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
                <Link className="nav-link scrollto" to="/project">project</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link scrollto" to="/service">Service</Link>
              </li>
            </ul>     
           </span>
          </div>
        </div>
      </nav>

      {/* ======= Contact Section ======= */}
      <section  className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: 'url(assets/img/overlay-bg.jpg)' }}>
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


export default Contact