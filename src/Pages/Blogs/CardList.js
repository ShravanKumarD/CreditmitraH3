import React from "react";
import CardComponent from "./CardComponent"; 

const CardList = ({ cards }) => (
  <div>
    {cards.map((card, index) => (
      <CardComponent
        key={index}
        title={card.title}
        date={card.date}
        imageLink={card.imageLink}
      />
    ))}
  </div>
);

export default CardList;
