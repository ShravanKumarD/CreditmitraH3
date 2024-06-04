import React from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header/Header";
import blogImage from "../../../assets/images/blogs/8_tips_to_improve_your_cibil_score.png";
import SEO from "../../../Components/SEO/SEO";
import "./BlogPage.css";

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
            <h1 className="blog-content-heading">Title</h1>
            <div className="blog-content-date">May 14, 2024</div>

            <div className="blog-content-image">
              <img src={blogImage} className="blog-image-container" alt="blog img" />
            </div>
            <div className="blog-content-text">
              <p className="blog-content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="blog-content-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
