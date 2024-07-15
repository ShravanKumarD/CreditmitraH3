import React ,{useState}from "react";
import Modal from "./../ApplicationForm";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import './../wearehiring.css';

export default function CollectingManager(props) {
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
      <div className="JD-container">
        <h1 className="designation">Job profile: Collection Manager</h1>
        <div className="location">Location: Hyderabad </div>
        <h2>Job Brief</h2>
        <div className="head-line">
          We are a leading fintech company specialising in personal loans. Our
          mission is to provide accessible financial solutions to salaried
          individuals. As a Manager of collections, you will play a crucial role
          in managing and leading a team of collections professionals to ensure
          timely and effective debt recovery while maintaining positive customer
          relationships.
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Team Leadership: Provide guidance, support, and mentorship to a team
            of collections agents. Set performance targets, monitor progress,
            and ensure the team meets or exceeds established goals and
            objectives.
          </li>

          <li className="JobDescription">
            {" "}
            Manage and optimise online advertising campaigns across various
            platforms, such as Google Ads, Facebook Ads, and LinkedIn Ads.
          </li>
          <li className="JobDescription">
            {" "}
            Debt Recovery Management: Oversee the collections process for both
            personal loans and vehicle loans, ensuring adherence to company
            policies and regulatory requirements. Monitor delinquent accounts,
            establish effective collection strategies, and implement appropriate
            actions to recover outstanding debts.
          </li>

          <li className="JobDescription">
            {" "}
            Team Collaboration: Collaborate with cross-functional teams such as
            credit underwriting, customer support, and legal to resolve complex
            issues, streamline processes, and enhance overall efficiency
          </li>

          <li className="JobDescription">
            {" "}
            Customer Relationship Management: Foster positive customer
            relationships by ensuring that collections activities are conducted
            professionally, empathetically, and in compliance with relevant
            guidelines.
          </li>
        </ul>
        <h2>Qualifications</h2>
        <ul>
          <li className="JobDescription">
            Education: Degree and Relevant certifications in debt collection is
            a plus.
          </li>
          <li className="JobDescription">
            Experience: Minimum of 5 years of experience in collections,
            preferably in the personal loan. Prior experience in a leadership or
            supervisory role is highly desirable.
          </li>
          <li className="JobDescription">
            {" "}
            Knowledge: Strong understanding of debt collection processes,
            regulations, and best practices.
          </li>
          <li className="JobDescription">
            {" "}
            Leadership Skills: Proven ability to lead, motivate, and inspire a
            team towards achieving goals. Excellent communication,
            interpersonal, and conflict-resolution skills.
          </li>
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
