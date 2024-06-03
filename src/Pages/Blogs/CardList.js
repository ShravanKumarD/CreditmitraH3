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
            <p className="blog-feature-date">{card.date}</p>
            <p className="blog-feature-summary">{card.summary}</p>
            <Link to={`/blogs/${card.blogSlug}`} className="read-more-link">
             <p className="blog-feature-readmore">Read More</p>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CardList;
