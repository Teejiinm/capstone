import React from "react";
import { FaBus, FaHotel, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";
import chingiskhanstatue2 from "../../assets/images/chingiskhanstatue2.jpg";
import chingiskhanstatue3 from "../../assets/images/chingiskhanstatue3.jpg";
import chingiskhanstatue4 from "../../assets/images/chingiskhanstatue4.jpg";
import horseride1 from "../../assets/images/horseride1.jpg";
import horseride2 from "../../assets/images/horseride2.jpg";
import horseride3 from "../../assets/images/horseride3.jpg";

export const SummerFestivalDay1 = () => (
  <>
    <div
      className="flight-info-box"
      style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginTop: "20px",
      }}
    >
      <div>
        <div style={{ fontWeight: "bold" }}>Departure: Incheon (ICN)</div>
        <div>2025.05.22 (Thu)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.05.22 (Thu)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>10:50</div>
      </div>
    </div>

    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Transfer to Terelj National Park (Duration: 2 hours)</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaMapMarkerAlt style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit the Chinggis Khaan Statue Complex</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {[chingiskhanstatue2, chingiskhanstatue3, chingiskhanstatue4].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "calc(33.33% - 8px)", maxWidth: "200px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", marginTop: "20px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
        <GiHorseHead style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Horseback riding in the Terelj valley</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {[horseride1, horseride2, horseride3].map((src, i) => (
          <img key={i} src={src} alt={`Horse ${i}`} style={{ width: "200px", height: "150px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px", marginTop: "20px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Check-in: Traditional Mongolian Ger Hotel</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>21:00</div>
        <FaStar style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Night: Stargazing under the Mongolian sky</div>
      </div>
    </div>

    <div style={{ marginTop: "30px", padding: "15px", background: "#f9f9f9", borderRadius: "10px", border: "1px solid #ddd" }}>
      <div style={{ fontWeight: "bold", color: "blue", marginBottom: "10px" }}>Optional Activities</div>
      <div style={{ marginBottom: "10px" }}>
        <strong>- Purugun Off-road Ride Experience ($30/person/1hr)</strong><br />
        Ride across the Mongolian steppe in a Soviet-style jeep. Coffee and cup noodles included.
      </div>
      <div>
        <strong>- Nomadic Horse Show Experience ($40/person/1hr)</strong><br />
        A traditional nomadic performance introducing Mongolian cultural heritage.
      </div>
    </div>
  </>
);

// 다른 날도 이렇게 export
export const SummerFestivalDay2 = () => <div>Day 2 일정 내용</div>;
export const SummerFestivalDay3 = () => <div>Day 3 일정 내용</div>;
export const SummerFestivalDay4 = () => <div>Day 4 일정 내용</div>;
