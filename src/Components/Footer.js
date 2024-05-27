import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import FooterImg from "../assets/images/footer-globe.png";
import SocialComponentsDesktop from './SocialComponents/SocialComponentsDesktop';
import './SocialComponents/SocialComponents.css';
import SocialComponentsMobile from './SocialComponents/SocialComponentsMobile';
import './../Components/PersonalsLoansDropDown/InstantPersonalLoansByLocation.css'

function Footer(props) {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location.displayName);
        setIsDropdownOpen(false);
    };

    const locations = [
        { displayName: "Hyderabad", redirectTo: "/instant-personal-loan-hyderabad" },
        { displayName: "Mumbai", redirectTo: "/instant-personal-loan-mumbai" },
        { displayName: "Bangalore", redirectTo: "/instant-personal-loan-Bangalore" }
    ];

    const links = [
        {
            heading: "Products",
            navLinks: [
                { displayName: "Instant Personal Loan", redirectTo: "/products" },
                { displayName: "Instant Personal Loans By Location", isDropdown: true }
            ]
        },
        {
            heading: "Our Company",
            navLinks: [
                { displayName: "About us", redirectTo: "/about" },
                { displayName: "We are hiring", redirectTo: "/" },
                { displayName: "Digital Lending Partners", redirectTo: "/ourLendingPartners" }
            ]
        },
        {
            heading: "Legal",
            navLinks: [
                { displayName: "Terms & Conditions", redirectTo: "/termsAndConditions" },
                { displayName: "Privacy Policy", redirectTo: "/privacypolicy" },
                { displayName: "Grievance Redressal", redirectTo: "/grievanceredressal" }
            ]
        },
        {
            heading: "Categories",
            navLinks: [
                { displayName: "Contact us", redirectTo: "/contact" },
                { displayName: "About us", redirectTo: "/about" },
                { displayName: "Responsible lending", redirectTo: "/responsibleLending" },
                { displayName: "FAQ", redirectTo: "/faq" },
                { displayName: "Blog", redirectTo: "/blogs" }
            ]
        },
    ];

    const getFooterNavLinks = () => {
        return links.map((each) => (
            <div key={each.heading}>
                <h6>{each.heading}</h6>
                <ul>
                    {each.navLinks.map((eachNav) => (
                        <li key={eachNav.displayName}>
                            {eachNav.isDropdown ? (
                               <div className="dropdown">
                               <button
                                   className="btn dropdown-toggle dropdown-toggleFooter"
                                   type="button"
                                   onClick={handleDropdownToggle}>
                                   { 'Loans By Location'}
                                   <img
                                    //    src="path-to-arrow-image.png"
                                    //    alt="Arrow"
                                       style={{ marginLeft: '10px', }}
                                   />
                               </button>
                               {isDropdownOpen && (
                                   <ul className="dropdown-menu custom-dropdown-menu show">
                                       {locations.map((location) => (
                                           <li
                                               key={location.displayName}
                                               onClick={() => handleLocationSelect(location)}
                                               className="custom-dropdown-item"
                                           >
                                               <Link to={location.redirectTo} className="dropdownFooter-item">
                                                   {location.displayName}
                                               </Link>
                                           </li>
                                       ))}
                                   </ul>
                               )}
                           </div>
                            ) : (
                                <Link to={eachNav.redirectTo} title={eachNav.displayName}>
                                    {eachNav.displayName}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <footer>
            <div className='footer-section'>
                <img src={FooterImg} className='footer-globe img-fluid' alt="Footer Globe" />
                <div className='footer-content'>
                    <div className='footer-container row'>
                        <div className='col-sm-4'>
                            <img src={Logo} className='img-fluid mb-3' alt="Logo" />
                            <p className='pinFooter'>
                                Welcome to CreditMitra, Your Gateway to Financial Empowerment! At CreditMitra, you can
                                Navigate through our user-friendly platform to access a range of credit solutions tailored to your needs.
                            </p>
                            <SocialComponentsDesktop />
                        </div>
                        <div className='col-sm-4 navigation-container'>
                            {getFooterNavLinks()}
                        </div>
                    </div>
                    <SocialComponentsMobile />
                    <p className='copyright-text'>© 2024 CreditMitra — All Rights are Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
