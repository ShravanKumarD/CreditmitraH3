import React, { useState, useEffect } from 'react';
import './../PersonalEmiCalculator/calculator.css';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import SEO from '../../../Components/SEO/SEO';

const Calculator = (props) => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [roi, setROI] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    const handleChangeLa = (event) => {
        setLoanAmount(event.target.value);
    };
    const handleChangeROI = (event) => {
        setROI(event.target.value);
    };
    const handleChangeT = (event) => {
        setTenure(event.target.value);
    };

    useEffect(() => {
        const calculateEMI = (principal, rate, time) => {
            rate = rate / (12 * 100); // Monthly interest rate
            time = time * 12; // Number of monthly installments
            return (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
        };

        const emi = calculateEMI(loanAmount, roi, tenure);
        const interest = (emi * tenure * 12) - loanAmount;
        const total = parseFloat(loanAmount) + interest;

        setTotalInterest(interest);
        setTotalPayment(total);
    }, [loanAmount, roi, tenure]);

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
            <section className="container mx-auto p-4">
                <h3 className="text-xl font-semibold mb-4">Personal Loan EMI Calculator</h3>
                <div className='my-6'>
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl font-semibold">Loan Amount: ₹{loanAmount}</h1>
                        <div className="w-full max-w-md">
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={loanAmount}
                                onChange={handleChangeLa}
                                className="slider w-full"
                            />
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl font-semibold">Rate Of Interest: {roi}%</h1>
                        <div className="w-full max-w-md">
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={roi}
                                onChange={handleChangeROI}
                                className="slider w-full"
                            />
                            <div className="relative w-full h-2 mt-2">
                                <div className="absolute left-1/4 w-1 h-full bg-gray-500"></div>
                                <div className="absolute left-1/2 w-1 h-full bg-gray-500"></div>
                                <div className="absolute left-3/4 w-1 h-full bg-gray-500"></div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div className='flex flex-col items-center'>
                        <h1 className="text-2xl font-semibold">Tenure: {tenure} Months</h1>
                        <div className="w-full max-w-md">
                            <input
                                type="range"
                                min="1"
                                max="360"
                                value={tenure}
                                onChange={handleChangeT}
                                className="slider w-full"
                            />
                            <div className="relative w-full h-2 mt-2">
                                <div className="absolute left-1/4 w-1 h-full bg-gray-500"></div>
                                <div className="absolute left-1/2 w-1 h-full bg-gray-500"></div>
                                <div className="absolute left-3/4 w-1 h-full bg-gray-500"></div>
                            </div>
                        </div>
                    </div>
                    <div className="result-container mt-8 text-center">
                        <h2 className="text-xl font-semibold transition-opacity duration-1000 opacity-0 show">Total Interest: ₹{totalInterest.toFixed(2)}</h2>
                        <h2 className="text-xl font-semibold transition-opacity duration-1000 opacity-0 show">Total Payment: ₹{totalPayment.toFixed(2)}</h2>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}

export default Calculator;
