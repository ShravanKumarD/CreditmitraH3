import React from "react";
import Header from "../../Components/Header";
import HeroSection from "./HeroSection";
import ApplicationProcess from "./ApplicationProcess";
import Footer from "../../Components/Footer";
import UserFeedback from "./UserFeedback";
import SEO from "../../Components/SEO/SEO";


function Home(props) {
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
        <div className="page-container">
          <div className="px-3">
            <HeroSection />
            <ApplicationProcess />
            <UserFeedback />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
