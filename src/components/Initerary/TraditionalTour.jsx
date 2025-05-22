import React from "react";
import { FaBus, FaUtensils, FaMonument, FaChurch, FaLandmark, FaHome, FaMountain, FaMapMarkerAlt, FaHotel } from "react-icons/fa";
import sukhbaatar1 from "../../assets/images/sukhbaatar1.jpg";
import sukhbaatar2 from "../../assets/images/sukhbaatar2.jpg";
import sukhbaatar3 from "../../assets/images/sukhbaatar3.jpg";
import museum1 from "../../assets/images/museum1.jpg";
import museum2 from "../../assets/images/museum2.webp";
import museum3 from "../../assets/images/museum3.jpg";
import zaisan1 from "../../assets/images/zaisan1.jpg";
import zaisan2 from "../../assets/images/zaisan2.jpg";
import zaisan3 from "../../assets/images/zaisan3.webp";
import ubhotel1 from "../../assets/images/ubhotel1.avif";
import ubhotel2 from "../../assets/images/ubhotel2.avif";
import ubhotel3 from "../../assets/images/ubhotel3.jpg";
import tsenkher2 from "../../assets/images/hotspring.jpg";
import tsenkher1 from "../../assets/images/tsenkher1.jpg";
import tsenkher3 from "../../assets/images/tsenkher2.jpg";
import orkhon1 from "../../assets/images/orkhon1.jpg";
import orkhon2 from "../../assets/images/orkhon2.jpg";
import orkhon3 from "../../assets/images/orkhon3.jpg";
import erdenezuu1 from "../../assets/images/erdenezuu1.jpg";
import erdenezuu2 from "../../assets/images/erdenezuu2.jpg";
import erdenezuu3 from "../../assets/images/erdenezuu3.jpg";
import terelj1 from "../../assets/images/tereljhotel.jpg";
import terelj2 from "../../assets/images/tereljhotel2.jpg";
import terelj3 from "../../assets/images/tereljhotel3.jpg";
import camel1 from "../../assets/images/blog1.jpg";
import camel2 from "../../assets/images/camel1.jpg";
import camel3 from "../../assets/images/camel2.jpg";
import life1 from "../../assets/images/blog3.jpg";
import life2 from "../../assets/images/tour-img06.jpg";
import life3 from "../../assets/images/locallife.jpg";

export const TraditionalTourDay1 = () => (
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
        <div>2025.08.10 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>06:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.08.10 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>09:50</div>
      </div>
    </div>
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
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>11:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Depart Ulaanbaatar by private vehicle to Arkhangai (Duration: 7hours)</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch stop at local town en route</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
        <FaMonument style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit Tsenkher Hot Springs and relax</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[tsenkher1, tsenkher2, tsenkher3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:30</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dinner at Ger Camp and overnight stay</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[terelj1, terelj2, terelj3].map((src, i) => (
          <img key={i} src={src} alt={`Terelj ${i}`} style={{ maxWidth: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
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
        <div>• Breakfast: Hotel in Ulaanbaatar</div>
        <div>• Lunch: Local restaurant during drive</div>
        <div>• Dinner: Traditional meal in Ger Camp</div>
      </div>
    </div>
  </>
);


export const TraditionalTourDay2 = () => (
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
        <div>Drive to Kharkhorin, the ancient capital of Mongolia (Duration: 1.5 hours)</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:30</div>
        <FaChurch style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit Erdene Zuu Monastery and Kharkhorin Museum</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[erdenezuu1, erdenezuu2, erdenezuu3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch at a local restaurant in Kharkhorin</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaLandmark style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Explore the surrounding Orkhon Valley, a UNESCO World Heritage Site</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[orkhon1, orkhon2, orkhon3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:30</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dinner and overnight at Ger Camp</div>
      </div>

      {/* Optional Activity */}
      
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
        <div>• Breakfast: Ger Camp</div>
        <div>• Lunch: Local restaurant in Kharkhorin</div>
        <div>• Dinner: Traditional meal at Ger Camp</div>
      </div>
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
  <div style={{ fontWeight: "bold" }}>
    • Wear Traditional Mongolian Clothes in Kharkhorin ($15/person)
  </div>
  <div style={{ marginLeft: "10px" }}>
    Try on traditional Mongolian garments like the "deel" and take memorable photos at historic Kharkhorin.
  </div>
</div>

  </>
);

export const TraditionalTourDay3 = () => (
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
        <div>Visit a Local Nomadic Family</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:30</div>
        <FaHome style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Experience Traditional Mongolian Lifestyle (milking, felt-making, etc.)</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[life1, life2, life3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:30</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch with the Local Family (Traditional Mongolian Dishes)</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive to Elsen Tasarkhai Sand Dunes (approx. 2.5 hrs)</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[camel1, camel2, camel3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>17:00</div>
        <FaMountain style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Arrive and Relax at Ger Camp near the Sand Dunes</div>
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
        <div>• Breakfast: Hot Spring Lodge</div>
        <div>• Lunch: Traditional meal with Local Family</div>
        <div>• Dinner: Ger Camp near Elsen Tasarkhai</div>
      </div>
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

  

  <div style={{ fontWeight: "bold", marginTop: "10px" }}>
    • Ride a Horse at Local Nomadic Family ($20/person)
  </div>
  <div style={{ marginLeft: "10px" }}>
    Enjoy a short horseback ride guided by locals while experiencing authentic nomadic life.
  </div>

  <div style={{ fontWeight: "bold", marginTop: "10px" }}>
    • Ride a Camel in Elsen Tasarkhai Sand Dunes ($25/person)
  </div>
  <div style={{ marginLeft: "10px" }}>
    Experience a camel ride across the beautiful semi-desert dunes of Elsen Tasarkhai.
  </div>
</div>

  </>
);

export const TraditionalTourDay4 = () => (
 <>
 <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
 <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
   <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
   <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
   <div>Depart from Elsen Tasarkhai Sand Dunes to Ulaanbaatar (Duration: 3hour)</div>
 </div>
 
 <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
   <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00</div>
   <FaMapMarkerAlt style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
   <div>Visit Sukhbaatar Square (Government Palace & City Center)</div>
 </div>
 <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
           {[sukhbaatar1, sukhbaatar3, sukhbaatar2].map((src, i) => (
             <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
           ))}
 </div>
 
 <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
   <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
   <FaLandmark style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
   <div>Explore the Chinggis Khaan National Museum</div>
 </div>
 <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
           {[museum1, museum2, museum3].map((src, i) => (
             <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
           ))}
 </div>
 <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
   <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
   <FaMountain style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
   <div>Head to Zaisan Memorial Hill (City Viewpoint)</div>
 </div>
 <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
           {[zaisan1, zaisan2, zaisan3].map((src, i) => (
             <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
           ))}
 </div>
 
 <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
   <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
   <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
   <div>Check-in: Ulaanbaatar City Hotel & Rest</div>
 </div>
 <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
           {[ubhotel1, ubhotel3, ubhotel2].map((src, i) => (
             <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
           ))}
 </div>
 
 {/* Meals */}
 <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
   <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
   <div>• Breakfast: Hotel breakfast</div>
   <div>• Lunch: Mongolian beef stir-fry</div>
   <div>• Dinner: Korean food</div>
 </div>
 </div>
 </>
 );