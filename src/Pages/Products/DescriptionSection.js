import React from 'react';
import "./VariousPersonalLoans/Products.css";

function DescriptionSection(props) {
    return (
        <div className={`${props.className ?props.className : "" } description-section`}>
            <div className='content'>
                <h6>{props.heading}</h6>
                <ol>
                    {props.points.map((each)=>{
                        return <>
                        <li><strong>{each.split(':')[0]}:</strong>{each.split(':')[1]}</li>
                        </>
                    })}
                </ol>
            </div>
            <div className='img-container'>
                    <img className='' src={props.img} alt='phone img'/>
            </div>
        </div>
    );
}

export default DescriptionSection;