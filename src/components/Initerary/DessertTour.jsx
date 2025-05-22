
import React from "react";
import { FaHotel, FaUtensils, FaHorse, FaShoppingBag, FaBus, FaMapMarkerAlt, FaLandmark, FaMountain, FaCar, FaSun, FaCampground, FaBinoculars, FaHiking } from "react-icons/fa";
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
import shopping1 from "../../assets/images/shopping1.jpg";
import shopping2 from "../../assets/images/shopping2.jpg";
import shopping3 from "../../assets/images/shopping3.jpg";
import desserthotel1 from "../../assets/images/desserthotel1.jpg";
import desserthotel2 from "../../assets/images/desserthotel2.jpg";
import desserthotel3 from "../../assets/images/desserthotel3.jpg";
import camel1 from "../../assets/images/blog1.jpg";
import camel2 from "../../assets/images/camel1.jpg";
import camel3 from "../../assets/images/camel2.jpg";
import sand1 from "../../assets/images/camel4.jpg";
import sand2 from "../../assets/images/camel5.jpg";
import sand3 from "../../assets/images/camelride.jpg";
import yol1 from "../../assets/images/yol1.jpg";
import yol2 from "../../assets/images/yol2.jpeg";
import yol3 from "../../assets/images/yol3.jpg";
import dino1 from "../../assets/images/dino1.jpg";
import dino2 from "../../assets/images/dino2.jpg";
import dino3 from "../../assets/images/dino3.jpg";
import suvarga1 from "../../assets/images/blog2.jpg";
import suvarga2 from "../../assets/images/tour-img04.jpg";
import suvarga3 from "../../assets/images/suvarga.avif";



export const DessertTourDay1 = () => (
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
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.08.10 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>10:50</div>
      </div>
    </div>
    {/* Flight to Dalanzadgad */}
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
        <div style={{ fontWeight: "bold" }}>Departure: Ulaanbaatar (UBN)</div>
        <div>2025.08.10 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>12:00</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Hunnu Air MR303</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 1h 30m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Dalanzadgad (DLZ)</div>
        <div>2025.08.10 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>13:30</div>
      </div>
    </div>

    {/* Activities */}
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
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Transfer to Ger Camp and Check-in</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[desserthotel1, desserthotel2, desserthotel3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>


      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
        <FaHorse style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Camel Riding Experience in the Gobi Desert</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[camel1, camel2, camel3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:30</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Sunset Viewing and Dinner in the Dunes</div>
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
        <div>• Breakfast: In-flight Meal</div>
        <div>• Lunch: Local restaurant in Dalanzadgad</div>
        <div>• Dinner: Traditional meal in Ger Camp</div>
      </div>
    </div>
  </>
);

export const DessertTourDay2 = () => (
  <>
    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
         <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
        <FaCar style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive to Khongor Sand Dunes</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[sand1 , sand2 , sand3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch at local canteen in Dalanzadgad</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
        <FaBinoculars style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit Yolyn Am (Vulture Valley)</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[yol1, yol2, yol3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaCampground style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dinner and rest at Ger Camp</div>
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
        <div>• Breakfast: Hotel Buffet</div>
        <div>• Lunch: Local canteen in Dalanzadgad</div>
        <div>• Dinner: Traditional meal in Ger Camp</div>
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

  <div style={{ fontWeight: "bold" }}>
    • Hike through the gorge and ice field in Yolyn Am
  </div>
  <div style={{ marginLeft: "10px" }}>
    Take an optional guided hike through the narrow gorge of Yolyn Am, where you can witness a year-round ice field and stunning mountain scenery.
  </div>
</div>

  </>
);
export const DessertTourDay3 = () => (
  <>
    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
     
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
        <FaLandmark style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Explore dinosaur fossil sites</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[dino1, dino2, dino3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaSun style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Go to Tsagaan Suvarga and Sunset at Flaming Cliffs</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[suvarga1, suvarga2, suvarga3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>19:00</div>
        <FaCampground style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Stay in nearby camp</div>
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
        <div>• Breakfast: Hotel Buffet</div>
        <div>• Lunch: Korean Food in Dalanzadgad</div>
        <div>• Dinner: MOngolian BBQ in Camp</div>
      </div>
    
    </div>
  </>
);
export const DessertTourDay4 = () => (
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
    <div style={{ fontWeight: "bold" }}>Departure: Dalanzadgad (DLZ)</div>
    <div>2025.08.13 (Wed)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>09:00</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Hunnu Air MR801</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 1h 30m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
    <div>2025.08.13 (Wed)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>10:30</div>
  </div>
</div>
    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
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
  <div>• Breakfast: In-Flight Meal</div>
  <div>• Lunch: Mongolian beef stir-fry</div>
  <div>• Dinner: Korean food</div>
</div>
</div>

  </>
);

export const DessertTourDay5 = () => (
<>
    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
    <FaShoppingBag style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Shopping for souvenirs at local markets</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[shopping1, shopping3, shopping2].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
    <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Transfer to Chingis Khaan International Airport</div>
  </div>

  

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
    <div style={{ fontWeight: "bold" }}>Departure: Ulaanbaatar (UBN)</div>
    <div>2025.08.14 (Thu)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>16:10</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE198</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 30m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Incheon (ICN)</div>
    <div>2025.08.14 (Thu)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>19:40</div>
  </div>
</div>
<div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
  <div>• Breakfast: Hotel buffet</div>
  <div>• Lunch: Mongolian-style noodle soup</div>
  <div>• Dinner: In-flight meal</div>
</div>


</div>
    </>
);
