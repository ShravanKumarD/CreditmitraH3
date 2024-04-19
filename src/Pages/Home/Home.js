import React from 'react';
import Header from '../../Components/Header'
import HeroSection from './HeroSection';
import ApplicationProcess from './ApplicationProcess';
import Footer from '../../Components/Footer';

function Home(props) {
    return (
        <>
            <Header />
            <section>
                <div className='page-container'>
                    <HeroSection />
                    <ApplicationProcess/>
                    <Footer/>
                </div>
            </section>
        </>
    );
}

export default Home;