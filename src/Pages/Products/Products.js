import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductsHeroSection from "./ProductsHeroSection";
import DescriptionSection from "./DescriptionSection";
import StepsImg from "./../../assets/images/mobile.png";
// import StepsImg2 from "../../assets/images/eligiblity.png";
import StepsImg2 from "./../../assets/images/pad.png";
import { Link } from "react-router-dom";
import SEO from "../SEO/SEO";

function Products(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Instant Personal Loans Online - Apply in Minutes | CreditMitra"
        description="Get Instant Personal Loans Online in Minutes with CreditMitra. Secure & Easy Application Process. Apply Now!"
        keywords="personal loan, instant personal loan, personal loan online"
        name="Credit Mitra"
        type="article"
      />
      <section>
        <div className="page-container products-page">
          <ProductsHeroSection />
          <DescriptionSection
            heading="Why Creditmitra's Personal Loan for Salaried?"
            points={[
              "Seamless Access: Getting funds shouldn't be a long task. With Creditmitra, salaried individuals can seamlessly access personal loans. We ensure that financial support is always within reach.",
              "Flexible Options: We recognize that every individual has different needs. Whether it's consolidating debt, funding education, or planning a wedding, our flexible loan options help you to take a step towards your goals without any compromise.",
              "Competitive Interest Rates: With us, the high interest rates will not weigh you down. Creditmitra offers competitive rates, allowing you to borrow responsibly without breaking your wallet.",
              "Efficient Processing: Time is money, especially when it comes to addressing financial literal money. Our streamlined application and approval process makes sure you receive the funds as quickly as possible.",
            ]}
            img={StepsImg}
          />
          
   <DescriptionSection
            heading="How to Apply for a Personal Loan as a Salaried?"
            points={[
              "Prepare Your Documentation: Gather essential documents such as proof of identity, address, income, and employment details.",
              "Sign Up with Us Online: Visit Creditmitra's user-friendly application to begin your application journey. Provide accurate information about your personal and financial details, to make the application process hassle-free.",
              "Submit Your Application: Once you've filled out the form, submit it along with the necessary documents through our secure portal. Our advanced algorithms will assess your eligibility, providing you with instant approval for your online personal loan.",
              "Access Your Funds: Upon approval, the funds will be disbursed directly to your bank account, enabling you to address your financial needs.",
            ]}
            img={StepsImg2}
          />
       
          {/* old code */}
          <div className="btn-container text-center"></div>


          <div className="btn-container text-center"></div>
                    <div className='heading'>Eligibility Criteria</div>
                    <div className="products-hero-section ">
                        <div className="btn-container">
                            <div className="row productsDiv">
                                <div className="col-12 col-sm-4 productsDivBtn">
                                    <button className="btn primary-gradient-btn">
                                    Indian Citizen 
                                    </button>
                                </div>
                                <div className="col-12 col-sm-4 productsDivBtn">
                                    <button className="btn primary-gradient-btn">
                                    Age Limit: 21- 55 Years
                                    </button>
                                </div>
                                <div className="col-12 col-sm-4 productsDivBtn">
                                    <button className="btn primary-gradient-btn">
                                    Salaried Individual
                                    </button>
                                </div>
                            </div>
                            <div className="row productsDiv" >
                                <div className="col-sm-2"></div>
                                <div className="col-sm-4 productsDivBtn"><button className="btn primary-gradient-btn">
                                Monthly Income: Less than INR 15,000
                                </button></div>
                                <div className="col-sm-4 productsDivBtn">  <button className="btn primary-gradient-btn">
                                    Loan Disbursal in minutes :A good credit score.
                                </button></div>
                                <div className="col-sm-2"></div>



                            </div>

                        </div>
                    </div>
          {/* new from here */}
          {/* new class */}
          <div className="product-apply-button" style={{
            display:"flex",
            justifyContent: "center"
          }}>
            {/* margin-left: 0 for fixing this */}
            <buttton style={{ marginLeft: "0px" }}  className="btn brand-primary py-3 px-4">
              {" "}
              <Link to="/home" style={{ color: "#fff" }}>
                Apply Now
              </Link>
            </buttton>
          </div>

          <h6
            style={{
              color: "#fff",
              fontSize: "18px",
              fontFamily: "poppins",
              marginTop: "3rem",
              textAlign: "center",
              fontWeight: "normal"
            }}
          >
         Don't let financial constraints hold you back from living the life you want. Creditmitra's personal loan for salaried is here to support you every step of the way. Apply now and take control of your financial future!
          </h6>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Products;
