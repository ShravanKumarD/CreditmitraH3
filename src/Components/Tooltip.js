import React from "react";
import { useState } from "react";

export const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
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
