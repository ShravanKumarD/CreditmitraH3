import React from 'react';

function ApplicationProcessingCard(props) {
    return (
        <div className='application-process-card'>
                <div className='content'>
                    {props.orderNo && <div className='list-number'><div className="light-overlay-number">{props.orderNo}</div></div>}
                    {props.heading && <h6>{props.heading}</h6>}
                    <p className='applicationProcessCard'>{props.description}</p>
                </div>
                 {props.img &&<img className='inmageHome' src={props.img}/>}
            </div>
    );
}

export default ApplicationProcessingCard;