import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductsHeroSection from "./ProductsHeroSection";
import DescriptionSection from "./DescriptionSection";
import StepsImg from "./../../assets/images/mobile.png";
// import StepsImg2 from "../../assets/images/eligiblity.png";
import StepsImg2 from "./../../assets/images/pad.png";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO/SEO";

function Products(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Instant Personal Loans Online - Apply in Minutes | CreditMitra"
        description="Get Instant Personal Loans Online in Minutes with CreditMitra. Secure & Easy Application Process. Apply Now!"
        keywords="personal loan, instant personal loan, personal loan online"
        name="CreditMitra"
        type="article"
      />
      <section>
        <div className="page-container products-page">
          <ProductsHeroSection />
          <DescriptionSection
            heading="Why Choose Creditmitra for Your Personal Loan?"
            points={[
              "Versatile Solutions: Whether you're planning a vacation, covering medical expenses, or pursuing an education abroad, our personal Loans are customized to meet your unique needs and aspirations.",
              "Quick and Convenient: We know that lengthy approval processes are boring. With Creditmitra, you can apply for a personal loan online in minutes, giving you more time to focus on what truly matters.",
              "Transparent Terms: We believe in honesty and transparency every step of the way. Rest assured knowing that our Personal Loans come with clear terms and competitive interest rates.",
              "Expert Support: Our dedicated team of financial experts is here to guide you through the loan process, answer your questions, and provide tailored assistance to make sure you make informed decisions."
            ]}
            img={StepsImg}
          />
          
   <DescriptionSection
            heading="How to Apply for a Creditmitra Personal Loan?"
            points={[
              "Sign-Up and Apply: Visit Creditmitra's secure website to access our user-friendly loan application platform. Fill out the required details in the application form, by providing accurate information about your personal and financial background.",
              "Upload Necessary Documents: Submit essential documents such as proof of identity, address, income, and any other relevant documentation to support your application.",
              "Receive Approval: Once your application is submitted, our team will review it and provide you with instant approval for your Personal Loan.",
              "Get Your Funds: Upon approval, the loan amount will be disbursed directly to your bank account, enabling you to pursue your financial goals with confidence."
            ]}
            img={StepsImg2}
          />
       
          {/* old code */}
          <div className="btn-container text-center"></div>


          <div className="btn-container text-center"></div>
                    <div className='uncolored-heading eligibility'>Eligibility Criteria</div>
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
                                Monthly Income: {">"}INR 15,000
                                </button></div>
                                <div className="col-sm-4 productsDivBtn">  <button className="btn primary-gradient-btn">
                                  A good credit score.
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
              <Link to="/" style={{ color: "#fff" }}>
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
              fontWeight: "normal",
              marginBottom:"-60px"
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
