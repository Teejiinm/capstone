import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as BlankMap } from "../assets/BlankMongolia.svg";
import "../styles/information.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import buuz from "../assets/images/buuz.jpg";
import khorkhog from "../assets/images/khorkhog.jpg";
import suuteitsai from "../assets/images/suutei tsai.jpg";
import airag from "../assets/images/airag.jpg";
import aaruul from "../assets/images/aaruul.webp";
import khuushuur from "../assets/images/khuushuur.jpg";
import tsuivan from "../assets/images/tsuivan.jpg";
import guriltaiShol from "../assets/images/guriltaishul.png";
import boortsog from "../assets/images/boortsog.jpg";
import tolgoi from "../assets/images/tolgoi.jpg";
import tarag from "../assets/images/tarag.jpg";
import shimiinArkhi from "../assets/images/shimiin-arkhi.webp";
import horse from "../assets/images/horse.jpg";
import ger from "../assets/images/ger.jpg";
import camelride from "../assets/images/camelride.jpg";
import dog from "../assets/images/dog.jpeg";
import wrestling from "../assets/images/wrestling.jpg";
import kazakh from "../assets/images/kazakh.jpg";
import hotspring from "../assets/images/hotspring.jpg";
import hiking from "../assets/images/hiking.webp";
import motorbike from "../assets/images/motobike.jpg";
import gedes from "../assets/images/gedes.jpg";

import {
  FaHorse,
  FaCampground,
  FaMountain,
  FaFeatherAlt,
  FaFistRaised,
  FaSnowflake,
  FaSpa, FaHiking, FaMotorcycle,
} from "react-icons/fa";

const todoItems = [
  {
    icon: <FaHorse className="text-blue-500" />,
    title: "Ride a Horse",
    desc: "Feel the freedom of riding through Mongolia’s vast open grasslands like a true nomad.",
    image: horse,
  },
  {
    icon: <FaCampground className="text-blue-500" />,
    title: "Stay in a Ger (Yurt)",
    desc: "Sleep in a traditional nomadic tent, warmed by a stove and surrounded by silence and stars.",
    image: ger,
  },
  {
    icon: <FaMountain className="text-blue-500" />,
    title: "Camel Riding",
    desc: "Traverse dramatic sand dunes on a two-humped Bactrian camel, native to Mongolia.",
    image: camelride,
  },
  {
    icon: <FaFeatherAlt className="text-blue-500" />,
    title: "Eagle Hunting ",
    desc: "Watch Kazakh hunters and their golden eagles in action — a rare and ancient tradition.",
    image: kazakh,
  },
  {
    icon: <FaFistRaised className="text-blue-500" />,
    title: "Mongolian Wrestling",
    desc: "Learn the basics of Bokh, Mongolia’s national sport, guided by local wrestlers.",
    image: wrestling,
  },
  {
    icon: <FaSnowflake className="text-blue-500" />,
    title: "Winter Dog Sledding",
    desc: "Glide through Mongolia’s snowy wilderness on a sled pulled by powerful Mongolian dogs.",
    image: dog,
  },
  {
  icon: <FaHiking className="text-blue-500" />,
  title: "Hike in Mongolia",
  desc: "Discover Mongolia’s stunning mountain trails and vast natural landscapes on foot.",
  image: hiking,
},
{
  icon: <FaMotorcycle className="text-blue-500" />,
  title: "Motorbike Adventure",
  desc: "Ride through open steppe and rugged terrain on an off-road motorbike journey.",
  image: motorbike,
},
{
  icon: <FaSpa className="text-blue-500" />,
  title: "Relax in a Hot Spring",
  desc: "Soak in natural hot springs like Tsenkher, surrounded by forests and mountains.",
  image: hotspring,
},

];

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
  
  { name: "Khorkhog", desc: "Traditional Mongolian dish where lamb is cooked with hot stones in a sealed pot, resulting in tender, smoky meat.", img: khorkhog },
  { name: "Buuz", desc: "Steamed dumplings filled with minced meat, typically enjoyed during Lunar New Year.", img: buuz },
  { name: "Khuushuur", desc: "Deep-fried meat pastries with a crispy shell and juicy minced meat inside.", img: khuushuur },
  { name: "Tsuivan", desc: "Stir-fried handmade noodles mixed with meat and vegetables.", img: tsuivan },
  { name: "Guriltai Shol", desc: "A comforting noodle soup made with meat, simple vegetables, and broth.", img: guriltaiShol },
   { 
  name: "Gedes", 
  desc: "Boiled intestines dish made from sheep’s stomach and innards, seasoned lightly and served warm — a traditional nomadic delicacy.", 
  img: gedes 
},
{ name: "Tolgoi", desc: "Boiled sheep's head served as a traditional dish during special ceremonies.", img: tolgoi },
  { name: "Aaruul", desc: "Dried curds made from fermented milk, known for their hard texture and tangy taste.", img: aaruul },
  { name: "Boortsog", desc: "Fried dough snacks that are slightly sweet and often served with tea.", img: boortsog },
  { name: "Tarag", desc: "Fermented milk similar to yogurt, rich in probiotics and flavor.", img: tarag },
  { name: "Shimiin Arkhi", desc: "A strong Mongolian distilled spirit made from fermented grains or milk.", img: shimiinArkhi },
  { name: "Airag", desc: "Slightly sour, mildly alcoholic drink made from fermented mare’s milk.", img: airag },
  { name: "Suutei Tsai", desc: "Traditional salted milk tea made with green tea, milk, and a pinch of salt.", img: suuteitsai },
  



];

