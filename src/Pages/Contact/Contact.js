import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import message from '../../assets/images/message.png'
import SEO from "../../Components/SEO/SEO";

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
              <h6>Got a question? We're here to help!</h6>
              <p className="mt-0 mb-5">
                Feel free to connect with us with any questions or queries.
                We're<br></br> dedicated to providing you with the best possible
                experience
              </p>
             
            </div>
            {/* <div className="form-container">
                <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Your name"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="email" placeholder="Email Address"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="Contact" placeholder="Contact"/>
                </div>
                <div class="form-group">
                <textarea class="form-control" id="message" placeholder="Message" style={{resize:"none", height: "214px"}}></textarea>
                </div>
                <button type="submit" class="btn brand-primary-gradient btn-block lg-btn">
                Send Message
                </button>
            </div> */}
            
            
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
