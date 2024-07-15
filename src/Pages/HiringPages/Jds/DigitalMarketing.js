import React ,{useState}from "react";
import Modal from "./../ApplicationForm";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import './../wearehiring.css';

export default function DigitalMarketing(props) {
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
        <h1 className="designation">
          Job profile: Digital Marketing Specialist{" "}
        </h1>
        <div className="location">Location: Hyderabad </div>
        <h2>Job Brief</h2>
        <div className="head-line">
          We are seeking a highly motivated and creative Digital Marketer to
          join our team and play a key role in developing and executing our
          digital marketing strategy. You will be responsible for a variety of
          tasks, including managing our social media presence, creating engaging
          content, running online advertising campaigns, and analysing the
          performance of our efforts.{" "}
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Develop and implement digital marketing campaigns to drive customer
            acquisition, engagement, and retention.
          </li>

          <li className="JobDescription">
            {" "}
            Manage and optimise online advertising campaigns across various
            platforms, such as Google Ads, Facebook Ads, and LinkedIn Ads.
          </li>
          <li className="JobDescription">
            {" "}
            Conduct keyword research and SEO analysis to improve organic search
            rankings.
          </li>
          <li className="JobDescription">
            {" "}
            Create and manage content marketing strategies, including blog
            posts, social media, and email campaigns.{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Monitor and analyse website traffic and user engagement using
            analytics tools (e.g., Google Analytics).{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Collaborate with the design team to create visually appealing and
            effective marketing materials.
          </li>
          <li className="JobDescription">
            {" "}
            Stay updated on industry trends and emerging digital marketing
            technologies.{" "}
          </li>
          <li className="JobDescription">
            easure and report on the performance of digital marketing campaigns
            and make data driven recommendations for improvement.{" "}
          </li>
        </ul>
        <h2>Qualifications</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Degree in marketing, advertising, communications, or a related
            field.
          </li>
          <li className="JobDescription">
            {" "}
            Strong knowledge of digital marketing tools, social media platforms
            and email marketing software.{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Proven experience in digital marketing, preferably in the finance or
            wealth management industry.
          </li>
          <li className="JobDescription">
            Understanding of SEO best practices and experience in optimising
            content for search engines.
          </li>
          <li className="JobDescription">
            Excellent communication skills and ability to work collaboratively
            with cross-functional teams.{" "}
          </li>
          <li className="JobDescription">
            3+ years of experience in digital marketing.
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
