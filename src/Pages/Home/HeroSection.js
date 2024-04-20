import React from 'react';

function HeroSection(props) {
    return (
        <div className='hero-section'>
            <div className='content'>
                <h6>Your Trusted Loan Mitra<br/>Loans Made Easy & Friendly</h6>
                <p>At Credit mitra, we understand that life doesn't always wait for payday. That's why we're here to offer you instant personal loans with no hassle and no waiting. </p>
                <div className='btn-container'>
                    <buttton className="btn brand-primary py-3 px-4">Apply Now</buttton>
                    <buttton className="btn brand-secondary ml-3 py-3 px-4">Download App</buttton>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;