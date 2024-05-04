import React from 'react';
import ApplicationProcessingCard from '../../Components/ApplicationProcessingCard';
import Image1 from '../../assets/images/IMG1.png'
import Image2 from '../../assets/images/IMG2.png'
import Image3 from '../../assets/images/IMG3.png'
import Image4 from '../../assets/images/IMG4.png'
import Image5 from '../../assets/images/IMG5.png'
import Image6 from '../../assets/images/approvalIcon.png'
import Image7 from '../../assets/images/repayicon.png'
import { Link } from 'react-router-dom';

function ApplicationProcess(props) {
    function BottomHalfCards(subProps){
        return (<>
        <div className='application-process-card small-card half-card'>
            <div className='content'>
                <div>
                    <h6>{subProps.heading}</h6>
                    <p>{subProps.description}</p>
                </div>
            </div>
            <img height="75px" src={subProps.img}/>
        </div>
        </>)
    }
    return (
      <div className="application-process-section">
         <h6 className="heading">How It Works?</h6>
        <ApplicationProcessingCard
          orderNo={1}
          heading={"Application Process"}
          description={
            "Take the first step towards financial freedom by filling out our simple and easy online application form. Provide your basic information and let us handle the rest."
          }
          img={Image1}
        />
        
        <ApplicationProcessingCard
          orderNo={2}
          heading={"Document Verification"}
          description={
            "From the comfort of your home, upload the necessary documents to complete your application. Our secure system ensures the confidentiality of your information."
          }
          img={Image2}
        />
        <ApplicationProcessingCard
          orderNo={3}
          heading={"Credit Assessment"}
          description={
            "Our seasoned underwriting team, leveraging cutting-edge technology, meticulously assesses your application and financial history for creditworthiness." 
            }
          img={Image3}
        />
        <ApplicationProcessingCard
          orderNo={4}
          heading={"Loan Approval"}
          description={
            "Upon successful credit assessment, your loan will be promptly approved and disbursed directly into your linked bank account."
          }
          img={Image4}
        />
         <h6 className="heading extra-margin-top">
          Why Choose Credit Mitra for Your
          <br /> Personal Loan Needs?
        </h6>
        <div className='application-process-card small-card'>
            <div className='content '>
                <h6>Customized Personal Loan</h6>
                <p className='mb-3'>At CreditMitra, the customized personal loan is the core of our commitment. We understand that financial needs differ from person to person, and resultantly, we offer personalized loan solutions to meet the unique requirements of each individual.</p>
                 
               <p className='pb-5'> With our customized personal loan, borrowers have the flexibility to choose the loan amount and repayment tenure that best suits their needs. We understand that one size does not fit all; we work closely with our customers to understand their financial objectives, ensuring that the loan terms are structured in a way that aligns with their preferences and capabilities.)


                </p>
            </div>
            <img height="370px" src={Image5}/>
        </div>
        <div className='row' >
            <div className='w-100'>
                <BottomHalfCards img={Image6} heading="Instant Approval & Disbursal" description="Easy online process for loan sanction and fast disbursal within 24 hours"/>
            </div>
            <div className='w-100'>
                <BottomHalfCards img={Image7} heading="Flexible Repayment Option" description="Accelerated payment option towards principal outstanding"/>
            </div>
        </div>
        <div className='btn-container text-center'>
            <buttton className="btn brand-primary py-3 px-4">Apply Now</buttton>
            <buttton className="btn brand-secondary ml-3 py-3 px-4"> <Link to="/contact" style={{color:"#fff",textDecoration:"none"}}>Contact Us</Link></buttton>
        </div>
      </div>
    );
}

export default ApplicationProcess;