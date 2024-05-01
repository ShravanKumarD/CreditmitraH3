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
          "What is Credit Mitra ?": `CreditMitra is your go-to solution for all your financial needs. Whether it's timely EMI
                payments, fulfilling long-awaited purchases, planning a well-deserved vacation, or tackling
                unexpected emergencies, CreditMitra has you covered.`,
        },
        {
          "What is the Eligibility Criteria to apply for a loan?": `CreditMitra caters to salaried professionals aged 21 to 50 years. Qualify by maintaining a
                 minimum net salary of Rs.15,000 with regular bank account credits for a seamless loan
                 application process.`,
        },
        {
          "How does CreditMitra Works?": `CreditMitra is where simplicity meets convenience. All you need to do is follow through these
                steps to get an instant loan:

                 Download the CreditMitra app from Play Store.                
                 Register effortlessly using Facebook, Gmail, or LinkedIn.
                 Check eligibility with basic details.
                 Complete the application with ease.
                 Upload documents’ photos conveniently.
                 Add your bank account details securely.`,
        },

        {
          "Are you a Bank or an NBFC?": `CreditMitra is neither a Bank nor an NBFC. It is an user-friendly technology platform
                powered by Bluechip Finance Private Limited; an RBI-registered Non-Banking Financial
                Company (NBFC).`,
        },
        {
          "Does it work only on smartphone ?": `No, you can also apply via your computer/laptop through our web-app.`,
        },
        {
          "How much loan do you offer?": `We offer loans ranging from 5,000 INR to 1,50,000 INR with tenures starting from 65 days.`,
        },
        {
          "Is CreditMitra app Legal ? ": `Yes, CreditMitra is 100% legal. It is registered on Google Playstore and only offer loans
                through RBI-registered NBFCs.`,
        },
        {
          "Are you a Bank or an NBFC ?": `CreditMitra is neither a Bank nor an NBFC. It is an user-friendly technology platform
                powered by Bluechip Finance Private Limited; an RBI-registered Non-Banking Financial
                Company (NBFC).`,
        },
        {
          "Where can I reach for a support ? ": `For any needed support related to CreditMitra, you can contact us at support@creditmitra.in`,
        },
      ],
    },
    // {
    //     "Technical": [
    //         {"What is Credit  ?": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently "},
    //         {"What is Credit Mitra ?": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently "},
    //     ]
    // },
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
      <>
        {faqSelected.map((each, index) => {
          return (
            <>
              <div className="each-answer">
                <button
                  onClick={() => {
                    openfaqAnswer(index);
                  }}
                  className="btn faq-toggler"
                >
                  <div className="faq-toggler-content">
                    {Object.keys(each)[0]}
                    <svg
                      className={`${faqAnswerOpened[index] ? "isopened" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="15"
                      viewBox="0 0 24 15"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
            </>
          );
        })}
      </>
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
                {/* <div class="form-group">
                                    <input type="text" class="form-control" id="search-faq" placeholder="Enter your search term here"/>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path d="M29.2264 30.2308L19.8334 20.8378C19.0834 21.4768 18.2209 21.9713 17.2459 22.3213C16.2709 22.6713 15.2909 22.8463 14.3059 22.8463C11.9039 22.8463 9.87094 22.0148 8.20694 20.3518C6.54294 18.6888 5.71094 16.6563 5.71094 14.2543C5.71094 11.8523 6.54194 9.81882 8.20394 8.15382C9.86594 6.48882 11.8979 5.65532 14.2999 5.65332C16.7019 5.65132 18.7359 6.48332 20.4019 8.14932C22.0679 9.81532 22.9014 11.8488 22.9024 14.2498C22.9024 15.2918 22.7179 16.3003 22.3489 17.2753C21.9799 18.2503 21.4949 19.0843 20.8939 19.7773L30.2869 29.1688L29.2264 30.2308ZM14.3059 21.3448C16.2959 21.3448 17.9764 20.6598 19.3474 19.2898C20.7184 17.9198 21.4034 16.2393 21.4024 14.2483C21.4014 12.2573 20.7164 10.5773 19.3474 9.20832C17.9784 7.83932 16.2984 7.15432 14.3074 7.15332C12.3164 7.15232 10.6359 7.83732 9.26594 9.20832C7.89594 10.5793 7.21094 12.2593 7.21094 14.2483C7.21094 16.2373 7.89594 17.9173 9.26594 19.2883C10.6359 20.6593 12.3159 21.3458 14.3059 21.3448Z" fill="white"/>
                                        </svg>
                                    </span>
                                </div> */}
                <div className="faq-tab-container">
                  <div className="tab-buttons">
                    {faqContent.map((each) => {
                      return (
                        <>
                          <button
                            className={`${
                              tabActive == Object.keys(each)[0]
                                ? "active-btn"
                                : ""
                            } btn`}
                            onClick={() => {
                              setTabActive(Object.keys(each)[0]);
                            }}
                          >
                            {Object.keys(each)[0]}
                          </button>
                        </>
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
