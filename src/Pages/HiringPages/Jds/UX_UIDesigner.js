import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import Footer from '../../../Components/Footer/Footer';
import './../wearehiring.css';
import { Link } from "react-router-dom";
import Modal from "./../ApplicationForm";


function UX_UIDesigner(props) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      contact: '',
      resume: null
    });
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleChange = (e) => {
      console.log(e,"eeee")
      if (e.target.name === 'resume') {
        setFormData({ ...formData, resume: e.target.files[0] });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('contact', formData.contact);
        formDataToSend.append('resume', formData.resume);
        const response = await fetch('http://3.111.198.234/internal-feed/job-post/newjob', {
          method: 'POST',
          body: formDataToSend
        });
  
        if (response.ok) {
          console.log(response,"form")
          alert('Application submitted successfully!');
          handleClose();
        } else {
          alert('Error submitting application. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting application. Please try again.');
      }
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

  <div className="ModalContainer">
      <button 
        className="btn brand-primary lg" 
        onClick={handleOpen} 
        disabled={open}
      >
        Apply now
      </button>
    </div>
    <Modal isOpen={open} closeModal={handleClose} >
        <div className="form-in-hiring">
          <h1>Application form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p  className='text-field'>Name</p>
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
            </div>
            <div className="form-group">
              <p  className='text-field'>Email</p>
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
              <p  className='text-field'>Mobile</p>
              <input 
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="form-control"
                id="contact"
                placeholder="Contact"
                maxLength={10}
                required
              />
            </div>
            <div className="form-group">
            <p className='text-field'>Upload your resume:</p>
            <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            required
          />
            </div>
            <div className="product-apply-button">
              <button type="submit" className="btn brand-primary lg">Apply now</button>
            </div>
          </form>
        </div>
      </Modal>

            </div>
            <Footer />
        </>
    );
}
export default UX_UIDesigner;