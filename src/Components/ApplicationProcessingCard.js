import React from 'react';

function ApplicationProcessingCard(props) {
    return (
        <div className='application-process-card'>
                <div className='content'>
                    <div className='list-number'><span>{props.orderNo}</span></div>
                    {props.heading && <h6>{props.heading}</h6>}
                    <p>{props.description}</p>
                </div>
            </div>
    );
}

export default ApplicationProcessingCard;