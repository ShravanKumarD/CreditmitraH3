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

    const handleChangeLa = (event) => {
        setLoanAmount(Number(event.target.value));
    };
    const handleChangeROI = (event) => {
        setROI(Number(event.target.value));
    };
    const handleChangeT = (event) => {
        setTenure(Number(event.target.value));
    };

    useEffect(() => {
        const calculateEMI = (principal, rate, time) => {
            rate = rate / (12 * 100);
            time = time * 12; 
            return (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
        };

        if (loanAmount > 0 && roi > 0 && tenure > 0) {
            const emi = calculateEMI(loanAmount, roi, tenure);
            const interest = (emi * tenure * 12) - loanAmount;
            const total = parseFloat(loanAmount) + interest;

            setTotalInterest(interest);
            setTotalPayment(total);
        } else {
            setTotalInterest(0);
            setTotalPayment(0);
        }
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
                                    onChange={handleChangeLa}
                                    className="form-range-slider"
                                    list="loanAmountTicks"
                                />
                                <datalist id="loanAmountTicks">
                                    <option value="0" label="0"></option>
                                    <option value="200000" label="200k"></option>
                                    <option value="400000" label="400k"></option>
                                    <option value="600000" label="600k"></option>
                                    <option value="800000" label="800k"></option>
                                    <option value="1000000" label="1M"></option>
                                </datalist>
                                <input
                                    type="number"
                                    min="0"
                                    max="1000000"
                                    value={loanAmount}
                                    onChange={handleChangeLa}
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
                                <datalist id="roiTicks">
                                    <option value="0" label="0%"></option>
                                    <option value="5" label="5%"></option>
                                    <option value="10" label="10%"></option>
                                    <option value="15" label="15%"></option>
                                    <option value="20" label="20%"></option>
                                </datalist>
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
                                    onChange={handleChangeT}
                                    className="form-range-slider"
                                    list="tenureTicks"
                                />
                                <datalist id="tenureTicks">
                                    <option value="1" label="1"></option>
                                    <option value="60" label="60"></option>
                                    <option value="120" label="120"></option>
                                    <option value="180" label="180"></option>
                                    <option value="240" label="240"></option>
                                    <option value="300" label="300"></option>
                                    <option value="360" label="360"></option>
                                </datalist>
                                <input
                                    type="number"
                                    min="1"
                                    max="360"
                                    value={tenure}
                                    onChange={handleChangeT}
                                    className="form-control mt-7"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-5">
                        <div className="pie-chart-container">
                        <div className="output-container"></div>
                            <div className="text-center mt-5">
                                {(totalInterest === 0 || isNaN(totalInterest)) ?
                                <div>
                                    <h5 className="mb-3 fade-in">Total Interest: ₹0</h5>
                                    <h5 className="mb-3 fade-in">Total Payment: ₹0</h5>
                                    <PieChart
                                        data={[
                                            { title: 'Interest', value: 0, color: '#E38627' },
                                            { title: 'Principal', value: 0, color: '#C13C37' }
                                        ]}
                                    />
                                </div>
                                :
                                <div>
                                    <h5 className="mb-3 fade-in">Total Interest: ₹{totalInterest.toFixed(2)}</h5>
                                    <h5 className="mb-3 fade-in">Total Payment: ₹{totalPayment.toFixed(2)}</h5>
                                    <PieChart
                                        data={[
                                            { title: 'Interest', value: parseFloat(totalInterest.toFixed(2)), color: '#E38627' },
                                            { title: 'Principal', value: parseFloat(loanAmount), color: '#C13C37' }
                                        ]}
                                    />
                                </div>
                                }
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
