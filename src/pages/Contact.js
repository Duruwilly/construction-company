import React from "react";
import { Link } from "react-router-dom";
import contactBg from "../assets/images/contactBg.jpg";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import IcomoonReact from "icomoon-react";
import iconSet from "../../src/selection.json";

const Contact = () => {
  return (
    <>
      {/* start header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h2>Contact Us</h2>
                  <div className="page-header__menu">
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end header */}

      {/* contact and address section */}
      <section className="contact-page">
        <div className="container">
          <div className="row">
            {/* cpntact page content */}
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="contact-page__content">
                <div className="title">
                  <h2>Get In Touch</h2>
                  <p>Feel free to request for a quote related to our services</p>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="location2"
                        color="green"
                        size={40}
                      />
                    </div>

                    <div className="content-box">
                      <h2>Address</h2>
                      <p>
                        5, Unity Close, Amadiya,
                        <br />
                        Abule -Egba, Lagos State
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                    <IcomoonReact
                        iconSet={iconSet}
                        icon="phone"
                        color="green"
                        size={40}
                      />
                    </div>

                    <div className="content-box">
                      <h2>Phone</h2>
                      <p className="number1">
                        <a href="tel:+234(0) 80 6812 8586">+234(0) 80 6812 8586</a>
                      </p>
                      <p className="number2">
                        <a href="tel:+234(0) 80 5056 8433">+234(0) 80 5056 8433</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                    <IcomoonReact
                        iconSet={iconSet}
                        icon="envelop"
                        color="green"
                        size={40}
                      />
                    </div>

                    <div className="content-box">
                      <h2>Email </h2>
                      <p className="email1">
                        <a href="mailto:hisestconsultandservices@gmail.com">hisestconsultandservices@gmail.com</a>
                      </p>
                      <p className="email2">
                        <a href="mailto:hisestconsultandservices@yahoo.com">hisestconsultandservices@yahoo.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end contact page content */}

            {/* start contact form */}
            <div className="col-xl-8 col-lg-8 col-md-7">
              <div className="contact-page__form">
                <form
                  
                  className="comment-one__form contact-form-validated"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <button
                        className="thm-btn1 comment-form__btn"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* end contact page form */}
          </div>
        </div>
      </section>
      {/* end contact page */}
    </>
  );
};

export default Contact;
