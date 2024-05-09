import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductsHeroSection from "./ProductsHeroSection";
import DescriptionSection from "./DescriptionSection";
import StepsImg from "../../assets/images/Products_Page_Loan_steps.png";
import StepsImg2 from "../../assets/images/eligiblity.png";
import { Link } from "react-router-dom";
import SEO from "../SEO/SEO";

function Products(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="instant personal loan for salaried | instant loan in india | CreditMitra"
        description="Apply and get approved instant personal loan for salaried in just a few minutes. Our quick and simple process makes it easy to apply for a personal loan with CreditMitra!"
        keywords="instant personal loan for salaried, quick loan apps, instant cash loan in 5 minutes, instant loan in india"
        name="Credit Mitra"
        type="article"
      />
      <section>
        <div className="page-container products-page">
          <ProductsHeroSection />
          <DescriptionSection
            heading="Get Personal Loan in Simple Steps"
            points={[
              "Check eligibility",
              "Apply for Loan",
              "Get funds in bank A/C within minutes",
            ]}
            img={StepsImg}
          />
          <DescriptionSection
            heading="Eligibility Criteria"
            points={[
              "Indian Citizen ",
              "Age Limit: 21- 55 Years",
              "Salaried Individual",
              "Monthly Income: >INR 15,000",
            ]}
            img={StepsImg2}
          />
          {/* old code */}
          <div className="btn-container text-center"></div>
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
              fontSize: "20px",
              fontFamily: "poppins",
              marginTop: "3rem",
              textAlign: "center",
              fontWeight: "normal"
            }}
          >
            At CreditMitra, we believe that financial empowerment begins with
            rapid loan solutions that cater to individual needs swiftly. Our
            instant personal loans are designed to provide you with the
            financial flexibility and freedom in minutes that you need to
            achieve your goals, whatever they may be
          </h6>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Products;
