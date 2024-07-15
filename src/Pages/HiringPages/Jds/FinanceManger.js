import React ,{useState}from "react";
import Modal from "./../ApplicationForm";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import "./../wearehiring.css";

export default function FinanceManger(props) {
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
        <h1 className="designation">Job profile: Finance Manager </h1>
        <div className="location">Location: Hyderabad </div>
        <h2>Job Brief</h2>
        <div className="head-line">
          We are a leading fintech company specialising in personal loans. Our
          mission is to provide accessible financial solutions to salaried
          individuals. In this role, you will be responsible for the overall
          financial management of the company. You will lead a team of financial
          professionals and oversee all aspects of the financial planning,
          budgeting, forecasting, and reporting processes. You will also be
          responsible for ensuring compliance with all relevant financial
          regulations.
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Monitor the day-to-day financial operations within the company, such
            as payments, verification and accounting of invoices, and other
            transactions.
          </li>

          <li className="JobDescription">
            {" "}
            Preparation of MIS and financial data.
          </li>
          <li className="JobDescription">
            {" "}
            Establish and maintain financial policies, internal financial
            controls and procedures for the company.
          </li>
          <li className="JobDescription">
            {" "}
            Liaise with auditors to ensure appropriate monitoring of company
            finances is maintained.{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Candidate should have experience in GST filling.
          </li>
          <li className="JobDescription">
            {" "}
            Preparation of computation of Taxable Income and Filing of IT return
          </li>
        </ul>
        <h2>Requirements:</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Qualified CA with up to 3-6 years of experience from personal
            lending companies such as NBFCs or fintech platforms or banks.
          </li>
          <li className="JobDescription">
            Strong knowledge of NBFC accounting concepts & financial metrics.{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Can independently lead monthly/annual book closure and statutory
            audits.
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
            id="resume"
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
