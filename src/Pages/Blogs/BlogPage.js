import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import message from '../../assets/images/message.png'
import SEO from "../SEO/SEO";

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
        <div className="page-container contact-us">
          <div className="contact-us-section">
            <div className="content mb-5">
              <img src={message} className="mb-3" height="140px"/>
              <p className="mt-0 mb-5">
                Feel free to connect with us with any questions or queries.
                We're dedicated to providing you with the best possible
                experience
              </p>
              <h6>Got a question? We're here to help!</h6>
            </div>
            
            
            
            <div class="website-text">
              Email: Support@creditmitra.in<br/>
              Phone:  9666042345
            </div>
            
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
