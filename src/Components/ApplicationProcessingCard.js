import React from 'react';

function ApplicationProcessingCard(props) {
    return (
        <div className='application-process-card'>
                <div className='content'>
                    {props.orderNo && <div className='list-number'><span>{props.orderNo}</span></div>}
                    {props.heading && <h6>{props.heading}</h6>}
                    <p>{props.description}</p>
                </div>
                <img  height="370px" src={props.img}/>
            </div>
    );
}

export default ApplicationProcessingCard;