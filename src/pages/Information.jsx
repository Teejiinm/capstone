import React, { useState } from "react";
import { ReactComponent as BlankMap } from "../assets/BlankMongolia.svg";
import "../styles/information.css";

const regionInfo = {
  "region-capital": "Capital",
  "region-central": "Steppe",
  "region-east": "Eastern Steppe",
  "region-north": "Lakes & Forests",
  "region-south": "Gobi Desert",
  "region-southeast": "Semi-desert",
  "region-southwest": "Desert Mountains",
  "region-west": "Altai Mountains",
};

const regionPositions = {
  "region-capital": { top: "295px", left: "530px" },
  "region-central": { top: "360px", left: "400px" },
  "region-east": { top: "310px", left: "650px" },
  "region-north": { top: "220px", left: "480px" },
  "region-south": { top: "460px", left: "520px" },
  "region-southeast": { top: "440px", left: "620px" },
  "region-southwest": { top: "440px", left: "380px" },
  "region-west": { top: "300px", left: "260px" },
};

const Information = () => {
  const [hoverRegion, setHoverRegion] = useState("");

  const handleMouseOver = (e) => {
    const regionClass = Array.from(e.target.classList).find((cls) =>
      cls.startsWith("region-")
    );
    if (regionClass) setHoverRegion(regionClass);
  };

  const handleMouseOut = () => {
    setHoverRegion("");
  };

  return (
    <div className="info-container">
      <h2>Geography of Mongolia</h2>
      <div className="map-wrapper" style={{ position: "relative" }}>
        <BlankMap
          className="mongolia-map"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        {hoverRegion && regionPositions[hoverRegion] && (
          <div
            className={`region-label ${hoverRegion}`}
            style={{
              position: "absolute",
              top: regionPositions[hoverRegion].top,
              left: regionPositions[hoverRegion].left,
              color: "#0056b3",
              fontWeight: "bold",
              fontSize: "14px",
              pointerEvents: "none",
              background: "white",
              padding: "2px 6px",
              borderRadius: "4px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            {regionInfo[hoverRegion]}
          </div>
        )}
      </div>
      <p className="description">
        Mongolia's geography includes vast steppe in the east, deserts in the
        south such as the Gobi, high mountains in the west like the Altai, and
        beautiful lakes in the north like Khövsgöl.
      </p>
    </div>
  );
};

export default Information;
