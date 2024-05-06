import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import SEO from "../SEO/SEO";

function FAQ(props) {
  let faqContent = [
    {
      General: [
        {
          "What is Credit Mitra ?": `CreditMitra is your go-to solution for all your financial needs. Whether it's timely EMI payments, fulfilling long-awaited purchases, planning a well-deserved vacation, or tackling unexpected emergencies, CreditMitra has you covered.`,
        },
        {
          "What is the Eligibility Criteria to apply for a loan?": `CreditMitra caters to salaried professionals aged 21 to 50 years. Qualify by maintaining a minimum net salary of Rs.15,000 with regular bank account credits for a seamless loan application process.`,
        },
        {
          "How does CreditMitra Works?": `CreditMitra is where simplicity meets convenience. All you need to do is follow through these steps to get an instant loan:
Download the CreditMitra app from Play Store.
Register effortlessly using Facebook, Gmail, or LinkedIn.
Check eligibility with basic details.
Complete the application with ease.
Upload documents’ photos conveniently.
Add your bank account details securely.`,
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
          "Are you a Bank or an NBFC ?": `CreditMitra is neither a Bank nor an NBFC. It is an user-friendly technology platform powered by Bluechip Finance Private Limited; an RBI-registered Non-Banking Financial Company (NBFC).`,
        },
        {
          "Where can I reach for a support ? ": `For any needed support related to CreditMitra, you can contact us at support@creditmitra.in`,
        },
      ],
    },
    {
      Technical: [
        {
          "What happens if your platform crashes when I’m midway through my loan application process?":
           " We have made sure that the loan request process on our platforms is smooth and bug-free. If you are using our website for your loan application, we recommend that you save your application frequently. And if your app crashes at any point in time, you will be able to start from the same step where the app crashed previously. Still  if you face any difficulty, please get in touch with us at support@creditmitra.in along with the details of the issue",
        },
        {
          "Why can’t I see the loans section on my Credit Mitra app whereas my friends can see such a section on theirs?": 
          ` If you can’t see the Loans tab on your Credit Mitra app, please make sure to
          update the app to the latest version`,
        },
        {
          " How can I change the address and contact/phone number?": `You can write an email to our support team at support@creditmitra.in if you wish
          to update your contact details.`,
        },
        {
          " Why is the Credit Mitra Personal App not loading on my device?": ` If you're experiencing issues with the Credit Mitra Personal App not loading, there
          could be several reasons behind this problem. Ensure that your internet connection
          is stable, and try restarting the app. If the issue persists, consider updating the app to
          the latest version or checking for any system updates on your device.`,
        },
      ],
    },
    {
      Document: [
        {
          "": "",
        },
        {
          "I am not registered for net banking or if my net banking ID is not valid, how can I send you my bank statement?": "",
        },
        {
          "What documents are required while applying for a Personal Loan from Credit Mitra?": " ",
        },
        {
          "I have uploaded all the required documents for the loan, then why have I received a mail asking for some documents?": "",
        },
        {
          "I don't have any docs for Current Address Proof which are listed in your list. What can be done in such a condition?": "",
        },
        {
          "Recently, I changed my bank account. It shows income/salary credit of only 1/2 months. Can I upload bank statements from both the banks to meet the 3 month bank statement requirement?": "",
        },
      ],
    },
    {
      Eligibility: [
        {
          "What are the eligibility criteria for Personal Loan?": " ",
        },
        {
          "Does Credit Mitra charge any processing fee for the Personal loans taken?": "",
        },
        {
          "How quickly will I get my Loan?": "",
        },
        {
          "How do I repay the loan availed from Credit Mitra?": " ",
        },
        {
          "Who is eligible to apply for a loan from Credit Mitra ?": " ",
        },
        {
          "What is the maximum and minimum loan amount that I can apply for?": " ",
        },
        {
          "Will I get a loan if I get my salary in cash?": " ",
        },
        {
          "Am I allowed to change the loan amount once I’ve applied for it?": " ",
        },
      ],
    },
 
  ];
  const [tabActive, setTabActive] = useState(Object.keys(faqContent[0])[0]);
  const [faqAnswerOpened, setFaqAnswerOpened] = useState({});

  function openfaqAnswer(index) {
    let temp = { ...faqAnswerOpened, [index]: !faqAnswerOpened[index] };
    setFaqAnswerOpened(temp);
  }
  function generateFaqQuestions() {
    let faqSelected = faqContent.filter((each) => {
      return Object.keys(each)[0] == tabActive;
    });
    faqSelected = faqSelected[0][tabActive];
    return (
      <div>
        {faqSelected.map((each, index) => {
          return (
            <div className="each-answer" key={index}>
              <button onClick={() => { openfaqAnswer(index); }} className="btn faq-toggler">
                <div className="faq-toggler-content">
                  {Object.keys(each)[0]}
                  <svg
                    className={`${faqAnswerOpened[index] ? "isopened" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.5227 3.46689L13.1523 13.8373C12.5159 14.4737 11.4841 14.4737 10.8477 13.8373L0.477287 3.46689C-0.159096 2.83051 -0.159096 1.79873 0.477287 1.16234C1.11367 0.525962 2.14545 0.525962 2.78183 1.16234L12 10.3805L21.2182 1.16235C21.8546 0.525963 22.8863 0.525963 23.5227 1.16235C24.1591 1.79873 24.1591 2.83051 23.5227 3.46689Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Collapse isOpen={faqAnswerOpened[index]}>
                  <p>{Object.values(each)[0]}</p>
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
        name="Credit Mitra"
        type="faq"
      />
      <section>
        <div className="page-container faq">
          <div className="faq-section">
            <div className="content">
              <h6 className="heading">We Have Answers </h6>
              <div className="faq-container mx-auto">

              <div className="input-box">

{/* <input

    type="search"

    name="search-form"

    id="search-form"

    className="search-input"

    //  onChange={(e) => setSearchQuery(e.target.value)}

    placeholder="Enter your search term here"

/> */}

</div>

                <div className="faq-tab-container ">
                  <div className="tab-buttons row">
                    {faqContent.map((each, index) => {
                      return (
                        <div className="col-md-2">

                          <button
                            key={index}
                            className={`${tabActive == Object.keys(each)[0]
                                ? "active-btn"
                                : ""
                              } btn`}
                            onClick={() => {
                              setTabActive(Object.keys(each)[0]);
                            }}
                          >
                            {Object.keys(each)[0]}
                          </button>
                        </div>

                      );
                    })}
                  </div>
                  <div className="answer-section">{generateFaqQuestions()}</div>
                </div>
                <div className="more-questions">
                  <p>Haven't Found what you need?</p>
                  <span>Get in Touch, We are happy to help!</span>
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
