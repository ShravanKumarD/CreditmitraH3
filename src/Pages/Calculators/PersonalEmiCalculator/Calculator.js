import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calculator.css';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer';
import SEO from '../../../Components/SEO/SEO';
import { PieChart } from 'react-minimal-pie-chart';

const Calculator = (props) => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [roi, setROI] = useState(0);
    const [tenure, setTenure] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [emi, setEmi] = useState(0);

    const handleChangeLoanAmount = (event) => {
        setLoanAmount(Number(event.target.value));
    };

    const handleChangeROI = (event) => {
        setROI(Number(event.target.value));
    };

    const handleChangeTenure = (event) => {
        setTenure(Number(event.target.value));
    };

    useEffect(() => {
        const calculateEMI = (principal, annualRate, tenureMonths) => {
            const monthlyRate = annualRate / (12 * 100); 
            const totalMonths = tenureMonths; 
            console.log(totalMonths, "totalmonths")

            const emi =
                (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
                (Math.pow(1 + monthlyRate, totalMonths) - 1);

            return emi;
        };

        if (loanAmount > 0 && roi > 0 && tenure > 0) {
            const emiValue = calculateEMI(loanAmount, roi, tenure);
            const totalInterestValue = emiValue * tenure - loanAmount;
            const totalPaymentValue = loanAmount + totalInterestValue;

            setEmi(emiValue);
            setTotalInterest(totalInterestValue);
            setTotalPayment(totalPaymentValue);
        } else {
            setEmi(0);
            setTotalInterest(0);
            setTotalPayment(0);
        }
    }, [loanAmount, roi, tenure]);

    return (
        <>
            <Header routePath={props.routePath} />
            <SEO
                title="Contact Us | instant personal loan in India | CreditMitra"
                description="CreditMitra understands the importance of customer satisfaction and personal service. You can reach our Customer Care team or one of our Dedicated Loan Officers at any time. Feel free to give us a call!"
                keywords="instant personal loan in India, personal loan approval"
                name="Credit Mitra"
                type="article"
            />
            <h3 className="text-xl font-semibold mb-4">Personal Loan EMI Calculator</h3>
            <section>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="slider-container">
                            <div className="text-center mb-4">
                                <h4 className="mb-3">Loan Amount: ₹{loanAmount}</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000000"
                                    value={loanAmount}
                                    onChange={handleChangeLoanAmount}
                                    className="form-range-slider"
                                    list="loanAmountTicks"
                                />
                                <input
                                    type="number"
                                    min="0"
                                    max="1000000"
                                    value={loanAmount}
                                    onChange={handleChangeLoanAmount}
                                    className="form-control mt-7"
                                />
                            </div>
                            <div className="text-center mb-4">
                                <h4 className="mb-3">Rate Of Interest: {roi}%</h4>
                                <input
                                    type="range"
                                    min="0"
                                    max="20"
                                    step="0.1"
                                    value={roi}
                                    onChange={handleChangeROI}
                                    className="form-range-slider"
                                    list="roiTicks"
                                />
                                <input
                                    type="number"
                                    min="0"
                                    max="20"
                                    step="0.1"
                                    value={roi}
                                    onChange={handleChangeROI}
                                    className="form-control mt-7"
                                />
                            </div>
                            <div className="text-center mb-4">
                                <h4 className="mb-3">Tenure: {tenure} Months</h4>
                                <input
                                    type="range"
                                    min="1"
                                    max="360"
                                    value={tenure}
                                    onChange={handleChangeTenure}
                                    className="form-range-slider"
                                    list="tenureTicks"
                                />
                                <input
                                    type="number"
                                    min="1"
                                    max="360"
                                    value={tenure}
                                    onChange={handleChangeTenure}
                                    className="form-control mt-7"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <div className="output-container">
                            <h5 className="mb-3 fade-in" style={{ fontSize: "20px", fontWeight: "normal", marginTop: "30px" }}>
                                Equated Monthly Installments (EMI): ₹{emi.toFixed(2)}
                            </h5>
                            <h5 className="mb-3 fade-in" style={{ fontSize: "20px", fontWeight: "normal" }}>
                                Total Amount Payable: ₹{totalPayment.toFixed(2)}
                            </h5>
                        </div>
                        <div className="pie-chart-container mt-4">
                            <div className="text-center mt-5">
                                <div>
                                    <h5 className="mb-3 fade-in">Total Interest: ₹{totalInterest.toFixed(2)}</h5>
                                    <h5 className="mb-3 fade-in">Total Payment: ₹{totalPayment.toFixed(2)}</h5>
                                    <PieChart
                                        className='pie'
                                        data={[
                                            { title: 'Interest', value: parseFloat(totalInterest.toFixed(2)), color: '#E38627' },
                                            { title: 'Principal', value: parseFloat(totalPayment.toFixed(2)), color: '#C13C37' }
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Calculator;
