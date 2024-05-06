import React from 'react';

const CardComponent = ({ title, date, imageLink }) => (
  <div className="feature-card">
    <img src={imageLink} alt={title} />
    <h3>{title}</h3>
    <p>{date}</p>
  </div>
);

export default CardComponent;
