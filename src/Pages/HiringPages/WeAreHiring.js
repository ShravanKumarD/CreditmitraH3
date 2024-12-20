import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./../HiringPages/wearehiring.css";
import Like from "./../../assets/images/like.png";
import { Link, redirect } from "react-router-dom";
import { Button } from "reactstrap";

const WeAreHiring = (props) => {
  const [selectedOption, setSelectedOption] = useState("all");
  const options = [
    { value: "all", label: "All" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "customer_service", label: "Customer Service" },
  ];

  const jobPosts = [
    {
      Designation: "UX/UI Designer",
      headLine:
        `We are looking for a skilled UX/UI Designer to collaborate with our team for our fintech based product. In this role, you will have the opportunity to work on multiple attributes of
                    the product, contributing your expertise to create intuitive and visually appealing user
                    interfaces and designs.`,
      modes: ["Full Time"],
      redirect: "ux/ui-designer",
      path:"/job-application-form"
    },
    {
      Designation: "Digital Marketing Specialist",
      headLine: `We are seeking a highly motivated and creative Digital Marketer to join our team and play 
a key role in developing and executing our digital marketing strategy.`,
      modes: ["Full Time"],
      redirect: "digital-marketing-specialist",
       path:"/job-application-form"
    },
    {
      Designation: "Collection Manager",
      headLine: `We are a leading fintech company specialising in personal loans. Our mission is to 
provide accessible financial solutions to salaried individuals.`,
      modes: ["Full Time"],
      redirect: "collecting-manager",
       path:"/job-application-form"
    },
    {
      Designation: "Finance Manager",
      headLine: `We are a leading fintech company specialising in personal loans. Our mission is to 
provide accessible financial solutions to salaried individuals.`,
      modes: ["Full Time"],
      redirect: "finance-manager",
       path:"/job-application-form"
    },
  ];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const Categories = ({ options }) => {
    return (
      <div className="list-row">
        {options.map((option, index) => (
          <button
            key={index}
            className={`hiring-button ${
              selectedOption === option.value ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  };

  const RenderJobPosts = ({ jobPosts }) => {
    return (
      <div className="job-list">
        {jobPosts.map((job, index) => (
          <div key={index} className="job-card">
            <Link
              to={job.redirect}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <div className="designation">{job.Designation}</div>
              <Link to={job.redirect} style={{ color: "#fff", textDecoration: "none" }}>
              <div className="like-container">
                <button className="hiring-apply-now">
                {/* <img className="like" src={Like} alt="Like" /> */}
                {/* <p className="like-text">Apply Now</p> */}
                Apply Now
                </button>
              </div>
              </Link>
              <div className="head-line">{job.headLine}</div>
            </Link>
            <div className="modes">
              {job.modes.map((mode, modeIndex) => (
                <span key={modeIndex} className="mode">
                  {mode}
                </span>
              ))}
            </div>

            <hr />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header routePath={props.routePath} />
      <div className="page-container about-us">
        <div className="container">
          <h1 className="content-heading">Be a Part Of Our Mission</h1>
          <p className="subHeading">
            We're looking for passionate people to join us on our mission. We
            value flat hierarchies, clear communicati`on, and full ownership and
            responsibility.
          </p>
          <h2 className="hiring-heading">We're hiring!</h2>
          <section>
            <div className="row">
              <div className="category-container">
                <Categories options={options} />
              </div>
            </div>
          </section>
          <section>
            <div className="job-container">
              <RenderJobPosts jobPosts={jobPosts} />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WeAreHiring;
