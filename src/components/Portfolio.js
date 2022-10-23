import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import project1 from "../assets/images/homeProject1.jpeg";
import project2 from "../assets/images/homeProject2.jpeg";
import project3 from "../assets/images/homeProject3.jpeg";
import project4 from "../assets/images/homeProject4.jpeg";
import project5 from "../assets/images/homeProject5.jpeg";
import OwlCarousel from "react-owl-carousel";
import "../assets/vendors/owl-carousel/owl.carousel.min.css";
import "../assets/vendors/owl-carousel/owl.theme.default.min.css";
import "owl.carousel";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


const Portfolio = () => {
 const options = {
   loop: true,
   margin: 10,
   nav: false,
   smartSpeed: 500,
   autoHeight: false,
   autoplay: true,
   dots: false,
   autoplayTimeout: 6000,
   responsive: {
     0: {
       items: 1,
     },
     600: {
       items: 1,
     },
     750: {
       items: 2,
     },
     1100: {
       items: 3,
     },
     1350: {
       items: 4,
     },
   },
 }; 
  return (
    <section className="project-three">
      <div className="container-fluid">
        <div className="sec-title text-center">
          <div className="sec-title__tagline">
            <span className="left"></span>
            <h6>Latest PROJECT</h6> <span className="right"></span>
          </div>
          <h2 className="sec-title__title">
            Our latest completed and <br /> running projects.
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <OwlCarousel
              className="project-three__carousel owl-carousel owl-theme"
              {...options}
            >
              {/* single project */}
              <div className="project-three__single">
                <div className="project-three__single-img">
                  <img src={project1} alt="client" />
                  {/* <div className="icon-box">
                    <a href={Heroe1} className="img-popup">
                      <span className="icon-plus-sign">
                       <AiOutlinePlus />
                      </span>
                    </a>
                  </div> */}
                  <div className="content-box">
                    <h3>
                    Alluminium office <br /> partitioning
                    </h3>
                  </div>
                </div>
              </div>

              {/* project two */}
              <div className="project-three__single">
                <div className="project-three__single-img">
                  <img src={project2} alt="client" />
                  {/* <div className="icon-box">
                    <a href={Heroe1} className="img-popup">
                      <span className="icon-plus-sign"></span>
                    </a>
                  </div> */}
                  <div className="content-box">
                    <h3>
                      Construction of trailer park
                    </h3>
                  </div>
                </div>
              </div>

              {/* project three */}
              <div className="project-three__single">
                <div className="project-three__single-img">
                  <img src={project3} alt="client" />
                  {/* <div className="icon-box">
                    <a href={Heroe1} className="img-popup">
                      <span className="icon-plus-sign"></span>
                    </a>
                  </div> */}
                  <div className="content-box">
                    <h3>
                      Roof restoration, installation and maintenance
                    </h3>
                  </div>
                </div>
              </div>
              {/* project 4 */}
              <div className="project-three__single">
                <div className="project-three__single-img">
                  <img src={project5} alt="client" />
                  {/* <div className="icon-box">
                    <a href={Heroe1} className="img-popup">
                      <span className="icon-plus-sign"></span>
                    </a>
                  </div> */}
                  <div className="content-box">
                    <h3>
                      Gate house Renovation
                    </h3>
                  </div>
                </div>
              </div>
              {/* project ends */}

            </OwlCarousel>
          </div>
          <div className="col-xl-12">
           <div className="project-three-more-project-btn text-center">
            <div className="btn-box">
             <Link to='/projects' className='thm-btn' data-text="View All Projects">
              View All Projects
             </Link>
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio