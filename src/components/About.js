import React from 'react'
import { Link } from 'react-router-dom';
import Heroe1 from "../assets/images/heroe1.jpg";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const About = () => {
  return (
    <section className="about-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-three__img">
              <div className="inner">
                <img src={Heroe1} alt="" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="col-xl-6">
            <div className="about-three__content">
              <div className="sec-title__tagline">
                <h6>ABOUT US</h6>
                <span className="right"></span>
              </div>
              <h2 className="sec-title__title">Construction For Commercial</h2>
            </div>
            <div className="about-three__content-inner">
              <div className="text1">
                <p>
                  Construction is a general term meaning the art and science to
                  form objects systems organizations, and comes from Latin
                  construction and Old French construction. To construct is the
                  verb:
                </p>
              </div>
              <div className="text2">
                <h4>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </h4>
              </div>
              <ul className="about-three__content-list">
               <li>
                <div className="icon-box">
                 <span className="icon-tick"></span>
                </div>
                <div className="text-box">
                 <p>Interior Design Package</p>
                </div>
               </li>
               <li>
                <div className="icon-box">
                 <span className="icon-tick"></span>
                </div>
                <div className="text-box">
                 <p>Renovation of Commercial Office</p>
                </div>
               </li>
               <li>
                <div className="icon-box">
                 <span className="icon-tick"></span>
                </div>
                <div className="text-box">
                 <p>Repairing of Residential Roof</p>
                </div>
               </li>
              </ul>
              <div className="about-three__content-btn">
               <Link to='/about' className='thm-btn' data-text='Read More'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About