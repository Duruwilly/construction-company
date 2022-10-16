import React from 'react'
import Footerbg from '../assets/images/pattern/footer-v1-pattern.png'
import Animatebg from '../assets/images/resources/footer-v1-img3.png'
import "../assets/vendors/animate/animate.min.css";
import "../assets/vendors/animate/custom-animate.css";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from "../assets/images/HisestLogo.png";

const Footer = () => {
  return (
    <footer className="footer-one-sec">
      <div
        className="footer-one__pattern"
        style={{ backgroundImage: `url(${Footerbg})` }}
      ></div>
      <div className="footer-one__top">
        <div
          className="footer-one__top-img"
          style={{ backgroundImage: `url(${Animatebg})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-x1-12">
              <div className="footer-one__top-inner">
                <div className="row">
                  <div
                    className="col-xl-10 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <Link to="/">
                          <img src={Logo} alt="logo" className="logo" />
                        </Link>
                      </div>
                      <p className="footer-widget__about-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, provident.
                      </p>
                      <div className="footer-widget__about-social-link">
                        <ul>
                          <li>
                            <a href="#" target="_blank">
                              <span>
                                {" "}
                                <FaFacebookF />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <span>
                                <FaTwitter />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <span>
                                <FaInstagram />
                              </span>
                            </a>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div class="footer-widget__column footer-widget__services">
                      <h2 class="footer-widget__title">Our Services</h2>
                      <ul class="footer-widget__services-list">
                       <li class="footer-widget__services-list-item">
                        <Link to='/about'>About Us</Link>
                       </li>
                       <li class="footer-widget__services-list-item">
                        <Link to='/services'>Services</Link>
                       </li>
                       <li class="footer-widget__services-list-item">
                        <Link to='/projects'>Projects</Link>
                       </li>
                      <li class="footer-widget__services-list-item">
                       <Link to='/contact'>
                        Contact
                       </Link>
                       </li> 
                      <li class="footer-widget__services-list-item">
                       <Link to='/request-quote'>
                        Request Quote
                       </Link>
                       </li> 
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
            <div class="footer-one__bottom clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="footer-one__bottom-inner">
                                <div class="footer-one__bottom-text">
                                    <p>Copyright &copy;2022. All rights reserved to <a href="index.html">Hisest</a></p>
                                </div>

                                <div class="footer-one__bottom-list">
                                    <ul>
                                        <li><Link to='/terms-and-condition'>Terms & Conditins </Link></li>
                                        <li><Link to='/services'> Services</Link></li>
                                        <li><Link to='/careers'>Careers</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end footer bottom */}
    </footer>
  );
}

export default Footer