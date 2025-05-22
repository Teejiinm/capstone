import React from "react";
import { FaBus, FaHotel, FaMusic, FaWalking, FaUtensils, FaDog, FaLandmark } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import ubhotel1 from "../../assets/images/ubhotel1.avif";
import ubhotel2 from "../../assets/images/ubhotel2.avif";
import ubhotel3 from "../../assets/images/ubhotel3.jpg";
import restaurant1 from "../../assets/images/restaurant1.webp";
import restaurant2 from "../../assets/images/restaurant2.jpg";
import restaurant3 from "../../assets/images/restaurant3.jpg";
import ubnight1 from "../../assets/images/ubnight1.jpg";
import ubnight2 from "../../assets/images/ubnight2.jpg";
import ubnight3 from "../../assets/images/ubnight3.jpg";
import club1 from "../../assets/images/club1.png";
import club2 from "../../assets/images/club2.png";
import club3 from "../../assets/images/club3.jpg";
import chingiskhanstatue2 from "../../assets/images/chingiskhanstatue2.jpg";
import chingiskhanstatue3 from "../../assets/images/chingiskhanstatue3.jpg";
import chingiskhanstatue4 from "../../assets/images/chingiskhanstatue4.jpg";
import dog1 from "../../assets/images/dog.jpeg";
import dog2 from "../../assets/images/tour-img08.jpg";
import dog3 from "../../assets/images/dog1.jpg";

export const WinterCityTourDay1 = () => (
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
        <div>2025.12.20 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:40</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.12.20 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>12:20</div>
      </div>
    </div>

    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Transfer to Ulaanbaatar City (Duration: 1 hours)</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Check-in Hotel</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[ubhotel1, ubhotel3, ubhotel2].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
      </div>


      <div style={{ display: "flex", alignItems: "center",  marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
        <FaBowlFood style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Welcome dinner at Modern Nomads</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[restaurant1, restaurant2, restaurant3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
      </div>


      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaWalking style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Light walking tour in UB city</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[ubnight1, ubnight2, ubnight3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
      </div>

      

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>22:00</div>
        <FaMusic style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Enjoy Ulaanbaatar Night Club Experience (In Optional)</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[club1, club2, club3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
      </div>

      
     {/* Simple Food Summary */}
<div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
  <div>• Lunch: In-flight meal</div>
  <div>• Dinner: Welcome dinner at Modern Nomads</div>
</div>


    </div>

   <div style={{
  marginTop: "30px",
  padding: "15px 20px",
  background: "#f9f9f9",
  borderRadius: "10px",
  border: "1px solid #ddd"
}}>
  <div style={{ fontWeight: "bold", color: "blue", fontSize: "16px", marginBottom: "12px" }}>
    Optional Activities
  </div>

  <div>
    <div style={{ fontWeight: "bold" }}>
      • Wearing Mongolian Traditional Clothes ($20/person/30min)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Try on traditional Mongolian garments and take memorable photos inside Modern Nomads Restaurant.
    </div>
  </div>
</div>


  </>
);

export const WinterCityTourDay2 = () => (
  <>
    <div
      style={{
        borderLeft: "2px solid blue",
        paddingLeft: "20px",
        marginLeft: "10px",
        marginTop: "30px",
        lineHeight: "1.8",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive from Ulaanbaatar to Terelj National Park</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:30</div>
        <FaDog style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dog Sledding Adventure in Terelj</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[dog1, dog2 , dog3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:30</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch in a Local Ger Restaurant</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaLandmark style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit Chinggis Khan Statue Complex</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[chingiskhanstatue2, chingiskhanstatue3, chingiskhanstatue4].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:30</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Return Drive to Ulaanbaatar</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dinner in Ulaanbaatar</div>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px 20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          borderLeft: "4px solid blue",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
        <div>• Breakfast: Hotel in UB</div>
        <div>• Lunch: Local restaurant in Terelj</div>
        <div>• Dinner: Modern Mongolian cuisine in UB</div>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px 20px",
          background: "#f9f9f9",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <div style={{ fontWeight: "bold", color: "blue", fontSize: "16px", marginBottom: "12px" }}>
          Optional Activities
        </div>
        <div style={{ fontWeight: "bold" }}>• Try winter archery or wear traditional Mongolian deel</div>
        <div style={{ marginLeft: "10px" }}>
          Experience archery in a snowy setting or take photos in warm traditional Mongolian clothing.
        </div>
      </div>
    </div>
  </>
);
