import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import message from '../../assets/images/contactMainImg.png';
import Hangout from "../../assets/images/hangout.png";
import SEO from "../../Components/SEO/SEO";
import emailjs from 'emailjs-com';

function Contact(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { value: '"delete_data"', label: 'Delete my data' },
    { value: 'unable_to_apply', label: 'Unable to apply' },
    { value: 'transaction_issue', label: 'Transaction issue' },
    { value: 'repayment_issue', label: 'Repayment issue' },
    { value: 'others', label: 'others' },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');


  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello svdhadvngwm")

    emailjs.send(
      'service_vjn84f9',
      'template_l0o0f3o', formData,
      'HMzzxdYV3qtn3cYUR'
    )
      .then((response) => {
        console.log('SUCCESS!', response);
        alert("complaint saved!")
        setFormStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '',reason:'',contact:'' });
      }, (error) => {
        console.log('FAILED...', error);
        setFormStatus('ERROR');
      });
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
            <div className="betweenSpace" style={{ padding: "12vw" }}></div>
            <img src={message} className="imageInContact" height="140px" alt="message" />
          </div>
        </div>
        <section>

          <h2 className="contactUsMain">Contact Us</h2>
          <div className="row-container">
            <div className=""></div>
            <div className="col-sm-6">
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                <div className="form-group" >
                  
                  <input type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    formData={formData.name}
                    onChange={handleChange}
                    required />
                  <div className="spacer" style={{ padding: "1vw" }}></div>
                  <input type="text" name="email"
                    formData={formData.email}
                    className="form-control" id="email" placeholder="Email ddress" required />
                </div>
                <div className="form-group">
                  <select value={selectedOption}
                  name="reason"
                  formData={formData.reason}
                  className="dropdown contactUsDropdown " onChange={handleSelect}  >
                    <option value="" style={{ color: "black" }}>Select an issue</option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value} style={{ color: "white", backgroundColor: "#3D4F74" }}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="spacer" style={{ padding: "1vw" }}></div>

                  <input type="text"
                    name="contact"
                    formData={formData.contact}
                    onChange={handleChange}
                    className="form-control"
                     id="contact"
                      placeholder="Contact" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control"
                    name="message"
                    formData={formData.message}
                    onChange={handleChange}
                    id="message" placeholder="Message"
                     style={{ resize: "none", height: "100px" }}
                    required ></textarea>
                </div>
                <button type="submit" onSubmit={handleSubmit} className="contact-submit-button">
                  Submit
                </button>
                </form>
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
          {formStatus === 'SUCCESS' && <p>Message sent successfully!</p>}
          {formStatus === 'ERROR' && <p>Failed to send message. Please try again.</p>}
        </section>


        <Footer />
      </section>
    </>
  );
}

export default Contact;
