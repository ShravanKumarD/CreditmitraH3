import React, { useEffect, useState } from "react";
import "./wearehiring.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import heroImage from "./../../assets/images/hero-image1.png"
function JobApplications() {
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch('http://3.111.198.234/internal-feed/job-post/getjob');
            if (response.ok) {
                const appliedCandidates = await response.json();
                setData(appliedCandidates);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="job-application-container">
               <img
                    className="easy-loan-main-logo"
                    style={{ width: 180 }}
                    src={Logo}
                    title="CreditMitra"
                    alt="CreditMitra"
                />
            <h1 className="header">Applied Candidates</h1>
            {data.application && (
                <ul>
                    {data.application.map((candidate, index) => (
                        <table >
                              <tbody>
                             <tr>
                             <td className="like-text">{candidate.id}</td>
                             
                                <td className="like-text">{candidate.name}</td>
                                <td className="like-text">{candidate.email}</td>
                                <td className="like-text">{candidate.contact}</td>
                                <td className="like-text"><a href="">{candidate.resume}</a></td>
                                <td className="like-text">{candidate.createdAt.split('T')[0]}</td>
                             </tr>
                             </tbody>
                            </table>
                    ))}
                </ul>
            )}
           

{/* 
<table border="1" cellspacing="0" cellpadding="5">
          <thead>
            <tr>
            <th className="header ">id</th>
                                <th className="like-text">name</th>
                                <th className="like-text">email</th>
                                <th className="like-text">contact</th>
                                <th className="like-text">resume</th>
                                <th className="like-text">createdAt </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Loan facilities</td>
              <td>
                Providing loan facilitation services to you and to fulfill the
                legal compliance on our part as per applicable laws. This data
            
              </td>
            </tr>
            
            <tr>
              <td>9.</td>
              <td>Identifying devices</td>
            </tr>
          </tbody>
        </table> */}
             <section className="section-red">
             <div className="hero-section">
      <div className="content a">
        <h6 className="hero-content">
          Your Trusted Loan Mitra
          <br />
          Loans Made Easy & Friendly
        </h6>
        <p>
          At CreditMitra, we understand that life doesn't always wait for
          payday. That's why we're here to offer you instant personal loans with
          no hassle and no waiting.
        </p>
        <div className="hero-content-button">
          {/* apply now was directing to samcint, now it's redirecting to same page */}
          {/* <Link to="https://creditmitra.cloudbankin.com/onboard/#/login">
            <buttton className="btn brand-primary py-3 px-4 home-apply">Apply Now</buttton>
          </Link> */}
          <buttton className="btn brand-secondary py-3 px-4 home-download">
            Download App
          </buttton>
        </div>
      </div>
      <img
        src={heroImage}
        className="img-home"
        alt="img"
        // loading="lazy"
      />
    </div>          
      </section>
      <section className="section-blue">
     
      </section>
      <section className="section-green">
       
      </section>

        </div>
    );
}

export default JobApplications;
