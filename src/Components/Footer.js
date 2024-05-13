import React from 'react';
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import FooterImg from "../assets/images/footer-globe.png";
import SocialComponentsDesktop from './SocialComponents/SocialComponentsDesktop';
import './SocialComponents/SocialComponents.css';
import SocialComponentsMobile from './SocialComponents/SocialComponentsMobile';


function Footer(props) {
    function getFooterNavLinks(){
        const links=[
        {
            heading: "Products",
            navLinks: [
                {displayName: "Instant Personal Loan", redirectTo: "/products"}
            ]
        },
        {
            heading: "Our Company",
            navLinks: [
                {displayName: "About us", redirectTo: "/about"},
                {displayName: "We are hiring", redirectTo: "/"},
                {displayName: "Digital Lending Partners", redirectTo: "/ourLendingPartners"}
            ]
        },
        {
            heading: "Legal",
            navLinks: [
                    {displayName: "Terms & Conditions", redirectTo:"/termsAndConditions"},
                {displayName: "Privacy Policy",  redirectTo:"/privacypolicy"},
                {displayName: "Grieviance Redressal", redirectTo:"/grievienceredressal"}
            ]
        },
        {
            heading: "Categories",
            navLinks: [
                {displayName: "Contact us", redirectTo: "/contact"},
                {displayName: "About us", redirectTo: "/about"},
                {displayName: "Responsible lending", redirectTo: "/responsibleLending"},
                {displayName: "FAQ", redirectTo: "/faq"},
                {displayName: "Blog", redirectTo: "/blogs"}
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
                                        <Link to={eachNav.redirectTo} title={eachNav.displayName} download={eachNav.download} target={eachNav.target}>{eachNav.displayName}</Link>
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
                    <div className='footer-container row'>
                        <div className='col-sm-4'>
                            <img src={Logo} className='img-fluid mb-3' />
                            <p className='pinFooter'>Welcome to CreditMitra Your Gateway to Financial Empowerment! At CreditMitra, Navigate through our user-friendly platform to access a range of credit solutions tailored to your needs.</p>
                            <SocialComponentsDesktop></SocialComponentsDesktop>                        </div>
                        <div className='col-sm-4 navigation-container'>
                           {getFooterNavLinks()}
                        </div>
                    </div>
                    <SocialComponentsMobile></SocialComponentsMobile>
                    <p className='copyright-text'>© 2024 CreditMitra — All Rights are Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;