import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join The Adventure to Newsletter to Recieve Our Best Vacation Deals
        </p>
        <p className="para">You can unsubscribe anytime</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              FlexGo <i className="fab-fa-typo3" />
            </Link>
            <small className="wbsite-rights">FlexGO © 2021</small>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="linkedIn"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>

              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
