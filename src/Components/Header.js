import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

function Header(props) {
  const navigations = [
    { displayName: "Home", redirection: "/" },
    { displayName: "Products", redirection: "/products" },
    { displayName: "About Us", redirection: "/about" },
    { displayName: "Responsible Lending", redirection: "/responsibleLending" },
    { displayName: "Contact", redirection: "/contact" },
    { displayName: "FAQ", redirection: "/faq" },
  ];
  return (
    <div className="page-container">
      <div className="align-items-center d-flex justify-content-between py-20">
        <div>
          <Link to="/">
            <img
              className="img-fluid"
              style={{ width: 180 }}
              src={Logo}
              title="Credit mitra"
              alt="Credit mitra"
            />
          </Link>
        </div>
        <div>
          <nav class="navbar navbar-expand-sm header-nav">
            <ul class="navbar-nav">
              {navigations.map((each, index) => {
                return (
                  <li class="nav-item" key={index}>
                    <Link
                      to={each.redirection}
                      className={`${props.routePath == each.redirection ? 'active' : ""} nav-link`}
                      title={each.displayName}
                    >
                      {each.displayName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div>
          <button className="btn brand-secondary lg">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
