import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SEO from "../SEO/SEO";
import CardList from "./CardList";
import './../../styles.css';

function FeaturedBlogs(props) {

  // const arrayOfCards = [title, date, imageLink];
  const arrayOfCards = [
    {
      title: "Credit Repair Guide: How It Works, Importance and Benefits",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png")
    },
    {
      title: "Experian vs. CIBIL Score: Why are Experian and CIBIL Scores Different?",
      date: "29/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Avoid These Mistakes While Applying for Personal Loans",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Securing Personal Loans as a Freelancer: What You Need to Know?",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Securing Personal Loans as a Freelancer: What You Need to Know?",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Securing Personal Loans as a Freelancer: What You Need to Know?",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
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
        <div className="page-container">
          <div className="blogs-section">
            <div className="content1">
              <h1 className="heading" style={{fontSize: "3.3rem", marginBottom: "5%"}}>Featured Blogs</h1>

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
