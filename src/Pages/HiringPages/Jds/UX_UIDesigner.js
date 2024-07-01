import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import "./../wearehiring.css";

function UX_UIDesigner(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <div className="JD-container">
        <h1 className="designation">Job profile: UX/UI Designer </h1>
        <div className="location">Location: Hyderabad </div>
        <h2>Job Summary</h2>
        <div className="head-line">
          We are looking for a skilled UX/UI Designer to collaborate with our
          team for our fintechbased product. In this role, you will have the
          opportunity to work on multiple attributes of the product,
          contributing your expertise to create intuitive and visually appealing
          user interfaces and designs. This is a great opportunity for a
          full-time designer looking to make a significant impact with their
          designs.
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Work closely with our team to understand product requirements and
            objectives
          </li>
          <li className="JobDescription">
            {" "}
            Design wireframes, prototypes, and high-fidelity mockups that align
            with project goals and user needs.
          </li>
          <li className="JobDescription">
            {" "}
            Conduct user research and usability testing to gather feedback and
            iterate on designs.
          </li>
          <li className="JobDescription">
            {" "}
            Collaborate with developers to ensure seamless implementation of
            designs.
          </li>
          <li className="JobDescription">
            {" "}
            Communicate effectively with stakeholders to present and justify
            design decisions.
          </li>
        </ul>
        <h2>Requirements: </h2>
        <ul>
          <li className="JobDescription">
            {" "}
            2+ experience as a UX/UI Designer, preferably with a background in
            Graphic Design.
          </li>
          <li className="JobDescription">
            {" "}
            Strong portfolio showcasing your design projects and problem-solving
            skills.
          </li>
          <li className="JobDescription"> Proficiency in Figma.</li>
          <li className="JobDescription">
            {" "}
            Excellent communication and collaboration skills.
          </li>
          <li className="JobDescription">
            Ability to work independently and meet project deadlines.
          </li>
          <li className="JobDescription">
            {" "}
            Flexibility to adapt to changing product requirements and
            priorities.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
export default UX_UIDesigner;
