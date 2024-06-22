import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calculator.css";
import "./calculator_mobile.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer";
import SEO from "../../../Components/SEO/SEO";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";

const Calculator = (props) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [roi, setROI] = useState(12);
  const [tenure, setTenure] = useState(12);
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

      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      return emi;
    };

    if (loanAmount > 0 && roi > 0 && tenure > 0) {
      const emiValue = calculateEMI(loanAmount, roi, tenure);
      const totalInterestValue = emiValue * tenure - loanAmount;
      const totalPaymentValue = loanAmount + totalInterestValue;
      console.log(totalInterestValue, totalPaymentValue, "calculated values");

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
        title="Calculator | Personal loan EMI Calculator | CreditMitra"
        description="CreditMitra understands the importance of customer satisfaction and personal service. You can reach our Customer Care team or one of our Dedicated Loan Officers at any time. Feel free to give us a call!"
        keywords="instant personal loan in India, personal loan approval"
        name="CreditMitra"
        type="LendingService"
      />
      <h3
        className="text-xl font-semibold mb-4 loan-calc-heading"
        style={{ marginTop: "100px" }}
      >
        Personal Loan EMI Calculator
      </h3>
      <section>
        <div className="caclulator-card">
          <div className="row">
            <div className="col-sm-6">
              <div className="slider-container">
                <div className="input-section mb-4">
                  <div className="text-and-input d-flex align-items-center">
                    <h4 className="headers mb-0 mr-2">Loan Amount</h4>
                    <div class="input-wrapper-principle">
                      <input
                        type="number"
                        min="0"
                        max="500000"
                        step="1000"
                        value={loanAmount}
                        onChange={handleChangeLoanAmount}
                        className="form-cc no-spinner uniform-width"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="1000"
                    value={loanAmount}
                    onChange={handleChangeLoanAmount}
                    className="form-range-slider"
                    list="loanAmountTicks"
                  />
                </div>

                <div className="input-section mb-4">
                  <div className="text-and-input d-flex align-items-center">
                    <h4 className="headers mb-0 mr-2">
                      Annual Rate of Interest
                    </h4>
                    {/* <input
                                            type="number"
                                            min="0"
                                            max="36"
                                            step="0.1"
                                            value={roi}
                                            onChange={handleChangeROI}
                                            className="form-cc"
                                            placeholder="0"
                                        /> */}
                    <div class="input-wrapper">
                      <input
                        type="number"
                        min="1"
                        max="120"
                        step="1"
                        value={roi}
                        onChange={handleChangeROI}
                        className="form-cc no-spinner uniform-width"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="120"
                    step="1"
                    value={roi}
                    onChange={handleChangeROI}
                    className="form-range-slider"
                  />
                </div>

                <div className="input-section mb-4">
                  <div className="text-and-input d-flex align-items-center">
                    <h4 className="headers mb-0 mr-2">Tenure</h4>
                    <input
                      type="number"
                      min="3"
                      max="72"
                      value={tenure}
                      onChange={handleChangeTenure}
                      className="form-cc no-spinner uniform-width"
                    />
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="72"
                    value={tenure}
                    onChange={handleChangeTenure}
                    className="form-range-slider"
                    list="tenureTicks"
                  />
                </div>
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="applyNowContainerLaptop"
              >
                <button className="applyNow">
                  <Link
                    to="/"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    Apply Now
                  </Link>
                </button>
              </div>
            </div>

            <div className="col-sm-5">
              <div className="output-container">
                {/* <h5 className="headers fade-in" style={{ fontSize: "20px", fontWeight: "normal", marginTop: "10px" }}>
                                    Equated Monthly Installments (EMI): ₹{emi.toFixed(2)}
                                </h5> */}
                {/* <h5 className="headers fade-in" style={{ fontSize: "20px", fontWeight: "normal" }}>
                                    Total Amount Payable: ₹{totalPayment.toFixed(2)}
                                </h5> */}
                <h5
                  style={{
                    textAlign: "left",
                    marginTop: "20px",
                    marginBottom: "0px",
                  }}
                >
                  <div className="emi-details">
                    <span>Your Monthly EMI is</span>
                    <span style={{ color: "#FFDB58" }}>
                      ₹ {new Intl.NumberFormat("en-IN").format(emi.toFixed(0))}
                    </span>
                  </div>
                  <div className="emi-details">
                    <span>Total Payable Amount is</span>
                    <span style={{ color: "#FFDB58" }}>
                      ₹{" "}
                      {new Intl.NumberFormat("en-IN").format(
                        totalPayment.toFixed(0)
                      )}
                    </span>
                  </div>
                  <div className="emi-details">
                    <span>Total Interest is</span>
                    <span style={{ color: "#FFDB58" }}>
                      ₹{" "}
                      {new Intl.NumberFormat("en-IN").format(
                        totalInterest.toFixed(0)
                      )}
                    </span>
                  </div>
                  <br />
                </h5>
                <div className="pie-chart-container">
                  <div className="text-header">
                    <div>
                      {loanAmount === 0 ? (
                        <>
                          {/* <div className="interestAndPay">
                            <h5
                              className="fade-in"
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                                textAlign: "center",
                                marginLeft: "0px",
                              }}
                            >
                              Loan Amount: ₹ {loanAmount.toFixed(0)}
                            </h5>
                            <div className="vlCalci"></div>
                            <h5
                              className="fade-in"
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                                textAlign: "center",
                              }}
                            >
                              Rate of Interest: {roi.toFixed(0)}%
                            </h5>
                          </div> */}
                          <div style={{ display: "flex" }}>
                            <PieChart
                              className="pie"
                              data={[
                                {
                                  title: "Interest",
                                  value: 0.1,
                                  color: "#0d6efd",
                                }, //big part
                                {
                                  title: "Principal",
                                  value: 0,
                                  color: "#052c65",
                                },
                              ]}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {/* <div className="interestAndPay">
                            <h5
                              className="fade-in"
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                                textAlign: "center",
                              }}
                            >
                              Loan Amount: ₹ {loanAmount.toFixed(0)}
                            </h5>
                            <div className="vlCalci"></div>
                            <h5
                              className="fade-in"
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                                textAlign: "center",
                              }}
                            >
                              Rate of Interest: {roi.toFixed(0)}%
                            </h5>
                          </div> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <PieChart
                              className="pie"
                              data={[
                                {
                                  title: "Interest",
                                  value: totalInterest,
                                  color: "#ffff",
                                },
                                {
                                  title: "Principal",
                                  value: loanAmount,
                                  color: "#0d6efd",
                                },
                              ]}
                            />
                          </div>
                        </>
                      )}
                      <div className="colors">
                        <div>
                          <span className="lightBlue"></span>
                          <span className="legendText">
                            Loan Amount:{" "}
                            {new Intl.NumberFormat("en-IN").format(
                              loanAmount.toFixed(0)
                            )}
                          </span>
                        </div>
                        <div style={{ display: "block" }}>
                          <span className="whiteBox"></span>
                          <span className="legendText">
                            {" "}
                            Interest Amount:{" "}
                            {new Intl.NumberFormat("en-IN").format(
                              totalInterest.toFixed(0)
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="applyNowContainerMobile">
          <button className="applyNow">
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Apply Now
            </Link>
          </button>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-sm-10">
            <p>&nbsp;</p>
            <h1>What is a Personal Loan EMI calculator?</h1>
            <p className="aboutEmi">
              A Personal Loan EMI (Equated Monthly Installment) calculator is an
              online tool that helps you estimate the monthly installments you
              would need to pay if you take a personal loan. The EMI is the
              fixed payment amount made by a borrower to a lender at a specified
              date each calendar month. This installment includes both the
              principal and the interest components of the loan.
            </p>
            <br />
            <h2 style={{ marginLeft: "10px" }}>
              Key Features and Components of a Personal Loan EMI Calculator
            </h2>
            <ul>
              <li className="EmiElements">
                <strong>Loan Amount:</strong> The total amount of money
                borrowed.
              </li>
              <li className="EmiElements">
                <strong>Interest Rate:</strong> The rate at which interest is
                charged on the loan amount.
              </li>
              <li className="EmiElements">
                <strong>Loan Tenure: </strong>The duration over which the loan
                will be repaid, usually expressed in months or years.
              </li>
              <li className="EmiElements">
                <strong>EMI = </strong>
                <span>
                  P × r × (1 + r)<sup>n</sup>
                </span>
                <span> / </span>
                <span>
                  (1 + r)<sup>n</sup> - 1
                </span>
              </li>
            </ul>
            <p>&nbsp;</p>
            <h2
              style={{ marginLeft: "10px", fontWeight: 400, fontSize: "20px" }}
            >
              Where:
            </h2>
            <ul>
              <li className="EmiElements">P is the principal loan amount</li>
              <li className="EmiElements">
                R is the monthly interest rate (annual rate divided by 12)
              </li>
              <li className="EmiElements">N is the loan tenure in months</li>
            </ul>
            <p>&nbsp;</p>
            <h2 style={{ marginLeft: "10px" }}>
              Benefits of Using a Personal Loan EMI Calculator
            </h2>
            <ul>
              <li className="EmiElements">
                <strong>Financial Planning:</strong>Helps you plan your finances
                better by giving you a clear idea of your monthly outflow.
              </li>
              <li className="EmiElements">
                <strong>Comparison:</strong>Allows you to compare different loan
                offers by changing the loan amount, tenure, and interest rate.
              </li>
              <li className="EmiElements">
                <strong>Time-Saving:</strong>Quickly gives you accurate EMI
                figures without needing manual calculations.
              </li>
              <li className="EmiElements">
                <strong>Interest and Principal Breakdown:</strong> Some
                calculators provide a detailed breakdown of the interest and
                principal repaid over the tenure of the loan.
              </li>
            </ul>

            <h2 style={{ marginLeft: "10px" }}>
              {" "}
              How to Use a Personal Loan EMI Calculator
            </h2>
            <ul>
              <li className="EmiElements">
                Enter the Loan Amount: Input the total amount you wish to
                borrow.
              </li>
              <li className="EmiElements">
                Enter the Interest Rate: Input the annual interest rate offered
                by the lender.
              </li>
              <li className="EmiElements">
                Enter the Loan Tenure: Input the period over which you plan to
                repay the loan.
              </li>
              <li className="EmiElements">
                Calculate: Click on the calculate button to get the EMI amount.
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className="aboutEmi">
              Overall, a Personal Loan EMI calculator is a useful tool for
              anyone looking to understand their repayment obligations and make
              informed borrowing decisions.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Calculator;
