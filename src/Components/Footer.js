import React from 'react';
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';
import FooterImg from "../assets/images/footer-globe.png"

function Footer(props) {
    function getFooterNavLinks(){
        const links=[
        {
            heading: "Products",
            navLinks: [
                {displayName: "Instant Personal Loan", redirectTo: "/"}
            ]
        },
        {
            heading: "Our Company",
            navLinks: [
                {displayName: "About us", redirectTo: "/"},
                {displayName: "We are hiring", redirectTo: "/"},
                {displayName: "Digital Lending Partners", redirectTo: "/"}
            ]
        },
        {
            heading: "Legal",
            navLinks: [
                {displayName: "Terms & Conditions", redirectTo: "/"},
                {displayName: "Privacy Policy", redirectTo: "/"},
                {displayName: "Grieviance Redressal", redirectTo: "/"}
            ]
        },
        {
            heading: "Categories",
            navLinks: [
                {displayName: "Contact us", redirectTo: "/"},
                {displayName: "About us", redirectTo: "/"},
                {displayName: "Responsible lending", redirectTo: "/"},
                {displayName: "FAQ", redirectTo: "/"},
                {displayName: "Blog", redirectTo: "/"}
            ]
        },
    ];
        return(
            links.map((each)=>{
                return(
                    <div>
                         <h6>{each.heading}</h6>
                            <ul>
                                {each.navLinks.map((eachNav)=>{
                                    return<>
                                    <li>
                                        <Link to={eachNav.redirectTo} title={eachNav.displayName}>{eachNav.displayName}</Link>
                                    </li>
                                    </>
                                })}
                            </ul>
                    </div>
                )
            })
        )
    }
    return (
        <footer >
            <div className='footer-section'>
                <img src={FooterImg} className='footer-globe img-fluid' />
                <div className='footer-content'>
                    <div className='footer-container'>
                        <div className='w-25'>
                            <img src={Logo} className='img-fluid mb-3' />
                            <p>Welcome to CreditMitra Your Gateway to Financial Empowerment! At CreditMitra, Navigate through our user-friendly platform to access a range of credit solutions tailored to your needs.</p>
                        </div>
                        <div className='w-75 navigation-container'>
                           {getFooterNavLinks()}
                        </div>
                    </div>
                    <p className='copyright-text'>© 2024 CreditMitra —All Rights are Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;