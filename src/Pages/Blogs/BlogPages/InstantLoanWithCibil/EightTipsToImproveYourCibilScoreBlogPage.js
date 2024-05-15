import React from "react";
import Footer from "../../../../Components/Footer";
import Header from "../../../../Components/Header";
import blogImage from "../../../../assets/images/blogs/8_tips_to_improve_your_cibil_score_blog.png";
import SEO from "../../../SEO/SEO";
import "../BlogPage.css";
import EightTipsToImproveYourCibilScore from "./EightTipsToImproveYourCibilScore";

function Contact(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Contact Us | instant personal loan in india | CreditMitra"
        description="CreditMitra understand the importance of customer satisfaction and personal service. You can reach our Customer Care team or one of our Dedicated Loan Officers at any time, Feel free to give us a call!"
        keywords="instant personal loan in india, personal loan approval"
        name="Credit Mitra"
        type="article"
      />
      <section>
        {/* blog-content prefix is used here */}
        <div className="page-container blog-content-page">
          <div className="blog-content-section">
            {/* we should decouple this image asap */}
            <h1 className="blog-content-heading">8 Tips to improve your CIBIL score</h1>
            <div className="blog-content-date">May 15, 2024</div>

            <div className="blog-content-image">
              <img src={blogImage} className="blog-image-container" />
            </div>
            <div className="blog-content-text">
              <EightTipsToImproveYourCibilScore />
              <p className="blog-content-paragraph">

              </p>
              <p className="blog-content-paragraph">
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;