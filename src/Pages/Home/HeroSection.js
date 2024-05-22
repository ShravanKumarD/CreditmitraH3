import React from 'react';
import heroImage from '../../assets/images/hero-image1.png'
function HeroSection(props) {
    return (
        <div className='hero-section'>
            <div className='content a'>
                <h6 className='hero-content'>Your Trusted Loan Mitra<br/>Loans Made Easy & Friendly</h6>
                <p>At Credit mitra, we understand that life doesn't always wait for payday. That's why we're here to offer you instant personal loans with no hassle and no waiting. </p>
                <div className='hero-content-button'>
                    <buttton className="btn brand-primary py-3 px-4">Apply Now</buttton>
                    <buttton className="btn brand-secondary py-3 px-4">Download App</buttton>
                </div>
            </div>
            <img src={heroImage} className='img-home'/>
        </div>
    );
}

export default HeroSection;