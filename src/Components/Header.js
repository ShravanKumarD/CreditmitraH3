import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [disableBackground, setDisableBackground] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
    setDisableBackground(true);
  };

  const navigations = [
    { displayName: "Home", redirection: "/" },
    { displayName: "Products", redirection: "/products" },
    { displayName: "About Us", redirection: "/about" },
    { displayName: "Responsible Lending", redirection: "/responsibleLending" },
    { displayName: "Contact", redirection: "/contact" },
    { displayName: "FAQ", redirection: "/faq" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${disableBackground ? '' : 'custom-background'}`}>
    <Link className="navbar-brand" to="/" onClick={() => setDisableBackground(false)}>  
        <img
          className="img-fluid"
          style={{ width: 180 }}
          src={Logo}
          title="Credit mitra"
          alt="Credit mitra"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav mr-auto">
          {navigations.map((each, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link
                  to={each.redirection}
                  className={`nav-link ${
                    each.redirection === props.routePath ? "active" : ""
                  }`}
                  title={each.displayName}
                  onClick={handleLinkClick}
                  style={{ marginLeft:'10px' ,color: 'white',
                  ...(each.redirection === props.routePath && { color: 'blue' })
                   }}
                  
                >
                  {each.displayName}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="btn brand-secondary lg">Login</button>
      </div>
    </nav>
  );
}

export default Header;
