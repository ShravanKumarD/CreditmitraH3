import React from 'react';
import "./VariousPersonalLoans/Products.css";

function DescriptionSection(props) {
    return (
        <div className={`${props.className ?props.className : "" } description-section`}>
            <div className='content'>
                <h6>{props.heading}</h6>
                <ol>
                    {props.points.map((each)=>{
                        console.log(each,"each")
                        return <>
                        <li>{each}</li>
                        </>
                    })}
                </ol>
            </div>
            <div className='img-container'>
                    <img className='' src={props.img} />
            </div>
        </div>
    );
}

export default DescriptionSection;