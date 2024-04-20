import React from 'react';

function SectionHeading(props) {
    return (
        <h6 className={`${props.className} section-heading`}>{props.heading}</h6>
    );
}

export default SectionHeading;