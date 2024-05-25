import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import venus from "../../assets/images/venus.png";
import agf from "../../assets/images/agf.jpeg";
import SEO from "../../Components/SEO/SEO";


function OurLendingPartners(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="CreditMitra| instant personal loan online | instant personal loan for salaried"
        description="Apply for an instant personal loan online in india to 2 lakhs from CreditMitra. Get approved today!"
        keywords="instant personal loan, instant personal loan online, instant personal loan in india, instant personal loan for salaried, best instant personal loan"
        name="Credit Mitra"
        type="article"
      />
      <section>
        <div className="page-container lending-partners">
          <div className="lendingpartners-section">
            <div className="content">
              <h6 className="heading">Our Lending Partners</h6>
              <p className="caption">
                CreditMitra is acting as a Digital Lending Platform on behalf of
                the following RBI Registered NBFC
              </p>
              <div className="company-container mb-5">
                <img height="100px" src={venus} />
                <h6>VENUS BARTER</h6>
                <p>Venus Barter Private Limited</p>
                <div className="website-text">
                  Website:
                  <br />
                  Email: venusbarterpvtltd1994@gmail.com
                  <br />
                  Phone: 9666042345
                </div>
                <h6 className="mt-5">&</h6>
              </div>
              <div className="company-container mt-3">
                <img height="100px" src={agf} />
                <h6>A.G.F Finlease </h6>
                <p>A.G.F Finlease (India) Limited</p>
                <div className="website-text">
                  Website: <a href="https://agffinlease.com/" target="_blank">https://agffinlease.com</a>
                  <br />
                  Email: support@agffinlease.in
                  <br />
                  Phone: 9666042345
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default OurLendingPartners;
