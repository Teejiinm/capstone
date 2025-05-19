import React, { useState, useEffect } from "react";
import { ReactComponent as BlankMap } from "../assets/BlankMongolia.svg";
import "../styles/information.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import buuz from "../assets/images/buuz.jpg";
import khorkhog from "../assets/images/khorkhog.jpg";
import suuteitsai from "../assets/images/suutei tsai.jpg";
import airag from "../assets/images/airag.jpg";

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

const foodItems = [
  { name: "Khorkhog", desc: "Traditional barbecue cooked with hot stones.", img: khorkhog },
  { name: "Buuz", desc: "Steamed meat dumplings.", img: buuz },
  { name: "Airag", desc: "Fermented mare’s milk.", img: airag },
  { name: "Suutei Tsai", desc: "Salty milk tea.", img: suuteitsai },
];

export default function Information() {
  const [hoverRegion, setHoverRegion] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (e) => {
    const regionClass = Array.from(e.target.classList).find((cls) =>
      cls.startsWith("region-")
    );
    if (regionClass) setHoverRegion(regionClass);
  };

  const handleMouseOut = () => setHoverRegion("");

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? foodItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === foodItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="info-container">
      {/* Weather and Geography */}
      <h2 className="section-title">Weather and Geography</h2>
      <div className="information-container">
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
              <div key={key} className={`region-item ${hoverRegion === key ? "hovered" : ""}`}>
                <span className="color-circle" style={{ background: regionColors[key] }}></span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foods and Drinks */}
      <div className="info-section">
        <h2 className="section-title">Foods and Drinks</h2>
        <p className="section-content">
          Mongolian cuisine features hearty dishes often centered around meat and dairy. Here are some local favorites:
        </p>

        <div className="carousel-wrapper">
          <button className="nav-btn left" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <div className="carousel-items">
            {foodItems.map((item, idx) => {
              const isCenter = idx === currentIndex;
              const isLeft = idx === (currentIndex - 1 + foodItems.length) % foodItems.length;
              const isRight = idx === (currentIndex + 1) % foodItems.length;

              let className = "food-card hidden";
              if (isCenter) className = "food-card center";
              else if (isLeft || isRight) className = "food-card side";

              return (
                <div key={idx} className={className} onClick={() => setCurrentIndex(idx)}>
                  <img src={item.img} alt={item.name} />
                  {isCenter && (
                    <>
                      <div className="food-name">{item.name}</div>
                      <div className="food-desc">{item.desc}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <button className="nav-btn right" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Packing List */}
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

      {/* To-Do List */}
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
}
