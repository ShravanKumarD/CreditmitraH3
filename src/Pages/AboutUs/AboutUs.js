import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ApplicationProcessingCard from '../../Components/ApplicationProcessingCard';
import Image1 from '../../assets/images/mission.png'
import Image2 from '../../assets/images/vision.png'
import aboutus from '../../assets/images/aboutus.png'


function AboutUs(props) {

    let points=[
        {quote: "Empowering Millennials with Innovative Loans", description: "Credit Mitra offers innovative loans to help millennials achieve a life that they desire.We differentiate in the otherwise cluttered Personal Loan segment and deliver fastest Personal Loans at customer friendly terms."},
        {quote: "Customer-Centric Loan Solutions", description:"Credit Mitra has in-house RBI registered NBFC. Our focus is to delight our customers by helping them choose the best loan products."},
        {quote: "Trusted Leadership in FinTech", description:"We boast of an experienced leadership and highly talented team, making us one of the fastest growing & trusted FinTech companies in the category."},
        {quote: "Quick and Convenient Personal Loans", description:"Credit Mitra has in-house RBI registered NBFC. Our focus is to delight our customers by helping them choose the best loan products."}
    ];
    function VisionCard (cardInfo){
        return <>
        <div className='application-process-card small-card'>
                    <div className='content'>
                        <h6>{cardInfo.heading}</h6>
                        <p>{cardInfo.description}</p>
                    </div>
                    <img height="300px" src={cardInfo.img}/>
                </div>
        </>
    }
    return (
        <>
        <Header routePath={props.routePath}/>
        <section>
            <div className='page-container about-us'>
                <div className='about-us-container'>
                    <div className='content'>
                        <h6 className='heading'>
                        Welcome to Credit Mitra<br/>Your Digital Lending Partner!
                        </h6>
                        <div className='about-section'>
                            <div className='about-section-content'>
                                <h6>About Credit Mitra</h6>
                                <p>Credit Mitra is a fintech company facilitating personal loans through a mobile application to salaried employees pan-India, within 24 hours</p>
                            </div>
                            <img  height="300px" src={aboutus}/>
                        </div>
                    </div>
                    <div className='about-points-container'>
                        {points.map((each, index)=>{
                            return <>
                            <div className='each-point'>
                                <div className='quote-container'>
                                    <span>{"0"+(index+ 1)}</span>
                                    <p>"{each.quote}"</p>
                                </div>
                                <ApplicationProcessingCard description={each.description} />
                            </div>
                            </>
                        })}
                    </div>
                    <VisionCard heading="Our Mission" img={Image1} description="Our mission is to bring financial inclusion to millions of underserved and unserved urban working Indian employees with accurate and faster credit decisions, as well as, unmatched user experience through a smartphone application. We are targeting to serve a 1% employee market size by 2024."/>
                    <VisionCard heading="Our Vision"  img={Image2} description="We believe in providing accessible credit facilities to those who may not have the time or resources to navigate through the complexities of traditional lending services. Credit Mitra is committed to offering quick and convenient loan solutions through our user-friendly mobile app." />
                
                </div>
            </div>
            <Footer/>
        </section>
    </>
    );
}

export default AboutUs;