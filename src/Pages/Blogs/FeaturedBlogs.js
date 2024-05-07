import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import SEO from "../SEO/SEO";
import CardList from "./CardList";

function FeaturedBlogs(props) {

  // const arrayOfCards = [title, date, imageLink];
  const arrayOfCards = [
    {
      title: "Blog 1",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png")
    },
    {
      title: "Blog 2",
      date: "29/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Blog 3",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Blog 4",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Blog 5",
      date: "28/08/24",
      imageLink: require("../../assets/images/blogs/blog_sample.png"),
    },
    {
      title: "Blog 6",
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
        <div className="page-container contact-us">
          <div className="blogs-section">
            <div className="content">
              <h1>Featured Blogs</h1>

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
