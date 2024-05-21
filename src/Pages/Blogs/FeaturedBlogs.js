import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SEO from "../../Components/SEO/SEO";
import CardList from "./CardList";
import "./../../styles.css";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

function FeaturedBlogs(props) {
  const arrayOfCards = [
    {
      title: "8 Tips to Improve Your Cibil Score",
      date: "13th May, 2024",
      imageLink: require("../../assets/images/blogs/8_tips_to_improve_your_cibil_score.png"),
      blogSlug: "8-tips-to-improve-your-cibil-score",
      summary:" While many lending institutions consider a CIBIL score above 700 or 750 to be good, CIBIL itself rates its score as given in the table above...",
    },
    {
      title: "Improving your CIBIL score is not rocket science",
      date: "14th May, 2024",
      imageLink: require("../../assets/images/blogs/Improving_your_CIBIL_score_is_not_rocket_science.png"),
      blogSlug: "improving-your-cibil-score-is-not-rocket-science",
      summary:"  Have you ever faced rejection for your loan application due to a low CIBIL score? Don't worry you are not alone. There are thousands of loan applications daily that get rejected due to low CIBIL scores...", 
    },
    {
      title: "Understanding Personal Loan Recovery: Process & RBI Guidelines",
      date: "21th May, 2024",
      imageLink: require("../../assets/images/blogs/Understanding_Personal_Loan_Recovery.png"),
      blogSlug:"understanding-personal-loan-recovery",
      summary:"With the advent of new-age financial services, availing of instant personal loans is super easy. However, as a borrower, you must consider that any loan is a financial liability, which you need to repay...", 
    },
    
  ];

  arrayOfCards.sort((a, b) => {
    const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, '$1'));
    return dateB - dateA;
  });

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
                style={{ fontSize: "3rem", marginBottom: "5%",marginTop:"100px" }}
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
