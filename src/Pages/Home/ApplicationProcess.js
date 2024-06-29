import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/IMG1.png';
import Image2 from '../../assets/images/IMG2.png';
import Image3 from '../../assets/images/IMG3.png';
import Image4 from '../../assets/images/IMG4.png';
import Image5 from '../../assets/images/IMG5.png';
import Image6 from '../../assets/images/approvalIcon.png';
import Image7 from '../../assets/images/repayicon.png';

function ApplicationProcess(props) {
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
                className={`application-process-card resLending ${isVisible ? 'animate' : ''}`}>
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

    function ApplicationProcessingCard({ orderNo, heading, description, img }) {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                const cardElement = document.getElementById(`card-${orderNo}`);
                const rect = cardElement.getBoundingClientRect();
                const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

                if (isFullyVisible) {
                    setIsVisible(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [orderNo]);

        return (
            <div
                id={`card-${orderNo}`}
                className={`application-process-card resLending ${isVisible ? 'animate' : ''}`}>
                <div className='content'>
                    {orderNo && <div className='list-number'><div className="light-overlay-number">{orderNo}</div></div>}
                    {heading && <h6>{heading}</h6>}
                    <p style={{ fontSize: "16px", fontWeight: "300" }}>{description}</p>
                </div>
                {img && <img className='inmageHome' src={img} alt={heading} />}
            </div>
        );
    }

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

    const additionalCards = [
        {
            orderNo: 6,
            img: Image6,
            heading: "Instant Approval & Disbursal",
            description: "Easy online process for loan sanction and fast disbursal"
        },
        {
            orderNo: 7,
            img: Image7,
            heading: "Flexible Repayment Option",
            description: "Accelerated payment option towards principal outstanding"
        }
    ];

    return (
        <div className="application-process-section">
            <h6 className="hero-heading">How It Works?</h6>
            {processCards.map((card, index) => (
                <ApplicationProcessingCard key={index} {...card} />
            ))}

            <h6 className="hero-sub extra-margin-top">
                Why Choose CreditMitra for Your
                <br /> Personal Loan Needs?
            </h6>
            <div className='application-process-card b'>
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
            <div className='applpcardbuttons'>
                <button className="btn brand-primary py-3 px-4" style={{ color: "#fff", textDecoration: "none" }}
                  onClick={() => (window.location.href ="https://creditmitra.cloudbankin.com/onboard/#/login")}
                >Apply Now</button>
                <button className="btn brand-secondary py-3 px-4">
                    <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</Link>
                </button>
            </div>
        </div>
    );
}

export default ApplicationProcess;
