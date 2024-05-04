import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ApplicationProcessingCard from "../../Components/ApplicationProcessingCard";
import SEO from "../SEO/SEO";
import Image1 from "../../assets/images/mission.png";
import Image2 from "../../assets/images/vision.png";
import aboutus from "../../assets/images/aboutus.png";

function AboutUs(props) {
  let points = [
    {
      quote: "Empowering Millennials      with Innovative Loans",
      description:
        "Credit Mitra offers innovative loans to help millennials achieve a life that they desire.We differentiate in the otherwise cluttered Personal Loan segment and deliver fastest Personal Loans at customer friendly terms.",
    },
    {
      quote: "Customer-Centric Loan Solutions",
      description:
        "Credit Mitra has in-house RBI registered NBFC. Our focus is to delight our customers by helping them choose the best loan products.",
    },
    {
      quote: "Trusted  Leadership  in  FinTech",
      description:
        "We boast of an experienced leadership and highly talented team, making us one of the fastest growing & trusted FinTech companies in the category.",
    },
    {
      quote: "Quick and Convenient Personal Loans",
      description:
        "Credit Mitra has in-house RBI registered NBFC. Our focus is to delight our customers by helping them choose the best loan products.",
    },
  ];
  function VisionCard(cardInfo) {
    return (
      <>
        <div className="application-process-card small-card">
          <div className="content">
            <h6>{cardInfo.heading}</h6>
            <p>{cardInfo.description}</p>
          </div>
          <img height="300px" src={cardInfo.img} />
        </div>
      </>
    );
  }
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="best instant personal loan in India | Hyderabad | CreditMitra"
        description="CreditMitra is the best instant personal loan in india. We offer instant personal loans upto 2 lakhs with attractive interest rates. Apply for your instant personal loan now."
        keywords="best instant personal loan in india, best personal loan in india, instant personal loans in hyderabad"
        name="Credit Mitra"
        type="article"
      />

      <section>
        <div className="page-container about-us">
          <div className="about-us-container">
            <div className="content">
              <h6 className="heading">
                Welcome to Credit Mitra
                <br />
                Your Digital Lending Partner!
              </h6>
              <div className="about-section">
                <div className="about-section-content">
                  <h6>About Credit Mitra</h6>
                  <p>
                    Credit Mitra is a fintech company facilitating personal
                    loans through a mobile application to salaried employees
                    pan-India, within 24 hours
                  </p>
                </div>
                <img height="300px" src={aboutus} />
              </div>
            </div>
            <div className="about-points-container row">
              {points.map((each, index) => {
                return (

                  
                    <div className="col-sm-6">
                      <div className="each-point">

                        <div className="quote-container">
                          <span>{"0" + (index + 1)}</span>
                          <p>"{each.quote}"</p>
                        </div>

                        <ApplicationProcessingCard
                          description={each.description}
                        />
                      </div>
                    </div>
            


                );
              })}
            </div>
            <VisionCard
              heading="Our Mission"
              img={Image1}
              description="Our core mission is to champion financial liberation for all. We focus on breaking away from conventional lending practices, eliminating the requirement for collateral and democratizing access to financial resources. We specialize in providing flexible loan options tailored to diverse needs, accompanied by repayment terms designed for utmost convenience. We strive to emerge as the leading financial Mitra for both ambitious and salaried individuals, delivering transformative solutions that fuel aspirations."
            />
            <VisionCard
              heading="Our Vision"
              img={Image2}
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
