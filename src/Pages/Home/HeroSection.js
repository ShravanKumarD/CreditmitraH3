import React from "react";
import heroImage from "../../assets/images/hero-image1.png";
import { Link } from "react-router-dom";
function HeroSection(props) {
  return (
    <div className="hero-section">
      <div className="content a">
        <h6 className="hero-content">
          Your Trusted Loan Mitra
          <br />
          Loans Made Easy & Friendly
        </h6>
        <p>
          At CreditMitra, we understand that life doesn't always wait for
          payday. That's why we're here to offer you instant personal loans with
          no hassle and no waiting.{" "}
        </p>
        <div className="hero-content-button">
          {/* apply now was directing to samcint, now it's redirecting to same page */}
          <Link to="https://creditmitra.cloudbankin.com/onboard/#/login">
            <buttton className="btn brand-primary py-3 px-4 home-apply">Apply Now</buttton>
          </Link>
          <buttton className="btn brand-secondary py-3 px-4 home-download">
            Download App
          </buttton>
        </div>
      </div>
      <img
        src={heroImage}
        className="img-home"
        alt="hero image"
        loading="lazy"
      />
    </div>
  );
}

export default HeroSection;
