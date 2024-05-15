import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Toggle from "../assets/images/toggle.png";

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
    { name: "Instant Personal Loan", redirection: "/InstantPersonalLoan" },
    { name: "Personal Loan for Salaried", redirection: "/PersonalLoanforSalaried" },
    { name: "Wedding Loan", redirection: "/WeddingLoan" },
    { name: "Travel Loan", redirection: "/TravelLoan" },
    { name: "Medical Loan", redirection: "/MedicalLoan" },
    { name: "Emergency Loan", redirection: "/EmergencyLoan" },
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
    <nav
      style={{ color: "white" }}
      className={`navbar navbar-expand-lg navbar-light fixed ${
        disableBackground ? "" : "custom-background"
      }`}
    >
      <Link
        className="navbar-brand"
        to="/"
        onClick={() => {
          setDisableBackground(false);
          setIsNavOpen(false);
        }}
      >
        <img
          className="img-fluid-logo"
          style={{ width: 180 }}
          src={Logo}
          title="Credit mitra"
          alt="Credit mitra"
        />
      </Link>
      <button className="navbar-toggler" type="button" onClick={handleNavToggle}>
        <img src={Toggle} alt="Toggle" />
      </button>

      <div className={`collapse navbar-collapse  ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav mr-auto">
          {navigations.map((each, index) => (
            <li className="nav-item" key={index}>
              {each.displayName === "Products" ? (
                <div
                  ref={dropdownRef}
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={each.redirection}
                    className={`nav-link dropdown-toggle ${
                      location.pathname.startsWith("/products") ? "active" : ""
                    }`}
                    title={each.displayName}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen ? "true" : "false"}
                    style={{ color: "white",}} 
                    onClick={handleDropdownToggle}
                  >
                    {each.displayName}
                  </Link>
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
                </div>
              ) : (
                <Link
                  to={each.redirection}
                  className={`nav-link ${
                    each.redirection === location.pathname ? "active" : ""
                  }`}
                  title={each.displayName}
                  onClick={handleLinkClick}
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {each.displayName}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button className="btn brand-secondary lg">Login</button>
      </div>
    </nav>
  );
}

export default Header;