export default function Information() {
  const [hoverRegion, setHoverRegion] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100; // offset in pixels (adjust as needed)
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100); // slight delay to wait for rendering
  }
}, [location]);


  return (
    <>
      
  <section id="weather" className="info-container">
    {/* 제목은 위에 고정 */}
    <h2 className="section-title">Weather and Geography</h2>

    {/* 날씨 & 지리 정보를 좌우로 나누기 */}
    <div className="information-container">
      {/* Weather Section - 오른쪽 */}
      <div className="weather-section">
        <p className="section-subtitle">Mongolian Weather</p>
        <p className="weather-subtitle">Mongolia has four distinct seasons, with long, cold winters and short, warm summers. Temperatures can vary widely between day and night, especially in the desert and steppe regions. Spring is windy and dry, while autumn is cool and crisp.</p>
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

      {/* Geography Section - 왼쪽 */}
      <div className="map-section">
        <p className="section-subtitle">Mongolian Geography</p>
        <p className="geography-subtitle">Mongolia's landscape includes vast steppes, high mountains, deserts, and freshwater lakes. The Gobi Desert lies in the south, while the forested mountains and Lake Khövsgöl are in the north. The Altai Mountains stretch across the west, and open grasslands cover much of the central and eastern regions.</p>
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
  </section>


  <section id="food" className="info-section">
    <h2 className="section-title" style={{ marginTop: "150px" }}>
  Foods and Drinks
</h2>

    <p className="section-content">
      Mongolian cuisine is rooted in meat, dairy, and flour, reflecting its nomadic heritage. Lamb, beef, and goat are common, prepared in hearty and simple ways. Staples like buuz (steamed dumplings) and khuushuur (fried meat pies) are everyday favorites. Dairy products such as aaruul and fermented mare’s milk (airag) are also key parts of the diet. Here are a few signature Mongolian dishes:
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
                <div className="food-info">
                  <div className="food-name">{item.name}</div>
                  <div className="food-desc">{item.desc}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button className="nav-btn right" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  </section>

  <section id="packing" className="info-section">
    <h2 className="section-title" style={{ marginTop: "100px" }}>Packing List</h2>
    <p className="section-content" style={{ marginBottom: '40px' }}>
      Traveling to Mongolia requires preparing for diverse weather, from hot summers to cold nights. Lightweight, breathable clothes are essential for summer, while warm layers are needed for chilly evenings. Durable hiking boots and a good sleeping bag will help with outdoor adventures. Don’t forget sun protection like hats and sunscreen due to strong UV exposure. Also, pack reusable water bottles and basic first aid supplies to stay comfortable and safe on your trip.
    </p>

    <div className="packing-grid">
      <div className="packing-box">
        <h2>☀️ Hot Weather Packing List</h2>
        <p>(Summer in Mongolia)</p>
        <ul>
          <li>👕 Light, breathable clothes (cotton or linen)</li>
          <li>🧢 Wide-brimmed hat or cap for sun protection</li>
          <li>🕶️ Sunglasses and high-SPF sunscreen</li>
          <li>💧 Reusable water bottle</li>
          <li>👟 Comfortable walking shoes or sandals</li>
          <li>🦟 Insect repellent (especially for rural areas)</li>
          <li>🧣 Light scarf or shawl for dust or sun</li>
        </ul>
      </div>

      <div className="packing-box">
        <h2>❄️ Cold Weather Packing List</h2>
        <p>(Winter in Mongolia)</p>
        <ul>
          <li>🧦 Thermal underwear (base layer)</li>
          <li>🧥 Down or insulated winter jacket</li>
          <li>🧊 Windproof outer shell or parka</li>
          <li>🧢 Warm hat and scarf</li>
          <li>🧤 Gloves or mittens (preferably waterproof)</li>
          <li>🥾 Wool socks and insulated boots</li>
          <li>💄 Lip balm and moisturizer for dry air</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="todo" className="info-section">
    <h2 className="section-title" style={{ marginTop: "150px" }}>To-Do List in Mongolia</h2>
    <p className="section-content" style={{ marginBottom: '40px' }}>
      Mongolia offers rare adventures you won’t find anywhere else. Ride horses across the steppe, sleep in a traditional ger, or explore the Gobi Desert by camel. Watch eagle hunters in action or try traditional wrestling. Winter brings unique thrills like dog sledding in the snow. Here are a few must-do activities in Mongolia:
    </p>
    <div className="todo-grid">
      {todoItems.map((item, index) => (
        <div className="todo-card" key={index}>
          <img src={item.image} alt={item.title} className="todo-image" />
          <div className="todo-content">
            <div className="todo-header">
              <div className="todo-icon">{item.icon}</div>
              <h3 className="todo-title">{item.title}</h3>
            </div>
            <p className="todo-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>



       
      
    </>
    
    );
}
