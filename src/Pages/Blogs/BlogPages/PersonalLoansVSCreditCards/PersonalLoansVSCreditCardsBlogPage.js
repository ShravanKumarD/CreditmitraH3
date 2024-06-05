import React from "react";
import Footer from "../../../../Components/Footer";
import Header from "../../../../Components/Header/Header";
import blogImage from "../../../../assets/images/blogs/Improving_your_CIBIL_score_is_not_rocket_science_blog.png";
import SEO from "../../../../Components/SEO/SEO";
import "../BlogPage.css";
import PersonalLoansVSCreditCards from "./PersonalLoansVSCreditCards";

function BlogPage(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Comparing Loan Options: Personal Loans vs Credit Cards | CreditMitra"
        description="Explore the differences between personal loans and credit cards to make an informed decision on your borrowing options."
        keywords="Personal Loans, Credit Cards, Loan Options, CreditMitra"
        name="Credit Mitra"
        type="article"
        imageUrl={blogImage}
      />
      <section>
        {/* blog-content prefix is used here */}
        <div className="page-container blog-content-page">
          <div className="blog-content-section">
            {/* we should decouple this image asap */}
            <h1 className="blog-content-heading">
              Comparing Loan Options: Personal Loans vs Credit Cards
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
