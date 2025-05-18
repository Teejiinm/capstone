import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import buuz from "../assets/images/buuz.jpg";
import khorkhog from "../assets/images/khorkhog.jpg";
import suuteitsai from "../assets/images/suutei tsai.jpg";
import airag from "../assets/images/airag.jpg";
import "../styles/information.css";

const foodItems = [
  { name: "Khorkhog", desc: "Traditional barbecue cooked with hot stones.", img: khorkhog },
  { name: "Buuz", desc: "Steamed meat dumplings.", img: buuz },
  { name: "Airag", desc: "Fermented mare’s milk.", img: airag },
  { name: "Suutei Tsai", desc: "Salty milk tea.", img: suuteitsai },
];

export default function TestCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? foodItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === foodItems.length - 1 ? 0 : prev + 1));
  };

  return (
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
  );
}
