import React from "react";
import Footer from "../../../../Components/Footer/Footer";
import Header from "../../../../Components/Header/Header";
import blogImage from "../../../../assets/images/blogs/instant_loan_with_low_cibil_blog.png";
import SEO from "../../../../Components/SEO/SEO";
import "../BlogPage.css";
import InstantLoanWithLowCIBIL from "./InstantLoanWithLowCIBIL";

function BlogPage(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="How To Get An Instant Loans With Low CIBIL Score | CreditMitra"
        description="Learn how to secure an instant loan even with a low CIBIL score. Discover the key factors lenders consider beyond your credit score."
        keywords="Instant Loans, Low CIBIL Score, CreditMitra"
        name="CreditMitra"
        type="article"
        imageUrl={blogImage}
      />
      <section>
        {/* blog-content prefix is used here */}
        <div className="page-container blog-content-page">
          <div className="blog-content-section">
            {/* we should decouple this image asap */}
            <h1 className="blog-content-heading">
              How To Get An Instant Loans With Low CIBIL Score?
            </h1>
            <div className="blog-content-date">June 5, 2024</div>

            <div className="blog-content-image">
              <img
                src={blogImage}
                className="blog-image-container"
                alt="blog img"
              />
            </div>
            <div className="blog-content-text">
              <InstantLoanWithLowCIBIL />
              <p className="blog-content-paragraph"></p>
              <p className="blog-content-paragraph"></p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default BlogPage;
