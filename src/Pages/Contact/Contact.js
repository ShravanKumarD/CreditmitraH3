import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import message from '../../assets/images/contactMainImg.png';
import Hangout from "../../assets/images/hangout.png";
import SEO from "../../Components/SEO/SEO";

function Contact(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { value: '"delete_data"', label: 'Delete my data' },
    { value: 'unable_to_apply', label: 'Unable to apply' },
    { value: 'transaction_issue', label: 'Transaction issue' },
    { value: 'bill_repayment_issue', label: 'Bill repayment issue' },
    { value: 'others', label: 'others' },
  ];

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };
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
        <div className="page-container" >
          <div className="mainDivAtContact">
            <div className="textContent">
              <div className="mainHeaderatContactSection">Got a question?<br /> We're here to help!</div>
              <div className="subHeaderAtContactSection">
                Feel free to connect with us with any questions or queries.
                We're<br /> dedicated to providing you with the best possible
                experience
              </div>
            </div>
            <div className="betweenSpace" style={{ padding: "10vw" }}></div>
            <img src={message} className="imageInContact" height="140px" alt="message" />
          </div>
        </div>
        <section>

          <h2  className="contactUsMain">Contact Us</h2>
          <div className="row-container">
            <div className=""></div>
            <div className="col-sm-6">
              <div className="form-container">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" placeholder="Your name" />
                  <div className="spacer" style={{ padding: "1vw" }}></div>
                  <input type="text" className="form-control" id="email" placeholder="Email ddress" />
                </div>
                <div className="form-group">
                  <select value={selectedOption} className="dropdown contactUsDropdown " onChange={handleSelect}>
                    <option value="" style={{color:"black"}}>Select an issue</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value} style={{color:"white",backgroundColor:"#3D4F74"}}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="spacer" style={{ padding: "1vw" }}></div>

                  <input type="text" className="form-control" id="contact" placeholder="Contact" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Message" style={{ resize: "none", height: "100px" }}></textarea>
                </div>
                <button type="submit" className="contact-submit-button">
                  Submit
                </button>
              </div>
            </div>
            <div className="">
              <div className="vl"></div>
            </div>
            <div className="col-sm-4">
              <div className="emailLink">
                <img src={Hangout} className="hangout" alt="Hangout" />
                <p style={{ color: "white" }}>Email Us<a style={{ textDecoration: "none" }} href="mailto: support@creditmitra.in"><br /> support@creditmitra.in</a></p>
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
