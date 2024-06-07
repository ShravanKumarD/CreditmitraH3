import React from "react";
import Footer from "../../../../Components/Footer";
import Header from "../../../../Components/Header/Header";
import blogImage from "../../../../assets/images/blogs/Improving_your_CIBIL_score_is_not_rocket_science_blog.png";
import SEO from "../../../../Components/SEO/SEO";
import "../BlogPage.css";
import InstantLoanWithLowCibil from "./ImprovingCibilRocketScience";

function BlogPage(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Improving your CIBIL score is not rocket science | CreditMitra"
        description="Learn how to improve your CIBIL score with simple and effective methods. It's not rocket science!"
        keywords="CIBIL score, improve CIBIL score, credit score, CreditMitra"
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
              Improving your CIBIL score is not rocket science
            </h1>
            <div className="blog-content-date">May 14, 2024</div>

            <div className="blog-content-image">
              <img
                src={blogImage}
                className="blog-image-container"
                alt="blog img"
              />
            </div>
            <div className="blog-content-text">
              <InstantLoanWithLowCibil />
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
