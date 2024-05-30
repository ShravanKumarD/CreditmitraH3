import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
import './../HiringPages/wearehiring.css';

const WeAreHiring = (props) => {
    const [selectedOption, setSelectedOption] = useState('');
    const options = [
        { value: 'all', label: 'All' },
        { value: 'development', label: 'Development' },
        { value: 'design', label: 'Design' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'finance', label: 'Finance' },
        { value: 'customer_service', label: 'Customer Service'},
    ];

    const jobPosts = [
        {
            Designation: "Product Designer",
            headLine: "We're looking for a mid-level product designer to join our team",
            modes: ["Remote", "Full Time"],
        },
        {
            Designation: "Software Developer",
            headLine: "We're looking for a senior developer to join our team.",
            modes: ["Remote", "Full Time"],
        },
        {
            Designation: "Graphic Designer",
            headLine: "We're looking for a mid-level designer to join our team.",
            modes: ["Remote", "Full Time"],
        },
        {
            Designation: "Junior Accountant",
            headLine: "We're looking for a mid-level accountant to join our team.",
            modes: ["Remote", "Full Time"],
        },
    ];

    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
    };

    const Categories = ({ options }) => {
        return (
            <div className="list-row">
                {options.map((option, index) => (
                    <div key={index} className="list-item">
                        {option.label}
                    </div>
                ))}
            </div>
        );
    };

    const RenderJobPosts = ({ jobPosts }) => {
        return (
            <div className='job-list'>
                {
                    jobPosts.map((job, index) => (
                        <div key={index} className='job-card'>
                            <div className='designation'>{job.Designation}</div>
                            <div className='head-line'>{job.headLine}</div>
                            <div className='modes'>
                                {job.modes.map((mode, modeIndex) => (
                                    <span key={modeIndex} className='mode'>{mode}</span>
                                ))}
                            </div>
                            <div  className='hl'></div>
                        </div>
                    ))
                }
                
            </div>
        );
    };

    return (
        <>
            <Header routePath={props.routePath} />
            <div className="page-container about-us">
                <div className='container'>
                    <h1 className="content-heading">Be a Part Of Our Mission</h1>
                    <p className="subHeading">
                        We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
                    </p>
                    <h2 style={{fontSize:"32px",margin:"10px"}}>We're hiring!</h2>
                    <section>
                        <div className="row">
                            <div className="category-container">
                                <Categories options={options} />
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className='job-container'>
                            <RenderJobPosts jobPosts={jobPosts} />

                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WeAreHiring;
