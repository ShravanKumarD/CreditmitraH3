import React from 'react';
import Header from '../../Components/Header'
import HeroSection from './HeroSection';
import ApplicationProcess from './ApplicationProcess';
import Footer from '../../Components/Footer';
import UserFeedback from './UserFeedback';

function Home(props) {
    return (
        <>
            <Header routePath={props.routePath}/>
            <section>
                <div className='page-container'>
                    <div className='px-3'>
                        <HeroSection />
                        <ApplicationProcess/>
                        <UserFeedback />
                    </div>
                </div>
                <Footer/>
            </section>
        </>
    );
}

export default Home;