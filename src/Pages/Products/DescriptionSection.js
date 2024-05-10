import React from 'react';

function DescriptionSection(props) {
    return (
        <div className={`${props.className ?props.className : "" } description-section`}>
            <div className='content'>
                <h6>{props.heading}</h6>
                <ol>
                    {props.points.map((each)=>{
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