import React from "react";
import Footer from "../../../../Components/Footer";
import Header from "../../../../Components/Header/Header";
import blogImage from "../../../../assets/images/blogs/avoid_these_mistakes_while_applying_loan_blog.png";
import SEO from "../../../../Components/SEO/SEO";
import "../BlogPage.css";
import PersonalLoansVSCreditCards from "./AvoidMistakesApplyingPersonalLoans";

function BlogPage(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Avoid These Mistakes While Applying for Personal Loans | CreditMitra"
        description="Avoid common pitfalls when applying for personal loans. Learn what to look out for to ensure your loan application is successful."
        keywords="Personal Loans, Loan Application Mistakes, CreditMitra"
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
            Avoid These Mistakes While Applying for Personal Loans
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
              <PersonalLoansVSCreditCards />
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
