import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calculator.css";
import "./calculatorTablet.css";
import "./calculatorMobile.css";
import "./calculatorSmallMobile.css";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import SEO from "../../../Components/SEO/SEO";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import { Tooltip } from "../../../Components/Tooltip";
import TableHelper from "./TableHelper";

// Function to format number to Indian currency style
export const formatToIndianCurrency = (number) => {
  return number.toLocaleString("en-IN");
};

function calculateMidpointAngleForSegment(data, index) {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
  let startAngle = 0;

  for (let i = 0; i < index; i++) {
    startAngle += (data[i].value / totalValue) * 360; // Convert proportion to degrees
  }

  const segmentAngle = (data[index].value / totalValue) * 360;
  const midpointAngle = startAngle + segmentAngle / 2;

  return midpointAngle;
}

const Calculator = (props) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [roi, setROI] = useState(12);
  const [tenure, setTenure] = useState(12);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChangeLoanAmount = (event) => {
    // Convert formatted string back to number before setting state
    // Remove non-numeric characters except commas, then remove commas
    const inputValue = Number(event.target.value.replace(/[^\d]/g, ""));
    const value = inputValue > 500000 ? 500000 : inputValue;
    setLoanAmount(value);
  };

  const handleChangeROI = (event) => {
    const input = event.target;
    const oldVal = roi;
    const newVal = input.value;
    const regex = new RegExp(input.pattern, "g");

    if (Number(newVal) > 120) {
      setROI(120);
    } else if (regex.test(newVal)) {
      setROI(newVal); // Update only if new value matches the pattern
    } else {
      setROI(oldVal); // Revert to old value if new value does not match
    }
  };

  const handleChangeTenure = (event) => {
    const inputValue = Number(event.target.value.replace(/[^\d]/g, ""));
    const value = inputValue > 72 ? 72 : inputValue;
    setTenure(value);
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

      setEmi(emiValue);
      setTotalInterest(totalInterestValue);
      setTotalPayment(totalPaymentValue);
    } else {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayment(0);
    }
  }, [loanAmount, roi, tenure]);

  //   glow on inactivity

  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    let idleTimer = null;

    const resetTimer = () => {
      setIsGlowing(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsGlowing(true), 20000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, []);

  // hover on piechart
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverTimeoutId, setHoverTimeoutId] = useState(10000);

  const pieChartData = [
    {
      title: "Interest",
      value: totalInterest,
      color: "#fff",
    },
    {
      title: "Principal",
      value: loanAmount,
      color: "#199cdb",
    },
  ];
  const handleMouseOver = (_, index) => {
    // Clear any existing timeout to prevent it from resetting hoveredIndex prematurely
    if (hoverTimeoutId) {
      clearTimeout(hoverTimeoutId);
    }

    // Immediately set the hovered index
    setHoveredIndex(index);

    // Set a new timeout to reset the hovered index after 3 seconds
    const timeoutId = setTimeout(() => {
      setHoveredIndex(null);
    }, 1200); // 3000 milliseconds = 3 seconds

    // Store the timeout ID so it can be cleared if necessary
    setHoverTimeoutId(timeoutId);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutId) {
        clearTimeout(hoverTimeoutId);
      }
    };
  }, [hoverTimeoutId]);

  return (
    <>
      <Header routePath={props.routePath} />
      <SEO
        title="Calculator | Personal loan EMI Calculator | CreditMitra"
        description="Calculate your personal loan EMI effortlessly with CreditMitra's easy-to-use EMI Calculator. Get accurate monthly payment estimates and plan your finances better."
        keywords="personal loan, EMI calculator, loan calculator, CreditMitra, monthly payment estimate, loan EMI, finance planning, loan repayment, easy loan calculator"
        name="CreditMitra"
        type="Personal Loan EMI Calculator"
      />
      <h3
        className="text-xl font-semibold mb-4 loan-calc-heading"
        style={{ marginTop: "100px" }}
      >
        Personal Loan EMI Calculator
      </h3>
      <section>
        <div className="calculator-card">
          <div className="row">
            <div className="col-sm-6">
              <div className={`slider-container ${isGlowing ? "glow" : ""}`}>
                <div className="input-section mb-4">
                  <div className="text-and-input d-flex align-items-center">
                    <h4 className="headers mb-0 mr-2">
                      <Tooltip text="The principal (P) taken from the lender.">
                        Loan Amount{" "}
                      </Tooltip>
                    </h4>

                    <div className="input-wrapper-principle">
                      <input
                        type="text"
                        min="0"
                        max="500000"
                        step="1000"
                        value={formatToIndianCurrency(loanAmount)}
                        onChange={handleChangeLoanAmount}
                        className="form-cc no-spinner uniform-width border-subtle-blue"
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
                      <Tooltip text="Rate of Interest calculated annually.">
                        Rate of Interest
                      </Tooltip>
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
                    <div className="input-wrapper">
                      <input
                        type="text"
                        min="1"
                        max="120"
                        pattern="^\d*(\.\d{0,2})?$"
                        step="0.25"
                        value={roi}
                        onChange={handleChangeROI}
                        className="form-cc no-spinner uniform-width border-subtle-blue"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="120"
                    step="0.25"
                    value={roi}
                    onChange={handleChangeROI}
                    className="form-range-slider"
                  />
                </div>

                <div className="input-section mb-4">
                  <div className="text-and-input d-flex align-items-center">
                    <h4 className="headers mb-0 mr-2">
                      {" "}
                      <Tooltip text="The time in months by which the whole amount should be repaid.">
                        Tenure (in months)
                      </Tooltip>
                    </h4>
                    <input
                      type="text"
                      min="3"
                      max="72"
                      value={tenure}
                      onChange={handleChangeTenure}
                      className="form-cc no-spinner uniform-width border-subtle-blue"
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
                    to="https://creditmitra.cloudbankin.com/onboard/#/login"
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
                <div
                  className="emi-details-container"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  <div className="emi-details">
                    <span className="emi-left">Your Monthly EMI</span>
                    <span className="emi-right">
                      ₹ {new Intl.NumberFormat("en-IN").format(emi.toFixed(0))}
                    </span>
                  </div>
                  <div className="emi-details">
                    <span className="emi-left">Total Payable Amount</span>
                    <span className="emi-right">
                      ₹{" "}
                      {new Intl.NumberFormat("en-IN").format(
                        totalPayment.toFixed(0)
                      )}
                    </span>
                  </div>
                  <div className="emi-details">
                    <span className="emi-left">Total Interest</span>
                    <span className="emi-right">
                      ₹{" "}
                      {new Intl.NumberFormat("en-IN").format(
                        totalInterest.toFixed(0)
                      )}
                    </span>
                  </div>
                </div>
                <div className="pie-chart-container">
                  <div className="text-header">
                    <div>
                      {loanAmount === 0 ? (
                        <>
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
                                  value: 0.1,
                                  color: "#fff",
                                },
                                {
                                  title: "Principal",
                                  value: 0,
                                  color: "#199cdb",
                                },
                              ]}
                              lineWidth={40}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <PieChart
                              className="pie"
                              data={pieChartData}
                              lineWidth={40}
                              label={
                                ({ dataEntry, dataIndex }) =>
                                  hoveredIndex === dataIndex
                                    ? `₹${dataEntry.value.toFixed(0)}`
                                    : "" // Step 5
                              }
                              labelStyle={{
                                fontSize: "5px",
                                fontFamily: "sans-serif",
                                fill: "#fff",
                              }}
                              segmentsStyle={(index) => {
                                const midpointAngle =
                                  calculateMidpointAngleForSegment(
                                    pieChartData,
                                    index
                                  );
                                // Convert midpoint angle to radians and calculate translation or transformation based on it
                                // For example, to translate away from the center based on the midpoint angle
                                const angleRadians =
                                  midpointAngle * (Math.PI / 180);
                                const distance =
                                  index === hoveredIndex ? 10 : 0;
                                const translateX =
                                  distance * Math.cos(angleRadians);
                                const translateY =
                                  distance * Math.sin(angleRadians);

                                return {
                                  cursor: "pointer",
                                  transition: "transform 0.3s ease-out",
                                  transform: `translate(${translateX}px, ${translateY}px) `,
                                };
                              }}
                              onMouseOver={handleMouseOver}
                            />
                          </div>
                        </>
                      )}
                      <div className="colors">
                        <div>
                          <div className="lightBlue"></div>
                          <div className="legendText">
                            Loan Amount
                            <span className="legendValue">
                              :{" "}
                              {new Intl.NumberFormat("en-IN").format(
                                loanAmount.toFixed(0)
                              )}
                            </span>
                          </div>
                        </div>
                        <div style={{ display: "block" }}>
                          <div className="whiteBox"></div>
                          <div className="legendText">
                            {" "}
                            Total Interest
                            <span className="legendValue">
                              :{" "}
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
        </div>
        <div className="applyNowContainerMobile">
          <button className="applyNow">
            <Link
              to="https://creditmitra.cloudbankin.com/onboard/#/login"
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
            <TableHelper
              principal={loanAmount}
              roiAnnualyPercent={roi}
              tenureMonthly={tenure}
            ></TableHelper>
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
            <h2
              style={{ marginLeft: "10px", fontWeight: 400, fontSize: "20px" }}
            >
              Where:
            </h2>
            <ul>
              <li className="EmiElements">P is the principal loan amount</li>
              <li className="EmiElements">
                r is the monthly interest rate (annual rate divided by 12)
              </li>
              <li className="EmiElements">n is the loan tenure in months</li>
            </ul>
            <p>&nbsp;</p>
            <h2 style={{ marginLeft: "10px" }}>
              Benefits of Using a Personal Loan EMI Calculator
            </h2>
            <ul>
              <li className="EmiElements">
                <strong>Financial Planning: </strong>Helps you plan your
                finances better by giving you a clear idea of your monthly
                outflow.
              </li>
              <li className="EmiElements">
                <strong>Comparison: </strong>Allows you to compare different
                loan offers by changing the loan amount, tenure, and interest
                rate.
              </li>
              <li className="EmiElements">
                <strong>Time-Saving: </strong>Quickly gives you accurate EMI
                figures without needing manual calculations.
              </li>
              <li className="EmiElements">
                <strong>Interest and Principal Breakdown: </strong> Some
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
