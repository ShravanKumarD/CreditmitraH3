import React from "react";
import "./page404.css";
import GIF404 from "../../assets/images/404Images/404_page.gif";
import Img404 from "../../assets/images/404Images/404_3d_graphic_2.svg";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404-container">
      <Header />
      <div className="page404">
        <div className="content404">
          <p className="para404">Uh oh... Something went wrong!</p>
          <div className="gif404-container">
            {/* <img className="gif404" src={GIF404} alt="404" /> */}
            <img className="gif404" src={Img404} alt="404" />
          </div>
          <div className="para404">
            <span className="bottomPara404">We are here for you though.</span>
          </div>
        </div>
        <div className="links404">
          <Link to="/">Home</Link>
          <span className="space404">|</span>
          <Link to="/contact">Contact</Link>
          <span className="space404">|</span>
          <Link to="/instant-personal-loan-online">Personal Loans</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
