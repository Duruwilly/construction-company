import React from 'react'
import Project1 from "../assets/images/project1.jpeg";
import Project2 from "../assets/images/project2.jpeg";
import AbtProjectBg from "../assets/images/project/project-v1-img1.jpg";

const Projects = () => {
  return (
    <section className="project-one-sec">
        <div className="shape1">
          <img src="../assets/images/shapes/project-v1-shape1.png" alt="" />
        </div>
        <div className="shape2">
          <img src="../assets/images/shapes/project-v1-shape2.png" alt="" />
        </div>
        <div className="container-fluid">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              <span className="left"></span>
              <h6>Our project</h6> <span className="right"></span>
            </div>
            <h2 className="sec-title__title">Our Working Project</h2>
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              {/* project menu box */}
              <div className="project-one__menu-box">
                <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                  <li data-filter=".filter-item" className="active">
                    <span className="filter-text">
                      {" "}
                      <i className="icon-hammer"></i> All Project
                    </span>
                  </li>
                  <li data-filter=".factory">
                    <span className="filter-text">
                      {" "}
                      <i className="icon-wrench"></i>
                      Factory
                    </span>
                  </li>
                  <li data-filter=".offices">
                    <span className="filter-text">
                      {" "}
                      <i className="icon-surgery"></i>
                      Offices{" "}
                    </span>
                  </li>
                  <li data-filter=".interios">
                    <span className="filter-text">
                      {" "}
                      <i className="icon-line-chart"></i>
                      Survey
                    </span>
                  </li>
                  <li data-filter=".bulding">
                    <span className="filter-text">
                      {" "}
                      <i className="icon-hotel"></i>
                      Building
                    </span>
                  </li>
                </ul>
              </div>
              {/* end project menu box */}
            </div>
          </div>

          <div className="row filter-layout masonary-layout">
            {/* project one */}
            <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={Project1} alt="" />
                  </div>
                  <div className="content-box">
                    <h2>Welding</h2>
                    <p>Welding of polines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* project two */}
            <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={Project2} alt="" />
                  </div>
                  <div className="content-box">
                    <h2>Installation</h2>
                    <p>Installing of plumbing pipes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* project three */}
            <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={Project1} alt="" />
                  </div>
                  <div className="content-box">
                    <h2>Texture Interture</h2>
                    <p>Building Interior</p>
                  </div>
                </div>
              </div>
            </div>

            {/* project 4 */}
            <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <div className="inner">
                    <img src={Project2} alt="" />
                  </div>
                  <div className="content-box">
                    <h2>Texture Interture</h2>
                    <p>Building Interior</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end project */}
          </div>
        </div>
      </section>
  )
}

export default Projects