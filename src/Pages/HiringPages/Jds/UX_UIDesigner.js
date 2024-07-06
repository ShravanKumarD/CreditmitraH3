import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer';
import './../wearehiring.css';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

function UX_UIDesigner(props) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
    });

    const handleClose = () => {
        setOpen(false);
        alert('youre response saved,we will get back to you soon.')
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'contact') {
            const numericValue = value.replace(/\D/g, '');
            setFormData({
                ...formData,
                [name]: numericValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
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
                handleClose();
            } else {
                alert("enter a valid mobile number")
            }
        })(mobile)
    };

    return (
        <>
            <Header routePath={props.routePath} />
            <div className='JD-container'>
                <h1 className='designation'>Job profile: UX/UI Designer </h1>
                <div className='location'>Location: Hyderabad </div>
                <h2>Job Summary</h2>
                <div className='head-line'>We are looking for a skilled UX/UI Designer to collaborate with our team for our fintechbased product. In this role, you will have the opportunity to work on multiple attributes of
                    the product, contributing your expertise to create intuitive and visually appealing user
                    interfaces and designs. This is a great opportunity for a full-time designer looking to make
                    a significant impact with their designs.</div>
                <h2>Key Responsibilities</h2>
                <ul>
                    <li className='JobDescription'> Work closely with our team to understand product requirements and objectives</li>
                    <li className='JobDescription'>  Design wireframes, prototypes, and high-fidelity mockups that align with project goals
                        and user needs.</li>
                    <li className='JobDescription'>  Conduct user research and usability testing to gather feedback and iterate on designs.</li>
                    <li className='JobDescription'>  Collaborate with developers to ensure seamless implementation of designs.</li>
                    <li className='JobDescription'>  Communicate effectively with stakeholders to present and justify design decisions.</li>
                </ul>
                <h2>Requirements: </h2>
                <ul>
                    <li className='JobDescription'> 2+ experience as a UX/UI Designer, preferably with a background in Graphic Design.</li>
                    <li className='JobDescription'> Strong portfolio showcasing your design projects and problem-solving skills.</li>
                    <li className='JobDescription'> Proficiency in Figma.</li>
                    <li className='JobDescription'> Excellent communication and collaboration skills.</li>
                    <li className='JobDescription'>Ability to work independently and meet project deadlines.</li>
                    <li className='JobDescription'> Flexibility to adapt to changing product requirements and priorities.</li>
                </ul>

 {/* <div className="ModalContainer">
      <button 
        className="btn brand-primary lg" 
        onClick={handleOpen} 
        disabled={open}
      >
        Apply now
      </button>
      <Modal 
        isOpen={open} 
        onRequestClose={handleClose}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
          },
          content: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '80%',
            padding: '20px',
            background: '#151b1e',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
            outline: 'none',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }
        }}
      >
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
            <label for="pdfInput">Upload a PDF file (Max size: 2 MB):</label>
        <input type="file" id="pdfInput" accept=".pdf" required/>


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
            <div className="product-apply-button" style={{ display: "flex", justifyContent: "center" }}>
              <Link to="https://creditmitra.cloudbankin.com/onboard/#/login" style={{ color: "#fff", textDecoration: "none" }}>
                <button style={{ marginLeft: "0px" }} className="btn brand-primary lg">
                  Apply Now
                </button>
              </Link>
            </div>
          </form>
        </div>
      </Modal>
    </div> */}

            </div>
            <Footer />
        </>
    );
}
export default UX_UIDesigner;