import React from "react";
import { FaBinoculars, FaBus, FaCamera, FaCampground, FaFeatherAlt, FaHorse, FaHotel, FaMosque, FaMountain, FaUsers, FaUtensils } from "react-icons/fa";
import hotel1 from "../../assets/images/ulgiihotel1.jpg";
import hotel2 from "../../assets/images/ulgiihotel2.jpg";
import hotel3 from "../../assets/images/ulgiihotel3.jpg";
import food1 from "../../assets/images/ulgiires1.jpg";
import food2 from "../../assets/images/ulgiires2.jpg";
import food3 from "../../assets/images/ulgiires3.jpg";
import eagle1 from "../../assets/images/blog7.webp";
import eagle2 from "../../assets/images/eagle1.jpg";
import eagle3 from "../../assets/images/eagle2.jpg";
import ulgii1 from "../../assets/images/ulgii1.jpg";
import ulgii2 from "../../assets/images/mosque1.jpg";
import ulgii3 from "../../assets/images/bazaar1.jpg";
import bonfire1 from "../../assets/images/bonfire.jpg";
import bonfire2 from "../../assets/images/star2.webp";
import bonfire3 from "../../assets/images/bonfire1.jpg";


export const AdventureTourDay1 = () => (
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
        <div>2025.07.25 (Fri)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.07.25 (Fri)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>10:50</div>
      </div>
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
    <div>2025.07.25 (Fri)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>13:00</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Hunnu Air MR801</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 0m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Bayan-Ulgii (ULG)</div>
    <div>2025.07.25 (Fri)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>16:00</div>
  </div>
</div>

    

    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>17:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Transfer to Hotel and Check-in</div>
      </div>

      

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[hotel1 , hotel2 , hotel3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dinner in Kazakh restaurant</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[food1, food2 , food3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
  <div>• Breakfast, Lunch: In-flight meal</div>
  <div>• Dinner: Kazakh foods</div>
</div>


    </div>

      
      </>
);

export const AdventureTourDay2 = () => (
    <>
    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
        <FaMosque style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Ulgii city tour: Ulgii Mosque, Local Bazaar</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[ulgii1, ulgii2, ulgii3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaFeatherAlt style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Demonstration of eagle hunting techniques</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaCamera style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Photo time with golden eagle & horseback riding</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[eagle1, eagle2 , eagle3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaCampground style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Enjoy the Bonfire night in nature</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[bonfire1, bonfire2, bonfire3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
      <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
  <div>• Breakfast: Hotel Buffet</div>
  <div>• Lunch: Mongolian Traditional Food(Khuushuur)</div>
  <div>• Dinner: Campfire Meals</div>
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
      • Wearing Kazakh Traditional Clothes in Ulgii ($20/person/30min)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Try on traditional Kazakh garments and take memorable photos during your stay in Bayan-Ulgii. A perfect way to experience local culture.
    </div>
  </div>
</div>


      

    </>

);

export const AdventureTourDay3 = () => (
  <>
  <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
    <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Transfer to Altai Tavan Bogd National Park Entrance(180km)</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:30</div>
    <FaBinoculars style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Explore Tsagaan Salaa Petroglyph Complex (UNESCO site)</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Picnic lunch in the valley</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:30</div>
    <FaHorse style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>HorseBack to ranger station near Tavan Bogd base camp(20km)</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>19:00</div>
    <FaCampground style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Set up tent camp and dinner</div>
  </div>
</div>

  </>
);
export const AdventureTourDay4 = () => (
  <>
  <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>08:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Breakfast at camp</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
    <FaMountain style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Trek to Potanin Glacier Viewpoint (16km round-trip)</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Lunch near the glacier base</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
    <FaCampground style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Return to camp and relax</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:30</div>
    <FaUsers style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Kazakh cultural evening: meet local family and dinner</div>
  </div>
</div>

  </>
);

export const AdventureTourDay5 = () => (
  <>
  <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>08:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Breakfast at camp</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
    <FaHorse style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Travel to White River Valley by Horse(20km)</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:30</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Lunch near White River with scenic views</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:30</div>
    <FaCampground style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Relax and enjoy nature or short hikes in the valley</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:30</div>
    <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Return to Ulgii City by car(180km)</div>
  </div>
</div>
</>
);