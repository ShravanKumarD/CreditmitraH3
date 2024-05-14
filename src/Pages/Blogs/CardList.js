import React from "react";
import { Link } from "react-router-dom";


const CardList = ({ cards }) => (
  <div
    className="featured-blog-container"
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    }}
  >
    {cards.map((card, index) => (
      <div key={index} className="blog-item">
        <div className="blog-card">
          <div className="feature-card">
            <Link to={`/blogs/${card.blogSlug}`} className="feature-blog-link">
              <img
                className="blog-feature-image"
                src={card.imageLink}
                alt={card.title}
              />
              <h5 className="blog-feature-title">{card.title}</h5>
            </Link>
            <p className="datefaq">{card.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CardList;
