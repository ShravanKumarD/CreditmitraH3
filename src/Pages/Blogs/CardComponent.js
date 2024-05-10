import React from 'react';

const CardComponent = ({ title, date, imageLink }) => (
  <div className='row'>
    <div>
      <div className='col-sm-2'>
        <div className='col-md-3 blogcard'>
          <div className='feature-card'>
            <img src={imageLink} alt={title} />
            <h5>{title}</h5>
            <p className='datefaq'>{date}</p>
          </div>
        </div>

      </div>
    </div>

  </div>
);

export default CardComponent;
