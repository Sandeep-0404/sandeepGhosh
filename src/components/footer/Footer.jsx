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
                A Full Stack Web Developer building Web Applications that can
                make a difference
              </p>
            </div>
            <div className="footer-social">
              <h2>Social</h2>
              <div className="footer-links">
                <a
                  href="https://twitter.com/sandeepgho84920"
                  className="footer__social-icon"
                  target="_blank"
                >
                  <i className="uil uil-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/ghoshsandeep572/"
                  className="footer__social-icon"
                  target="_blank"
                >
                  <i className="uil uil-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sandeep-ghosh-bbb94a210/"
                  className="footer__social-icon"
                  target="_blank"
                >
                  <i className="uil uil-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Sandeep-0404"
                  className="footer__social-icon"
                  target="_blank"
                >
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
