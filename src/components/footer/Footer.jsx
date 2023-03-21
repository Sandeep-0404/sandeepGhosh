import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__main-content">
            <div className="footer-info">
              <h2>Sandeep Ghosh</h2>
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className="footer-social">
              <h2>Social</h2>
              <div className="footer-links">
                <a href="" className="footer__social-icon" target="_blank">
                  <i className="uil uil-twitter"></i>
                </a>
                <a href="" className="footer__social-icon" target="_blank">
                  <i className="uil uil-instagram"></i>
                </a>
                <a href="" className="footer__social-icon" target="_blank">
                  <i className="uil uil-linkedin"></i>
                </a>
                <a href="" className="footer__social-icon" target="_blank">
                  <i className="uil uil-dribbble"></i>
                </a>
                <a href="" className="footer__social-icon" target="_blank">
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <p className="copy">
            &#169; coyright 2023, Made by{" "}
            <span className="footer-name">Sandeep Ghosh</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
