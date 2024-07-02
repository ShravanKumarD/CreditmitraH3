import React, { useEffect, useState } from 'react';
import './contactusbanner.css';

const FixedBanner = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed-banner ${visible ? 'visible' : ''}`}>
      <div>
        <h1 className='bannerText'>Get Personal Loan Upto ₹2 Lakhs in 5 Minutes   
          <a className="btn btn-primary banner-button" href="https://creditmitra.cloudbankin.com/onboard/#/login">  Apply Now</a></h1>
 
      </div>
    </div>
  );
};

export default FixedBanner;
