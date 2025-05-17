import React, { useState } from "react";
import { ReactComponent as BlankMap } from "../assets/BlankMongolia.svg";
import "../styles/information.css";

const weatherData = [
  { month: "Jan", icon: "❄️", temp: "-20°C" },
  { month: "Feb", icon: "❄️", temp: "-17°C" },
  { month: "Mar", icon: "🌬️", temp: "-5°C" },
  { month: "Apr", icon: "🌤️", temp: "5°C" },
  { month: "May", icon: "☀️", temp: "15°C" },
  { month: "Jun", icon: "🌞", temp: "20°C" },
  { month: "Jul", icon: "🌞", temp: "23°C" },
  { month: "Aug", icon: "🌤️", temp: "21°C" },
  { month: "Sep", icon: "🍂", temp: "15°C" },
  { month: "Oct", icon: "🌬️", temp: "5°C" },
  { month: "Nov", icon: "❄️", temp: "-10°C" },
  { month: "Dec", icon: "❄️", temp: "-18°C" },
];

const regionInfo = {
  "region-capital": "Capital – Ulaanbaatar",
  "region-central": "Central Steppe",
  "region-east": "Eastern Steppe",
  "region-north": "Forests and Lakes",
  "region-south": "Gobi Desert",
  "region-southeast": "Semi-desert",
  "region-southwest": "Desert mountains",
  "region-west": "Altai Mountains",
};

const regionColors = {
  "region-capital": "#ff6f61",
  "region-central": "#fbbc04",
  "region-east": "#34a853",
  "region-north": "#4285f4",
  "region-south": "#ea4335",
  "region-southeast": "#f9ab00",
  "region-southwest": "#a142f4",
  "region-west": "#00bfa5",
};

const Information = () => {
  const [hoverRegion, setHoverRegion] = useState("");

  const handleMouseOver = (e) => {
    const regionClass = Array.from(e.target.classList).find((cls) =>
      cls.startsWith("region-")
    );
    if (regionClass) {
      setHoverRegion(regionClass);
    }
  };

  const handleMouseOut = () => {
    setHoverRegion("");
  };

  return (
    <div className="info-container">
      <h2 className="section-title">Weather and Geography</h2>

      <div className="information-container">
        {/* 왼쪽: 날씨 정보 */}
        <div className="weather-section">
          <p className="section-subtitle">Mongolian Weather</p>
          <p className="weather-subtitle">
            Mongolia’s weather has cold winters and warm summers, with clear skies and dry air across steppes, deserts, and mountains.
          </p>
          <div className="weather-grid">
            {weatherData.map((item) => (
              <div className="weather-box" key={item.month}>
                <div className="weather-icon">{item.icon}</div>
                <div className="month">{item.month}</div>
                <div className="temp">{item.temp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽: 지도 섹션 */}
        <div className="map-section">
          <p className="section-subtitle">Mongolian Geography</p>
          <p className="geography-subtitle">
            Mongolia’s terrain ranges from the Gobi Desert in the south to mountainous regions in the west and lush forests and lakes in the north.
          </p>
          <div className="map-wrapper">
            <BlankMap
              className="mongolia-map"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>

          <div className="region-description-list">
            {Object.entries(regionInfo).map(([key, name]) => (
              <div
                key={key}
                className={`region-item ${hoverRegion === key ? "hovered" : ""}`}
              >
                <span
                  className="color-circle"
                  style={{ background: regionColors[key] }}
                ></span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 음식과 음료 섹션 */}
<div className="info-section">
  <h2 className="section-title">Foods and Drinks</h2>
  <p className="section-content">
    Mongolian cuisine features meat-based dishes like khorkhog (barbecue), buuz (dumplings), and airag (fermented mare's milk). Expect hearty, simple meals with rich flavors.
  </p>
</div>

{/* 짐싸기 리스트 섹션 */}
<div className="info-section">
  <h2 className="section-title">Packing List</h2>
  <ul className="section-list">
    <li>Warm layers for cold nights</li>
    <li>Light clothing for summer</li>
    <li>Comfortable shoes for walking</li>
    <li>Sunscreen and lip balm</li>
    <li>Reusable water bottle</li>
  </ul>
</div>

{/* 할 일 목록 섹션 */}
<div className="info-section">
  <h2 className="section-title">To-Do List in Mongolia</h2>
  <ul className="section-list">
    <li>Ride a horse across the steppe</li>
    <li>Visit a nomadic family</li>
    <li>Explore the Gobi Desert</li>
    <li>Relax by Lake Khövsgöl</li>
    <li>Discover history at Karakorum</li>
  </ul>
</div>

    </div>
  

  );
};

export default Information;
