import React from 'react';
import ApplicationProcessingCard from '../../Components/ApplicationProcessingCard';

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
            <svg width="104" height="104" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>
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
        />
        
        <ApplicationProcessingCard
          orderNo={2}
          heading={"Document Verification"}
          description={
            "From the comfort of your home, upload the necessary documents to complete your application. Our secure system ensures the confidentiality of your information."
          }
        />
        <ApplicationProcessingCard
          orderNo={3}
          heading={"Credit Assessment"}
          description={
            "Upon successful credit assessment, your loan will be promptly approved and disbursed directly into your linked bank account."
          }
        />
        <ApplicationProcessingCard
          orderNo={4}
          heading={"Loan Approval"}
          description={
            "Upon successful credit assessment, your loan will be promptly approved and disbursed directly into your linked bank account."
          }
        />
         <h6 className="heading extra-margin-top">
          Why Choose Credit Mitra for Your
          <br /> Personal Loan Needs?
        </h6>
        <div className='application-process-card small-card'>
            <div className='content'>
                <h6>Customized Personal Loan</h6>
                <p>Instant offer, quick disbursal & array of customised, flexible personal loan</p>
            </div>
        </div>
        <div className='d-flex' style={{gap: "32px"}}>
            <div className='w-100'>
                <BottomHalfCards heading="Instant Approval & Disbursal" description="Easy online process for loan sanction and fast disbursal within 24 hours"/>
            </div>
            <div className='w-100'>
                <BottomHalfCards heading="Flexible Repayment Option" description="Accelerated payment option towards principal outstanding"/>
            </div>
        </div>
        <div className='btn-container text-center'>
            <buttton className="btn brand-primary py-3 px-4">Apply Now</buttton>
            <buttton className="btn brand-secondary ml-3 py-3 px-4">Contact Us</buttton>
        </div>
      </div>
    );
}

export default ApplicationProcess;