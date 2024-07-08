import React, { useState } from "react";
import Logo from "../../src/assets/images/logo.png";
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import { Button } from "bootstrap";

export default function EasyLoan() {
    const [text, setText] = useState('');
    const [dob, setDob] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [mobile, setMobile] = useState('')

    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleDateChange = (event) => {
        setDob(event.target.value);
    };

    const handleSelect = (e) => {
        setEmploymentType(e.target.value);
    };
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const processArray = [
        {
            text: "Instant cash up to ₹5 lacs",
            icon: require('./../assets/images/easyloan/money-bag.png')
        },
        {
            text: "Approval in just 2 min",
            icon: require('./../assets/images/easyloan/stopwatch.png')
        },
        {
            text: "No foreclosure charges",
            icon: require('./../assets/images/easyloan/foreclosure.png')
        }
    ]
    const bottomCards = [
        {
            text: "Min Salary ₹18,000 ",
            icon: require('./../assets/images/easyloan/min_sal.png')
        },
        {
            text: "For salaried individuals",
            icon: require('./../assets/images/easyloan/salary.png')
        },
        {
            text: "Age: 21-55 years",
            icon: require('./../assets/images/easyloan/age-res.png')
        }
    ]
    const options = [
        { value: "Salaried", label: "Salaried" },
        { value: "Self-employed", label: "Self-employed" },
        { value: "Student", label: "Student" },
        { value: "Other", label: "Other" },
    ];

    const banner = [
        {
            mainText: "25 Mn+",
            subText: "App downloads",
        },
        {
            mainText: "6 Mn+",
            subText: "Loans given",
        },
        {
            mainText: "₹20,000 Cr+",
            subText: "Money disbursed",
        },
        {
            mainText: "5000+",
            subText: "Partner tie-ups",
        }
    ]
    const rederBottomCards = () => {
        return (
            <div className="top-cards-container">
                {bottomCards.map((item, index) => (
                    <div className="bottom-cards" key={index}>
                        <p className="top-card-text">{item.text}</p>
                        <img src={item.icon} alt="icon" className="top-card-img" />
                    </div>
                ))}
            </div>
        );
    };

    const rederProcessArray = () => {
        return (
            <div className="top-cards-container">
                {processArray.map((item, index) => (
                    <div className="top-cards" key={index}>
                        <p className="top-card-text">{item.text}</p>
                        <img src={item.icon} alt="icon" className="top-card-img" />
                    </div>
                ))}
            </div>
        );
    };
    const renderBanner = () => {
        return (
            <div className="banner-container">
                {banner.map((item, index) => (
                    <div className="banner-elements" key={index}>
                        <div>
                            <h1>{item.mainText}</h1>
                            <p className="pInEasyLoan">{item.subText}</p>
                            {/* <div className="line"></div> */}
                        </div>


                    </div>
                ))}
            </div>
        );
    };


    const Categories = ({ options }) => {
        return (
            <div className="list-row-el">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`hiring-button-el ${employmentType === option.value ? "selected" : ""
                            }`}
                        onClick={() => handleSelect(option.value)}>
                        {option.label}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="easyloan-container">
                <img
                    className="easy-loan-main-logo"
                    style={{ width: 180 }}
                    src={Logo}
                    title="CreditMitra"
                    alt="CreditMitra"
                />
                <p>
    &nbsp;
</p>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Personal loan of up to ₹5 lacs</h1>
                        <p className="pInEasyLoan">We got your cash needs covered. Get approved on Fibe with 3 to 24 month flexible EMI options, minimum documentation, low interest rates starting 12%p.a.* and ZERO foreclosure charges</p>
                        <p>
    &nbsp;
</p>
                        <div>{rederProcessArray()}</div>
                    </div>
<p>
    &nbsp;
</p>
                    <div className="row easyloan-form-container">
    <div className="col-sm-6 el-form">
        <div className="form-group">
            <label htmlFor="firstName" className="fieldName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={text}
                onChange={handleChange}
                placeholder="Enter first name as per PAN"
                className="form-control el-input"
            />
        </div>

        <div className="form-group">
            <label htmlFor="lastName" className="fieldName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={text}
                onChange={handleChange}
                placeholder="Enter last name as per PAN"
                className="form-control el-input"
            />
        </div>

        <div className="form-group">
            <label htmlFor="dob" className="fieldName">Date of Birth</label>
            <input
                type="date"
                id="dob"
                name="dob"
                value={dob}
                onChange={handleDateChange}
                className="form-control el-input"
            />
        </div>

        <div className="form-group">
            <label className="fieldName">Employment Type:</label>
            <div className="category-container">
                <Categories options={options} />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="mobile" className="fieldName">Mobile number</label>
            <input
                type="tel"
                id="mobile"
                name="mobile"
                value={mobile}
                placeholder="Enter 10 digits of number"
                onChange={handleMobileChange}
                className="form-control el-input"
            />
        </div>
        <div className="col-sm-6">
            <button className="btn brand-primary lg">Submit</button>
    </div>
    </div>

   
</div>
<p>
    &nbsp;
</p>
                    <p>
                        &nbsp;
                    </p>

                    <section>
                        <div>{renderBanner()}</div>
                    </section>

                    <p>
                        &nbsp;
                    </p>
                    <section>
                        <h5 style={{ textAlign: "center" }}>Eligibility Criteria</h5>
                        <div>{rederBottomCards()}</div>
                    </section>
                </div>
            </div>
            <p>
                &nbsp;
            </p>
        </>
    )
}