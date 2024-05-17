import React, { useState } from 'react'
import './../PersonalEmiCalculator/calculator.css';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import SEO from '../../SEO/SEO';

const Calculator = (props) => {
    const [loanAmount, setloanAmount] = useState(0);
    const [roi, setROI] = useState(0);
    const [tenure, setTenure] = useState(0);
    
    const handleChangeLa = (event) => {
        console.log(event,"eventkjbsdjfusdfuwdh")
        setloanAmount(event.target);
    };
    const handleChangeROI = (event) => {
        setloanAmount(event.target);
    };
    const handleChangeT = (event) => {
        setloanAmount(event.target);
    };


    return (
        <>
            <Header routePath={props.routePath} />
            <SEO
                title="Contact Us | instant personal loan in india | CreditMitra"
                description="CreditMitra understand the importance of customer satisfaction and personal service. You can reach our Customer Care team or one of our Dedicated Loan Officers at any time, Feel free to give us a call!"
                keywords="instant personal loan in india, personal loan approval"
                name="Credit Mitra"
                type="article"
            />
            <section>
                <div className="page-container calculator">
                    <h6>Personal Loan EMI Calculator</h6>
                <div className='mainDivSlider'>
                    <div className='row main-slider'>
                    <h1>Loan Amount: {loanAmount}</h1>
                        <div className="col-sm-4 slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={loanAmount}
                                onChange={handleChangeLa}
                                className="slider"
                            />
                          
                          
                        </div>
                        <div style={{padding:"3%"}}></div>
                    </div>
                    <h1>Rate Of Interest: {roi}%</h1>
                    <div className='row main-slider'>
                        <div className="col-sm-4 slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={roi}
                                onChange={handleChangeROI}
                                className="slider"
                            />
                            <div className="markers">
                                <div className="marker" style={{ left: '25%' }}></div>
                                <div className="marker" style={{ left: '50%' }}></div>
                                <div className="marker" style={{ left: '75%' }}></div>
                            </div>
                           
                        </div>
                        <div style={{padding:"3%"}}></div>
                    </div>
                    <h1>Tenure: {tenure}Months</h1>
                    <div className='row main-slider'>
                        <div className="col-sm-4 slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={tenure}
                                onChange={handleChangeT}
                                className="slider"
                            />
                            <div className="markers">
                                <div className="marker" style={{ left: '25%' }}></div>
                                <div className="marker" style={{ left: '50%' }}></div>
                                <div className="marker" style={{ left: '75%' }}></div>
                            </div>
                          
                        </div>
                        <div style={{padding:"3%"}}></div>
                    </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}


export default Calculator;