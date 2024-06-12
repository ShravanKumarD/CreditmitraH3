import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import ApplicationProcessingCard from "../../Components/ApplicationProcessingCard";
import SEO from "../../Components/SEO/SEO";
import MissionImage from "../../assets/images/aboutus//Mission3D.png";
import VisionImage from "../../assets/images/aboutus/Vision3D_3.png";
import aboutus from "../../assets/images/aboutus.png";

function AboutUs(props) {
  let points = [
    {
      quote: "Empowering Millennials      with Innovative Loans",
      description:
        "CreditMitra offers innovative loans to help millennials achieve a life that they desire. We differentiate in the otherwise cluttered Personal Loan segment and deliver fastest Personal Loans at customer friendly terms.",
    },
    {
      quote: "Customer-Centric Loan Solutions",
      description:
        "CreditMitra has in-house RBI registered NBFC. Our focus is to delight our customers by helping them choose the best loan products. We offer flexible amounts and tenures, allowing customers to choose according to their individual needs.",
    },
    {
      quote: "Trusted  Leadership  in  FinTech",
      description:
        "We boast of an experienced leadership and highly talented team, making us one of the fastest growing & trusted FinTech companies in the category.",
    },
    {
      quote: "Quick and Convenient Personal Loans",
      description:
        "We offer easy and quick personal loans to satisfy your immediate financial needs, guaranteeing a smooth and hassle-free application to disbursement process.",
    },
  ];

  function VisionCard(cardInfo) {
    return (
      <>
        <div
          className="application-process-card aboutcard"
          style={{
            border: "1px solid rgba(159, 205, 233)", // 0.5 is the opacity
          }}
        >
          <div className="content">
            <h6>{cardInfo.heading}</h6>
            <p style={{ fontSize: "16px", fontWeight: "300" }}>
              {cardInfo.description}
            </p>
          </div>
          <img height="200px" src={cardInfo.img} alt="vision"/>
        </div>
      </>
    );
  }

  function ProcessingCard(props) {
    return (
      <div
        className="application-process-card"
        style={{
          border: "1px solid #9FCDE9",
        }}
      >
        <div className="content">
          {props.orderNo && (
            <div className="list-number">
              <div>{props.orderNo}</div>
            </div>
          )}
          {props.heading && <h6>{props.heading}</h6>}
          <p style={{ fontSize: "16px", fontWeight: "300" }}>{props.description}</p>
        </div>
        {props.img && <img className="inmageHome" src={props.img} />}
      </div>
    );
  }
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Best instant personal loan in India | Hyderabad | CreditMitra"
        description="CreditMitra is the best instant personal loan in india. We offer instant personal loans upto 2 lakhs with attractive interest rates. Apply for your instant personal loan now."
        keywords="best instant personal loan in india, best personal loan in india, instant personal loans in hyderabad"
        name="CreditMitra"
        type="LendingService"
      />

      <section>
        <div className="page-container about-us">
          <div className="about-us-container">
            <div className="content">
              <h6 className="heading abtus">
                Welcome to CreditMitra
                <br />
                Your Digital Lending Partner!
              </h6>

              <div className="element"></div>
              <div className="about-section">
                <div className="about-section-content">
                  <h6>About CreditMitra</h6>
                  <p>
                    Crafting a Revolutionary Financial Journey CreditMitra is
                    revolutionizing the lending landscape, catering to the
                    financial needs of young salaried Indians. Our user-centric
                    platform offers simplicity, transparency, and flexibility.
                    Partnering with RBI-registered NBFCs, we empower
                    self-employed and salaried individuals with quick loans up
                    to Rs 2 lakh, flexible repayment options, and competitive
                    interest rates
                  </p>
                </div>
                <img height="300px" className="aboutus" src={aboutus} alt="creditmitra card"/>
              </div>
            </div>
            <div className="about-points-container row">
              {points.map((each, index) => {
                return (
                  <div className="col-sm-6 aboutcard">
                    <div className="each-point">
                      <div className="quote-container">
                        <span
                          style={{ fontFamily: "Rajdhani", padding: "2.1%" }}
                        >
                          {"0" + (index + 1)}
                        </span>
                        <p>"{each.quote}"</p>
                      </div>
                      <ProcessingCard description={each.description} />
                    </div>
                  </div>
                );
              })}
            </div>
            <VisionCard
              heading="Our Mission"
              img={MissionImage}
              description="Our core mission is to champion financial liberation for all. We focus on breaking away from conventional lending practices, eliminating the requirement for collateral and democratizing access to financial resources. We specialize in providing flexible loan options tailored to diverse needs, accompanied by repayment terms designed for utmost convenience. We strive to emerge as the leading financial Mitra for both ambitious and salaried individuals, delivering transformative solutions that fuel aspirations."
            />
            <VisionCard
              heading="Our Vision"
              img={VisionImage}
              description="We as a company, envision a future where financial freedom is within reach for everyone. We want to revolutionize the lending landscape by challenging traditional norms and barriers. We aspire to create a world where collateral-free loans are the norm, granting equal opportunities to all individuals. We see ourselves as catalysts for positive change, empowering individuals to pursue their dreams and achieve their goals with confidence."
            />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
