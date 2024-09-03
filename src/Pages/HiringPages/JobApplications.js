import React, { useEffect, useState, useRef } from 'react';
import "./wearehiring.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import heroImage from "./../../assets/images/hero-image1.png"
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Image1 from './../../assets/images/IMG1.png';
import Image2 from './../../assets/images/IMG2.png';
import Image3 from './../../assets/images/IMG3.png';
import Image4 from './../../assets/images/IMG4.png';
import Image5 from './../../assets/images/IMG5.png';
import Image6 from './../../assets/images/approvalIcon.png';
import Image7 from './../../assets/images/repayicon.png';
import styled, { keyframes } from 'styled-components';
import avatar1 from './../../assets/images/avatar1.png';
import avatar2 from './../../assets/images/avatar2.png';
import avatar3 from './../../assets/images/avatar3.png';
import FooterImg from "../../assets/images/footer-globe.png";
import SocialComponentsDesktop from "./../../Components/SocialComponents/SocialComponentsDesktop";
import SocialComponentsMobile from "./../../Components/SocialComponents/SocialComponentsMobile";

function JobApplications() {
    const [data, setData] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleLocationSelect = (location) => {
      setIsDropdownOpen(false);
    };
  
    const locations = [
      {
        displayName: "Hyderabad",
        redirectTo: "/instant-personal-loan-hyderabad",
      },
      { displayName: "Mumbai", redirectTo: "/instant-personal-loan-mumbai" },
      {
        displayName: "Bangalore",
        redirectTo: "/instant-personal-loan-Bangalore",
      },
    ];
  
    const links = [
      {
        heading: "Products",
        navLinks: [
          { displayName: "Instant Personal Loan", redirectTo: "/products" },
          { displayName: "Instant Personal Loans By Location", isDropdown: true },
        ],
      },
      {
        heading: "Our Company",
        navLinks: [
          { displayName: "About us", redirectTo: "/about" },
          { displayName: "We are hiring", redirectTo: "/we-are-hiring" },
          {
            displayName: "Digital Lending Partners",
            redirectTo: "/ourLendingPartners",
          },
        ],
      },
      {
        heading: "Legal",
        navLinks: [
          {
            displayName: "Terms & Conditions",
            redirectTo: "/termsAndConditions",
          },
          { displayName: "Privacy Policy", redirectTo: "/privacypolicy" },
          {
            displayName: "Grievance Redressal",
            redirectTo: "/grievanceredressal",
          },
        ],
      },
      {
        heading: "Categories",
        navLinks: [
          { displayName: "Contact us", redirectTo: "/contact" },
          { displayName: "About us", redirectTo: "/about" },
          {
            displayName: "Responsible lending",
            redirectTo: "/responsibleLending",
          },
          { displayName: "FAQ", redirectTo: "/faq" },
          { displayName: "Blog", redirectTo: "/blogs" },
          {
            displayName: "EMI Calculator",
            redirectTo: "/personal-loan-emi-calculator",
          },
        ],
      },
    ];
  
    function BottomHalfCards({ img, heading, description, index }) {
      const [isVisible, setIsVisible] = useState(false);
      const cardRef = useRef(null);

      useEffect(() => {
          const observer = new IntersectionObserver(
              ([entry]) => {
                  if (entry.isIntersecting) {
                      setIsVisible(true);
                      observer.unobserve(cardRef.current);
                  }
              },
              { threshold: 0.1 }
          );

          observer.observe(cardRef.current);

          return () => {
              if (cardRef.current) {
                  observer.unobserve(cardRef.current);
              }
          };
      }, []);

      return (
          <div
              ref={cardRef}
              className={`application-process-card resLending ${isVisible ? 'animate' : ''}`} style={{border:"1px solid"}}>
              <div className='content needsContent'>
                  <div>
                      <h6 className='intext'>{heading}</h6>
                      <p className='intext'>{description}</p>
                  </div>
              </div>
              <div className='inmage'>
                  <img marginTop="auto" src={img} alt={heading} />
              </div>
          </div>
      );
  }
  const getFooterNavLinks = () => {
    return links.map((each) => (
      <div key={each.heading}>
        <h6>{each.heading}</h6>
        <ul>
          {each.navLinks.map((eachNav) => (
            <li key={eachNav.displayName}>
              {eachNav.isDropdown ? (
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle dropdown-toggleFooter"
                    type="button"
                    onClick={handleDropdownToggle}
                  >
                    {"Loans By Location"}
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu custom-dropdown-menu show">
                      {locations.map((location) => (
                        <>
                          <li
                            key={location.displayName}
                            onClick={() => handleLocationSelect(location)}
                            className="custom-dropdown-item"
                          >
                            <Link
                              to={location.redirectTo}
                              className="dropdownFooter-item"
                            >
                              {location.displayName}
                            </Link>
                          </li>
                          <hr className="dropdownUnderLine" />
                        </>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={eachNav.redirectTo} title={eachNav.displayName}>
                  {eachNav.displayName}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

    const processCards = [
        {
            orderNo: 1,
            heading: "Application Process",
            description: "Take the first step towards financial freedom by filling out our simple and easy online application form. Provide your basic information and let us handle the rest.",
            img: Image1
        },
        {
            orderNo: 2,
            heading: "Document Verification",
            description: "From the comfort of your home, upload the necessary documents to complete your application. Our secure system ensures the confidentiality of your information.",
            img: Image2
        },
        {
            orderNo: 3,
            heading: "Credit Assessment",
            description: "Our seasoned underwriting team, leveraging cutting-edge technology, meticulously assesses your application and financial history for creditworthiness.",
            img: Image3
        },
        {
            orderNo: 4,
            heading: "Loan Approval",
            description: "Upon successful credit assessment, your loan will be promptly approved and disbursed directly into your linked bank account.",
            img: Image4
        }
    ];

    const slideIn = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  
  const bounce = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  `;
  
  const FeedbackCard = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    padding: 20px;
    animation: ${slideIn} 1s ease-in-out, ${bounce} 2s infinite ease-in-out;
  
    img {
      border-radius: 50%;
      margin-right: 20px;
      width: 60px;
      height: 60px;
    }
  
    div {
      display: flex;
      flex-direction: column;
    }
  
    h4 {
      margin: 0;
      font-size: 1.2em;
    }
  
    p {
      margin: 5px 0 0;
    }
  `;
  
  const feedbacks = [
    {
      comment: "No crazy paperwork, just a quick online application and the money was in my account the same day.",
      userName: "Kunal P.",
      img: avatar2,
    },
    {
      comment: "Very simple and instructions were clearly present. No hidden charges were present and very low interest rates.",
      userName: "Rashmi.",
      img: avatar1,
    },
    {
      comment: "I took the loan from CreditMitra many times. Very soft spoken and professional staff.",
      userName: "Nehal K.",
      img: avatar3,
    },
  ]

    const fetchData = async () => {
        try {
            const response = await fetch('http://3.111.198.234/internal-feed/job-post/getjob');
            if (response.ok) {
                const appliedCandidates = await response.json();
                setData(appliedCandidates);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="job-application-container">
            <Header/>
               {/* <img
                    className="easy-loan-main-logo"
                    style={{ width: 180 }}
                    src={Logo}
                    title="CreditMitra"
                    alt="CreditMitra"
                /> */}
            {/* <h1 className="header">Applied Candidates</h1> */}
            {/* {data.application && (
                <ul>
                    {data.application.map((candidate, index) => (
                        <table >
                              <tbody>
                             <tr>
                             <td className="like-text">{candidate.id}</td>
                             
                                <td className="like-text">{candidate.name}</td>
                                <td className="like-text">{candidate.email}</td>
                                <td className="like-text">{candidate.contact}</td>
                                <td className="like-text"><a href="">{candidate.resume}</a></td>
                                <td className="like-text">{candidate.createdAt.split('T')[0]}</td>
                             </tr>
                             </tbody>
                            </table>
                    ))}
                </ul>
            )} */}
             <section className="background">
             <div className="hero-section dots">
      <div className="content a">
        <h6 className="hero-content auto-type-text">
          Your Trusted Loan Mitra
          <br />
          Loans Made Easy & Friendly
        </h6>
        <p>
          At CreditMitra, we understand that life doesn't always wait for
          payday. That's why we're here to offer you instant personal loans with
          no hassle and no waiting.
        </p>
        <div className="hero-content-button">
          <buttton className="btn brand-secondary py-3 px-4 home-download">
            Download App
          </buttton>
        </div>
      </div>
      <img
        src={heroImage}
        // style={{marginTop:"50px"}}
        className="img-home"
        alt="img"
      />
    </div>          
      </section>
      <section className="section-blue">
      <div className="container mt-5">
      <div className="row justify-content-around">
        {processCards.map((card, index) => (
          <div key={card.orderNo} className="col-md-6 mb-4  align-items-center">
            {index % 2 === 0 ? (
              <>
                <div className="bubble animated shake">
                  <div className="card">
                    <img src={card.img} alt={card.heading} className="card-img-top" />
                  </div>
                </div>
                <div className="process-card ms-3">
                  <h5 className="card-title">{card.heading}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="process-card me-3">
                  <h5 className="card-title">{card.heading}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
                <div className="bubble animated shake">
                  <div className="card text-center">
                    <img src={card.img} alt={card.heading} className="card-img-top" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
      </section>
      <section className="background">
       <div>
       <h6 className="hero-sub extra-margin-top">
                Why Choose CreditMitra for Your
                <br /> Personal Loan Needs?
            </h6>

            <div className='application-process-card b' style={{border:"1px solid"}}>
                <div className='content'>
                    <div className='space'></div>
                    <h6>Customized Personal Loan</h6>
                    <p className='mb-3'>At CreditMitra, the customized personal loan is the core of our commitment. We understand that financial needs differ from person to person, and resultantly, we offer personalized loan solutions to meet the unique requirements of each individual.</p>
                    <p className='pb-5'>With our customized personal loan, borrowers have the flexibility to choose the loan amount and repayment tenure that best suits their needs. We understand that one size does not fit all; we work closely with our customers to understand their financial objectives, ensuring that the loan terms are structured in a way that aligns with their preferences and capabilities.</p>
                </div>
                <img className='inmageHome' src={Image5} alt="Customized Personal Loan" />
            </div>
            <div className='halfcard'></div>
            <div className='row'>
                <div className='col-sm-6'>
                    <BottomHalfCards img={Image6} heading="Instant Approval & Disbursal" description="Easy online process for loan sanction and fast disbursal" index={1} />
                </div>
                <div className='col-sm-6'>
                    <BottomHalfCards img={Image7} heading="Flexible Repayment Option" description="Accelerated payment option towards principal outstanding" index={2} />
                </div>
            </div>
            <p>
        &nbsp;
       </p>
       <p>
        &nbsp;
       </p>
       </div>
      
      </section>
      <section className="section-blue">
    <div className='container'>
      {feedbacks.map((feedback, index) => (
        <FeedbackCard key={index}>
          <img src={feedback.img} alt={`${feedback.userName} avatar`} />
          <div>
            <h4>{feedback.userName}</h4>
            <p>{feedback.comment}</p>
          </div>
        </FeedbackCard>
      ))}
    </div>
      </section>
      <section className="background">
      <footer>
      <div className="footer-section-JA">
        <img
          src={FooterImg}
          className="footer-globe img-fluid"
          alt="Footer Globe"
        />
        <div className="footer-content-JA">
          <div className="footer-container row">
            <div className="col-md-4">
              <img src={Logo} className="img-fluid mb-3" alt="Logo" />
              <p className="pinFooter">
                Welcome to CreditMitra, Your Gateway to Financial Empowerment!
                At CreditMitra, you can Navigate through our user-friendly
                platform to access a range of credit solutions tailored to your
                needs.
              </p>
              <SocialComponentsDesktop />
            </div>
            <div className="col-sm-8 navigation-container">
              {getFooterNavLinks()}
            </div>
          </div>
          <SocialComponentsMobile />
          <p className="copyright-text">
            © 2024 CreditMitra — All Rights are Reserved
          </p>
        </div>
      </div>
    </footer>
    <p>
        &nbsp;
       </p>
       <p>
        &nbsp;
       </p>
       
      </section>

        </div>
    );
}

export default JobApplications;
