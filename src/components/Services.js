import React from 'react'
import services1 from '../assets/images/shapes/testimonials-v1-shape1.png'
import services2 from '../assets/images/update1.0/services-v3-shape2.png'
import IcomoonReact from 'icomoon-react'
import iconSet from '../../src/selection.json'



import Heroe1 from "../assets/images/heroe1.jpg";

const Services = () => {
  return (
    <section className="services-three">
      <div className="shape1">
        <img src={services1} alt="icon" />
      </div>
      <div className="shape2 rotate-me">
        <img src={services2} alt="icon" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="services-three__top">
              <div className="sec-title">
                <div className="sec-title__tagline">
                  <h6>COMPANY SERVICES</h6> <span className="right"></span>
                </div>
                <h2 className="sec-title__title">
                  Our Company Best <br /> Services
                </h2>
              </div>
              <div className="text-box">
                <p>
                  There are many variations of pasagges of Lorem ipsum dolor sit
                  amet. <br /> the best have suffered alteracation in some form.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* services one */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single active">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${Heroe1})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="road"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Civil Construction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, quae!
              </p>
            </div>
          </div>
          {/* services two */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${Heroe1})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="library"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Procurement</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, quae!
              </p>
            </div>
          </div>
          {/* services three */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${Heroe1})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="office"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Facility Management</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, quae!
              </p>
            </div>
          </div>
          {/* services four */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${Heroe1})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="dice"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Engineering Survey</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, quae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services