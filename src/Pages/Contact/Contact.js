import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import message from "../../assets/images/contactMainImg.png";
import Hangout from "../../assets/images/hangout.png";
import SEO from "../../Components/SEO/SEO";
import emailjs from "emailjs-com";

function Contact(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "delete_data", label: "Delete my data" },
    { value: "unable_to_apply", label: "Unable to apply" },
    { value: "transaction_issue", label: "Transaction issue" },
    { value: "repayment_issue", label: "Repayment issue" },
    { value: "others", label: "Others" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    reason: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
    setFormData({
      ...formData,
      reason: e.target.value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contact") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let mobile = { contact: formData.contact };
    const mobileNumber = ((mobile) => {
      const mobileNumberPattern = /^[5-9]\d{9}$/;
      if (mobileNumberPattern.test(mobile.contact)) {
        console.log("true");
      } else {
        alert("enter a valid mobile number");
      }
    })(mobile);
    emailjs
      .send(
        "service_vjn84f9",
        "template_l0o0f3o",
        formData,
        "HMzzxdYV3qtn3cYUR"
      )
      .then(
        (response) => {
          alert("Thank you for your message, we will get back to you shortly.");
          setFormStatus("SUCCESS");
          setFormData({
            name: "",
            email: "",
            message: "",
            reason: "",
            contact: "",
          });
          setSelectedOption("");
        },
        (error) => {
          console.log("FAILED...", error);
          setFormStatus("ERROR");
        }
      );
  };
  useEffect(() => {
    console.log(formData, "formdata");
  }, []);
  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Contact Us | instant personal loan in india | CreditMitra"
        description="CreditMitra understand the importance of customer satisfaction and personal service. You can reach our Customer Care team or one of our Dedicated Loan Officers at any time, Feel free to give us a call!"
        keywords="instant personal loan in india, personal loan approval"
        name="CreditMitra"
        type="LendingService"
      />
      <section>
        <div className="page-container">
          <div className="mainDivAtContact">
            <div className="textContent">
              <div className="mainHeaderatContactSection">
                Got a question?
                <br /> We're here to help!
              </div>
              <div className="subHeaderAtContactSection">
                Feel free to connect with us with any questions or queries.
                We're
                <br /> dedicated to providing you with the best possible
                experience
              </div>
            </div>
            <div className="betweenSpace" style={{ padding: "12vw" }}></div>
            <img
              src={message}
              className="imageInContact"
              height="140px"
              alt="message"
            />
          </div>
        </div>
        <section>
          <h2 className="contactUsMain">Contact Us</h2>
          <div className="row-container">
            <div className=""></div>
            <div className="col-sm-6">
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="spacer" style={{ padding: "1vw" }}></div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="form-control"
                      id="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      value={selectedOption}
                      name="reason"
                      id="reason"
                      className="dropdown contactUsDropdown"
                      onChange={handleSelect}
                      required
                    >
                      <option value="" style={{ color: "black" }}>
                        Select an issue
                      </option>
                      {options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          style={{ color: "white", backgroundColor: "#3D4F74" }}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="spacer" style={{ padding: "1vw" }}></div>
                    <input
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      maxLength={10}
                      className="form-control"
                      id="contact"
                      placeholder="Contact"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      placeholder="Message"
                      style={{ resize: "none", height: "100px" }}
                      required
                    ></textarea>
                  </div>

                  {/* <input type="checkbox" id="privacyPolicy" name="privacyPolicy" value="accepted" required />
                  <label htmlFor="privacyPolicy" className="contactusCheckBox">
                    By submitting this form, you agree to Creditmitra's
                    <a className="contactusCheckBoxLegal" href="/privacypolicy"> Privacy Policy</a> &
                    <a className="contactusCheckBoxLegal" href="/termsAndConditions"> Terms and Conditions</a>.
                  </label>

                  <br />

                  <input type="checkbox" id="notifications" name="notifications" value="accepted" required />
                  <label htmlFor="notifications" className="contactusCheckBox">I hereby authorize to receive notifications and SMS,
                    RCS Messages, Promotional or Information Messages.
                  </label><br /> */}

                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="privacyPolicy"
                      value="accepted"
                      required
                    />
                    <label
                      htmlFor="privacyPolicy"
                      className="contactusCheckBox"
                    >
                      By submitting this form, you agree to Creditmitra's
                      <a
                        className="contactusCheckBoxLegal"
                        href="/privacypolicy"
                      >
                        Privacy Policy
                      </a>{" "}
                      &
                      <a
                        className="contactusCheckBoxLegal"
                        href="/termsAndConditions"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>

                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="notifications"
                      name="notifications"
                      value="accepted"
                      required
                    />
                    <label
                      htmlFor="notifications"
                      className="contactusCheckBox"
                    >
                      I hereby authorize to receive RCS, Whatsapp messages and
                      informational emails.
                    </label>
                  </div>

                  <button type="submit" className="contact-submit-button">
                    Submit
                  </button>
                  {formStatus === "SUCCESS" && (
                    <p className="responseText">
                      Thank you for your message, we will get back to you
                      shortly.
                    </p>
                  )}
                  {formStatus === "ERROR" && (
                    <p className="responseText">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
            <div className="">
              <div className="vl"></div>
            </div>
            <div className="col-sm-4">
              <div className="emailLink">
                <img src={Hangout} className="hangout" alt="Hangout" />
                <p style={{ color: "white" }}>
                  Email Us
                  <a
                    style={{ textDecoration: "none" }}
                    href="mailto: support@creditmitra.in"
                  >
                    <br /> support@creditmitra.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
