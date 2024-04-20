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
                    <HeroSection />
                    <ApplicationProcess/>
                    <UserFeedback />
                </div>
                <Footer/>
            </section>
        </>
    );
}

export default Home;