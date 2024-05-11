  import React from "react";
  // import CardComponent from "./CardComponent"; 
  import './../../styles.css';

  const CardList = ({ cards }) => (
    <div className="grid-container">
      {cards.map((card, index) => (
        <div key={index} className="grid-item">
          <div className="blogcard">
            <div className="feature-card">
              <img src={card.imageLink} alt={card.title} />
              <h5>{card.title}</h5>
              <p className="datefaq">{card.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  export default CardList;
