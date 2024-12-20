import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function SocialComponentsMobile() {
    return (
        <div className='social-components-mobile'>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '5%', marginTop: '11%', fontFamily: 'Poppins', textAlign: 'left'}}>Follow Us</h3>
            <a href="https://twitter.com/CreditMitra/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} size="2x" style={{marginRight: "5%", color: "#2B6CB0"}} /></a>
            <a href="https://www.instagram.com/creditmitra_official/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" style={{marginRight: "5%", color: "#2B6CB0"}} /></a>
            <a href="https://www.facebook.com/profile.php?id=61554428303586" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight: "5%", color: "#2B6CB0"}} /></a>
            <a href="https://www.linkedin.com/company/creditmitra/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{marginRight: "5%", color: "#2B6CB0"}} /></a>
        </div>
    );
}

export default SocialComponentsMobile;