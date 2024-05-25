import React, { useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import SEO from '../../Components/SEO/SEO';

function ApplicationProcessingCard({ orderNo, heading, description, img }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          card.classList.add('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={cardRef} className="application-process-card resLending">
      <div className="content">
        {orderNo && (
          <div className="list-number">
            <div className="light-overlay-number">{orderNo}</div>
          </div>
        )}
        {heading && <h6>{heading}</h6>}
        <p style={{ fontSize: "16px", fontWeight: "300" }}>{description}</p>
      </div>
      {img && <img className="imageHome" src={img} alt="Illustration" />}
    </div>
  );
}

function ResponsibleLending(props) {
  const pledgePoints = [
    "We exclusively collaborate with RBI-certified NBFCs/Banks, and the lender's name is always clearly stated in the loan agreement.",
    "All charges are presented upfront to the customer, and we do not impose any hidden fees.",
    "The Terms & Conditions are openly displayed, ensuring that the customer is well-informed about the agreement details.",
    "Our advertising practices are straightforward, avoiding any misleading or confusing elements.",
    "A comprehensive FAQ section is available on the app and website, and our customer support team is ready to address any doubts not covered in the FAQ.",
  ];

  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Responsible Lending | best instant personal loan in india | CreditMitra"
        description="CreditMitra is a quick and easy process. You can apply for money in just 5 minutes, for any purpose: Home Improvement, Education, Medical emergencies and Debt Consolidation"
        keywords="best instant personal loan in india, instant personal loan for salaried"
        name="Credit Mitra"
        type="article"
      />
      <section>
        <div className="page-container responsible-lending-page">
          <div className="responsible-lending-section">
            <div className="content">
              <h6>Responsible Lending</h6>
              <p>
                CreditMitra operates as a platform facilitating loan transactions between borrowers and NBFCs. Approval and sanctioning of all loan applications are carried out by NBFCs registered with RBI, and this information is communicated upfront during the loan application process.
              </p>
            </div>
            <h5 className="section-heading">Our Pledge as a Responsible Lender</h5>
            <div className="list-container">
              {pledgePoints.map((each, index) => (
                <div className="col-sm-12 lending" key={index}>
                  <ApplicationProcessingCard
                    orderNo={index + 1}
                    description={each}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default ResponsibleLending;
