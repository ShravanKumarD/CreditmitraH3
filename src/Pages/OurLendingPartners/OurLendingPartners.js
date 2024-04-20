import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function OurLendingPartners(props) {
    return (
        <>
        <Header routePath={props.routePath}/>
        <section>
            <div className='page-container lending-partners'>
                <div className='lendingpartners-section'>
                    <div className="content">
                       <h6 className='heading'>Our Lending Partners</h6>
                       <p className='caption'>CreditMitra is acting as a Digital Lending Platform on behalf of the following RBI Registered NBFC</p>
                        <div className='company-container'>
                            <h6>VENUS BARTER</h6>
                            <p>Venus Barter Private Limited</p>
                            <div className='website-text'>
                                Website:<br/>
                                Email: venusbarterpvtltd1994@gmail.com<br/>Phone: 9666042345
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    </>
    );
}

export default OurLendingPartners;