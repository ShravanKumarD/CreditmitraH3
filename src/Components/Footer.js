import React from 'react';
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer >
            <div className='footer-section'>
                <div className='row mx-0'>
                    <div className='col'>
                        <img src={Logo} className='img-fluid' />
                        <p>Welcome to CreditMitra Your Gateway to Financial Empowerment! At CreditMitra, Navigate through our user-friendly platform to access a range of credit solutions tailored to your needs.</p>
                    </div>
                    <div className='col'>
                        <h6>Services</h6>
                        <ul>
                            <li>
                                <Link to={"/"}>Personal Loan</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Personal Loan for salaried</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Purchase On EMI</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Salary on Demand</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;