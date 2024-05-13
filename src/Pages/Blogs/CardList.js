  import React from "react";

  const CardList = ({ cards }) => (
    <div className="blog-container" style={{display:"flex", flexWrap: "wrap", justifyContent: "space-around"
  }}>
      {cards.map((card, index) => (
        <div key={index} className="blog-item">
          <div className="blog-card">
            <div className="feature-card">
              <img style={{width: "100%"}} src={card.imageLink} alt={card.title} />
              <h5 className="blog-feature-title">{card.title}</h5>
              <p className="datefaq">{card.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  export default CardList;
