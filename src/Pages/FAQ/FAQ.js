

import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import SEO from "../../Components/SEO/SEO";

function FAQ(props) {
 let faqContent = [
  {
    General: [
      {
        "What is CreditMitra ?": `CreditMitra is your go-to solution for all your financial needs. Whether it's timely EMI payments, fulfilling long-awaited purchases, planning a well-deserved vacation, or tackling unexpected emergencies, CreditMitra has you covered.`,
      },
      {
        "What is the Eligibility Criteria to apply for a loan?": `CreditMitra caters to salaried professionals aged 21 to 50 years. Qualify by maintaining a minimum net salary of Rs.15,000 with regular bank account credits for a seamless loan application process.`,
      },
      {
        "How does CreditMitra Work?": `CreditMitra is where simplicity meets convenience. All you need to do is follow through these steps to get an instant loan:
        <ul>
          <li> Download the CreditMitra app from Play Store.</li>
          <li> Register effortlessly using Facebook, Gmail, or LinkedIn.</li>
          <li> Check eligibility with basic details.</li>
          <li> Complete the application with ease.</li>
          <li> Upload documents' photos conveniently.</li>
          <li> Add your bank account details securely.</li>
          <li> Upon verification, expect swift fund transfer to your account.</li>
        </ul>`,
      },
      {
        "Are you a Bank or an NBFC?": `CreditMitra is neither a Bank nor an NBFC. It is an user-friendly technology platform powered by Bluechip Finance Private Limited; an RBI-registered Non-Banking Financial Company (NBFC).`,
      },
      {
        "Does it work only on smartphone ?": `No, you can also apply via your computer/laptop through our web-app.`,
      },
      {
        "How much loan do you offer?": `We offer loans ranging from 5,000 INR to 1,50,000 INR with tenures starting from 65 days.`,
      },
      {
        "Is CreditMitra app Legal ? ": `Yes, CreditMitra is 100% legal. It is registered on Google Playstore and only offer loans through RBI-registered NBFCs.`,
      },
      {
        "Where can I reach for a support ? ": `For any needed support related to CreditMitra, you can contact us at support@creditmitra.in`,
      },
    ],
  },
  {
    Technical: [
      {
        "What happens if your platform crashes when I'm midway through my loan application process?":
          " We have made sure that the loan request process on our platforms is smooth and bug-free. If you are using our website for your loan application, we recommend that you save your application frequently. And if your app crashes at any point in time, you will be able to start from the same step where the app crashed previously. Still  if you face any difficulty, please get in touch with us at support@creditmitra.in along with the details of the issue",
      },
      {
        "Why can't I see the loans section on my CreditMitra app whereas my friends can see such a section on theirs?": ` If you can't see the Loans tab on your CreditMitra app, please make sure to
        update the app to the latest version`,
      },
      {
        " How can I change the address and contact/phone number?": `You can write an email to our support team at support@creditmitra.in if you wish
        to update your contact details.`,
      },
      {
        " Why is the CreditMitra Personal App not loading on my device?": ` If you're experiencing issues with the CreditMitra Personal App not loading, there
        could be several reasons behind this problem. Ensure that your internet connection
        is stable, and try restarting the app. If the issue persists, consider updating the app to
        the latest version or checking for any system updates on your device.`,
      },
    ],
  },
  {
    Document: [
      {
        " What documents are required while applying for a Personal Loan from CreditMitra?": ` PAN card,
         Latest salary slip, from the same employer
         Present Address Proof – Electricity bill/Gas Bill/Telephone
         bill/Creditcard/Internet/HR Letter/PG Invoice,
         Proof of Employment - Company ID/Payslip,
         Latest statement of your Bank Account, reflecting salary credit for last 3 months
         `,
      },
      {
        " I am not registered for netbanking or if my netbanking ID is not valid, how can I send you my bank statement?": ` You can provide us the last 3 months bank statement.`,
      },
      {
        " I received/Downloaded the Bank Statement in Email from my Bank. However,when I am trying to upload it's not getting accepted?": ` Many times the bank statement sent or downloaded is not in the right format. To
        ensure your loan is processed at the earliest, please download the bank statement in
        PDF from your bank website or the one received in your registered email id and
        upload it on our CreditMitra app.`,
      },
      {
        "Recently, I changed my bank account. It shows income/salary credit of only 1/2 months. Can I upload bank statements from both the banks to meet the 3 month bank statement requirement?":
          " You can reach out to us on support@creditmitra.in. We will be able to help you.",
      },
      {
        " I am not able to upload docs online or see errors. Can I send the docs directly in email and you can process the application?": ` If you are facing problems in uploading the docs, you can reach out to us on
        support@creditmitra.in. We will be able to help you.`,
      },
    ],
  },
  {
    Eligibility: [
      {
        "What are the eligibility criteria for Personal Loan?": `You are eligible to apply personal loan on satisfying the following criteria –
        <ul>
        <li>Should be an Indian citizen</li>
        <li> Should be a salaried employee</li>
        <li> Should have a minimum salary of Rs. 15,000/- p.m.</li>
        <li> Salary should be credited directly to the bank</li>
        <li> Should be above 21 years and not more than 55 years old</li>
        </ul>`,
      },
      {
        " How quickly will I get my Loan?": ` Your loan is generally transferred immediately as soon as all your documents are
        verified. In order to process your loan quickly, we advise you to upload the necessary
        documents in the necessary formats and make sure they are clear and legible.`,
      },
      {
        " What is the maximum and minimum loan amount that I can apply for?": ` The minimum amount that you can borrow on CreditMitra loans is Rs.5,000. The
        maximum loan amount is calculated by our algorithm and can go up to Rs.2 Lakhs.`,
      },
      {
        " I am a self-employed individual, am I eligible for a loan from CreditMitra?": `No, CreditMitra Personal loan is only for Salaried as of now.`,
      },
      {
        " Will I get a loan if I get my salary in cash?": ` At this point in time, we only give loans to those individuals who get their salary
        via bank transfer – directly from their employer. We will not be able to give loans to
        those individuals who get their salaries in cash.`,
      },
      {
        " I have one loan running with CreditMitra. Can I apply for another loan?": ` No, we don't provide the option of applying for a new loan if a user already has an
         existing one.`,
      },
    ],
  },
];
  const [tabActive, setTabActive] = useState(Object.keys(faqContent[0])[0]);
  const [faqAnswerOpened, setFaqAnswerOpened] = useState({});

  function openfaqAnswer(sectionIndex, questionIndex) {
    setFaqAnswerOpened((prevState) => ({
      ...prevState,
      [sectionIndex]: {
        ...prevState[sectionIndex],
        [questionIndex]: !prevState[sectionIndex]?.[questionIndex],
      },
    }));
  }

  function generateFaqQuestions(sectionIndex) {
    let faqSelected = faqContent.find(
      (each) => Object.keys(each)[0] === tabActive
    )[tabActive];

    return (
      <div>
        {faqSelected.map((each, questionIndex) => {
          const isOpen = faqAnswerOpened[sectionIndex]?.[questionIndex];
          return (
            <div className="each-answer" key={questionIndex}>
              <button
                onClick={() => openfaqAnswer(sectionIndex, questionIndex)}
                className="btn faq-toggler"
              >
                <div className="faq-toggler-content">
                  {Object.keys(each)[0]}
                  <svg
                    className={`${isOpen ? "isopened" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5227 3.46689L13.1523 13.8373C12.5159 14.4737 11.4841 14.4737 10.8477 13.8373L0.477287 3.46689C-0.159096 2.83051 -0.159096 1.79873 0.477287 1.16234C1.11367 0.525962 2.14545 0.525962 2.78183 1.16234L12 10.3805L21.2182 1.16235C21.8546 0.525963 22.8863 0.525963 23.5227 1.16235C24.1591 1.79873 24.1591 2.83051 23.5227 3.46689Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Collapse isOpen={isOpen}>
                  <p
                    dangerouslySetInnerHTML={{ __html: Object.values(each)[0] }}
                  ></p>
                </Collapse>
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Frequently Asked Questions | CreditMitra"
        description="Learn about CreditMitra Online Personal Loan. Here you will find F.A.Qs to help you get started."
        keywords="online instant personal loan"
        name="CreditMitra"
        type="faq"
      />
      <section>
        <div className="page-container faq">
          <div className="faq-section">
            <div className="content">
              <h6 className="heading">We Have Answers</h6>
              <div className="faq-container mx-auto">
                <div className="faq-tab-container">
                  <div className="tab-buttons row faqheads">
                    {faqContent.map((each, sectionIndex) => (
                      <div className="col-md-3" key={sectionIndex}>
                        <button
                          className={`${
                            tabActive === Object.keys(each)[0]
                              ? "active-btn"
                              : ""
                          } btn`}
                          onClick={() => setTabActive(Object.keys(each)[0])}
                        >
                          {Object.keys(each)[0]}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="answer-section">
                    {faqContent.map((_, sectionIndex) =>
                      tabActive === Object.keys(faqContent[sectionIndex])[0]
                        ? generateFaqQuestions(sectionIndex)
                        : null
                    )}
                  </div>
                </div>
                <div className="more-questions">
                  <p className="faqBottomHeaderLine">
                    Haven't Found what you need?
                  </p>
                  <span className="faqBottomLine">
                    Get in Touch, We are happy to help!
                  </span>
                  <Link to={"/contact"} className="btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default FAQ;
