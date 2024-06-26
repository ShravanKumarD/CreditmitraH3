import React from "react";
import { useState } from "react";

export const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  // const [hoverVisible, setHoverVisible] = useState(false);
  // const [clickVisible, setClickVisible] = useState(false);

  // // Handle mouse enter and leave for hover
  // const handleMouseEnter = () => setHoverVisible(true);
  // const handleMouseLeave = () => setHoverVisible(false);

  // // Toggle visibility on click
  // const handleClick = () => setClickVisible(!clickVisible);

  // // Determine if the tooltip should be shown
  // const isTooltipVisible = hoverVisible || clickVisible;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {children}{" "}
      <span
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: "lightblue",
          borderRadius: "50%",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "13px",
          cursor: "pointer",
        }}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onClick={handleClick}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        ?
      </span>
      {isVisible && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            // left: "50%",
            // transform: "translateX(-50%)",
            marginBottom: "5px",
            padding: "5px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            zIndex: 100,
            fontSize: "0.8rem",
            width: "max(200px, 100%)",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
