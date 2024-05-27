import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import './../PersonalsLoansDropDown/InstantPersonalLoansByLocation.css';
import MobileImg from "./../../../src/assets/images/mobile.png";
import gplay from "./../../../src/assets/images/gplay.png";

const InstantPersonalLoansAtHyd = (props) => {
  const sectionRef = useRef(null);
  const feedbacks = [
    {
      header: "Local Expertise",
      comment: "Skilled local customer service representatives from Mumbai are on board to answer any questions you may have and guide you through the loan application process.",
    },
    {
      header: "Quick Approval",
      comment: "Receive the approval and disbursement of your loan in a day.Select payback options based on your spending ability and budget. We have no hidden charges policy.",
    },
    {
      header: "Safe and Secure",
      comment: "We realize the value of personal information and the confidence you put in us. Hence, to safeguard data we employ cutting-edge security technologies.",
    },
  ];
  const process = [
    {
      quote: "Apply online here:",
      description: "Easy and quick online application.",
    },
    {
      quote: "Upload Documents:",
      description: "Easily submit the necessary documents online.",
    },
    {
      quote: "Get Approval:",
      description: "Quick credit evaluation and loan approval.",
    },
    {
      quote: "Receive Funds:",
      description: "The money is transferred to your account right away.",
    },
  ];

  function getFeedbackCard() {
    return feedbacks.map((each, index) => (
      <div key={index} className=" each-card">
        <div className="card-body">
          <div className="inner-card">{each.header}</div>
          <p className="comment">{each.comment}</p>
        </div>
      </div>
    ));
  }

  function ProcessCards() {
    return process.map((item, index) => (
      <div key={index} className="processCard each-card">
        <div className="card-body">
          <h2>{item.quote}</h2>
          <p className="data">{item.description}</p>
        </div>
      </div>
    ));
  }

  return (
    <>
      <Header routePath={props.routePath} />
      <section>
        <div className="page-container products-page">
          <div className="Location-section">
            <h6 className='header'>Instant Loans in Mumbai</h6>
            <small>
            Need Cash in Mumbai?
Get Approved Within Minutes
            </small>
            <p>
            Mumbai is a city that never sleeps, and neither should your financial options.  With CreditMitra, the reliable rapid loan app in Mumbai, you may easily and swiftly obtain the money you require right from your phone.
            </p>
            <div className='sub-title'>
              <h2>Why CreditMitra is the top choice in Mumbai?</h2>
            </div>

            <section>
              <div className="chart-cards" ref={sectionRef}>
                <div className="card-container">{getFeedbackCard()}</div>
              </div>
            </section>

            <section>
              <div className='sub-title'>
                <h2>How It Works?</h2>
                <div className="chart-cards" ref={sectionRef}>
                  <div className="four-card-container">{ProcessCards()}</div>
                </div>
              </div>
            </section>

            <section>
              <div className={`${props.className ? props.className : ""} description-section`}>
                <div className='content'>
                  <h6>{props.heading}</h6>
                  <div className='headline'>Get personal loan right out of your pocket</div>
                  <h2>Download the app from Google Play</h2>
                  <div>
                    <img className="gplay" src={gplay} alt="Google Play" />
                  </div>
                </div>
                <div className='img-container'>
                  <img src={MobileImg} alt="Mobile App" />
                </div>
              </div>
            </section>
          </div>
          
          <div className="product-apply-button">
            <button className="btn brand-primary">
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Apply Now</Link>
            </button>
          </div>

          <p className="footer-note">
            Don't let financial constraints hold you back from living the life you want. Creditmitra's personal loan for salaried is here to support you every step of the way. Apply now and take control of your financial future!
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default InstantPersonalLoansAtHyd;
