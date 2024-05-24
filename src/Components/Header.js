import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Toggle from "../assets/images/toggle.png";
import "./Header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [disableBackground, setDisableBackground] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
    setDisableBackground(true);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const products = [
    { name: "Instant Personal Loan", redirection: "/instant-personal-loan-online" },
    { name: "Personal Loan for Salaried", redirection: "/personal-loan-for-salaried" },
    { name: "Wedding Loan", redirection: "/marriage-loan" },
    { name: "Travel Loan", redirection: "/travel-loan" },
    { name: "Medical Loan", redirection: "/medical-loan" },
    { name: "Emergency Loan", redirection: "/emergency-loan" },
  ];

  const navigations = [
    { displayName: "Home", redirection: "/" },
    { displayName: "Products", redirection: "/products" },
    { displayName: "About Us", redirection: "/about" },
    { displayName: "Responsible Lending", redirection: "/responsibleLending" },
    { displayName: "Contact", redirection: "/contact" },
    { displayName: "FAQ", redirection: "/faq" },
  ];

  return (
    <div className="navbar-dad" style={{display:"flex"}}>
    <nav
      style={{ color: "white", display:"flex"}}
      className={`navbar navbar-expand-lg navbar-light fixed ${
        disableBackground ? "" : "custom-background"
      }`}
    >
      {/* CM Image Link */}
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => {
          setDisableBackground(false);
          setIsNavOpen(false);
        }}
      >
        <img
          className="nav-logo-creditmitra"
          style={{ width: 180 }}
          src={Logo}
          title="Credit mitra"
          alt="Credit mitra"
        />
      </Link>
      {/* Image ends here */}

      {/* We can add x on toggle */}
      <button className="navbar-toggler" type="button" onClick={handleNavToggle}>
        <img src={Toggle} alt="Toggle" />
      </button>
      {/* Toggle Ends here */}


      {/* Navbar Items Collapsible begins */}
      <div className={`navbar-container collapse navbar-collapse  ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav">
          {navigations.map((item, index) => (
            <li className="nav-item" key={index}>
              {item.displayName === "Products" ? (
                // if item is Products
                <div
                  ref={dropdownRef}
                  className="dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <hr className="nav-item-seperator"/>

                  <div className="nav-item-container">
                    <Link
                      // This links to /products
                      to={item.redirection}
                      className={`nav-link dropdown-toggle ${
                        // if url is already /products or /products/*, then 'active' class will be added
                        location.pathname.startsWith("/products") ? "active" : ""
                      }`}
                      // title is product
                      title={item.displayName}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen ? "true" : "false"}
                      // activated products, will give white color
                      style={{ color: "white"}} 
                      onClick={handleDropdownToggle}
                    >
                      {/*  display "Products" */}
                      {item.displayName}
                    </Link>
                  </div>

                  {/* dropdown for product */}
                  <div
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                  >
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        className="dropdown-item"
                        to={product.redirection}
                        onClick={closeDropdown}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  {/* dropdown for products ends */}
                </div>
              ) : (
                // else part of ternary operator, if item.displayName != "Products"
                <>
                <hr className="nav-item-seperator"/>
                <div className="nav-item-container"> 
                  <Link
                    to={item.redirection}
                    // if url is already /itemname then 'active' class will be added
                    className={`nav-link ${
                      item.redirection === location.pathname ? "active" : ""
                    }`}
                    title={item.displayName}
                    onClick={handleLinkClick}
                  >
                    {/* not products */}
                    {item.displayName}
                  </Link>

                </div>
                </>
              )}
            </li>
          ))}
          <button className="nav-btn btn brand-secondary lg">Login</button>
        <button className="nav-btn btn brand-primary lg">Download</button>
        </ul>
        {/* Navbar Items here */}
        

      </div>
      {/* Navbar Items Collapsible ends */}
    </nav>
    </div>
  );
}

export default Header;
