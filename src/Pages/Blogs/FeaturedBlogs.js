import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SEO from "../SEO/SEO";
import CardList from "./CardList";
import "./../../styles.css";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

function FeaturedBlogs(props) {
  // const arrayOfCards = [title, date, imageLink];
  const arrayOfCards = [
    {
      title: "8 Tips to Improve Your Cibil Score",
      date: "13th May, 2024",
      imageLink: require("../../assets/images/blogs/8_tips_to_improve_your_cibil_score.png"),
      blogSlug: "8-tips-to-improve-your-cibil-score"
    },
    {
      title: "Improving your CIBIL score is not rocket science",
      date: "14th May, 2024",
      imageLink: require("../../assets/images/blogs/Improving_your_CIBIL_score_is_not_rocket_science.png"),
      blogSlug: "improving-your-cibil-score-is-not-rocket-science",
    },    
    {
      title: "How to get the best personal loan interest rate available to you?",
      date: "14th May, 2024",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
      blogSlug: "how-to-get-the-best-personal-loan-interest-rate-available-to-you",
    },
    
  ];

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
        {/* featured-blog prefix is used here */}
        <div className="page-container featured-blog-container">
          <div className="blogs-section">
            <div className="content1">
              <h1
                className="heading"
                style={{ fontSize: "3.3rem", marginBottom: "5%" }}
              >
                Featured Blogs
              </h1>

              <CardList cards={arrayOfCards} />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default FeaturedBlogs;
