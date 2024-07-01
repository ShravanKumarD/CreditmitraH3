import React from "react";
import Header from "../../Components/Header/Header";
import HeroSection from "./HeroSection";
import ApplicationProcess from "./ApplicationProcess";
import Footer from "../../Components/Footer/Footer";
import UserFeedback from "./UserFeedback";
import SEO from "../../Components/SEO/SEO";

function Home(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="CreditMitra - Your Trusted Loan Mitra | Loans Made Easy"
        description="CreditMitra - Your trusted partner for quick, easy loans up to ₹2 lakh. Minimal paperwork, fast approval. Tailored for salaried professionals. Apply now."
        keywords="instant personal loan, instant personal loan online, instant personal loan in india, instant personal loan for salaried, best instant personal loan"
        name="CreditMitra"
        type="LendingService"
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
