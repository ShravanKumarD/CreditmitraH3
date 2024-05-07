import React from 'react';

const CardComponent = ({ title, date, imageLink }) => (
  <div className='row'>
    <div className='col-md-4 blogcard'>
      <div className='feature-card'>
        <img src={imageLink} alt={title} />
        <h5>{title}</h5>
        <p className='datefaq'>{date}</p>
      </div>
    </div>
  </div>
);

export default CardComponent;
