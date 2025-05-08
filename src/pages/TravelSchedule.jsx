
import React, { useState } from "react";

export default function TravelSchedule({ itinerary }) {
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div>
      {itinerary.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
          }}
        >
          <div
            onClick={() => toggleDay(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            <div>
              {item.day} | {item.date} | {item.route}
            </div>
            <div>{openDay === index ? "▲" : "▼"}</div>
          </div>
          {openDay === index && item.Component && (
            <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
              <item.Component />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}