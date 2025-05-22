import { FaBinoculars, FaBus, FaHorse, FaHotel, FaLandmark, FaMapMarkedAlt, FaUtensils } from "react-icons/fa";
import terelj1 from "../../assets/images/tereljhotel.jpg";
import terelj2 from "../../assets/images/tereljhotel2.jpg";
import terelj3 from "../../assets/images/tereljhotel3.jpg";
import ubhotel1 from "../../assets/images/ubhotel1.avif";
import ubhotel2 from "../../assets/images/ubhotel2.avif";
import ubhotel3 from "../../assets/images/ubhotel3.jpg";
import khentii1 from "../../assets/images/khentii1.jpg";
import khentii2 from "../../assets/images/khentii2.jpg";
import khentii3 from "../../assets/images/khentii5.jpg";
import khentii4 from "../../assets/images/khentii4.jpg";
import khentii5 from "../../assets/images/khentii3.jpg";
import khentii6 from "../../assets/images/khentii6.jpg";
import horseride1 from "../../assets/images/horseride1.jpg";
import horseride2 from "../../assets/images/horseride2.jpg";
import horseride3 from "../../assets/images/horseride3.jpg";
import baldan1 from "../../assets/images/baldan1.jpg";
import baldan2 from "../../assets/images/baldan2.jpg";
import baldan3 from "../../assets/images/baldan3.jpg";

export const HistoricalTourDay1 = () => (
  <>
    {/* Flight to Ulaanbaatar */}
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
        <div>2025.06.08 (Sun)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.06.08 (Sun)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>10:50</div>
      </div>
    </div>

    {/* Drive to Khentii */}
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
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive to Khentii Province - Land of Genghis Khan(Duration: 6hours)</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Check-in to Ger Camp in Khentii and Rest</div>
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
        <div>• Breakfast: In-flight Meal</div>
        <div>• Lunch: En route</div>
        <div>• Dinner: Traditional dinner in Ger Camp</div>
      </div>
    </div>
  </>
);

export const HistoricalTourDay2 = () => (
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
      {/* Morning Activity */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
        <FaLandmark style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit the Birthplace of Chingis Khan in Deluun Boldog</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[khentii1, khentii2, khentii3].map((src, i) => (
          <img key={i} src={src} alt={`Terelj ${i}`} style={{ maxWidth: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      {/* Afternoon Activity */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaHorse style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Ride a Horse Tour in Chingis Khan's Birthplace</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[horseride1, horseride2, horseride3].map((src, i) => (
          <img key={i} src={src} alt={`Horse ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      {/* Dinner */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Dinner and Storytelling about Chinggis Khan's Legacy</div>
      </div>

      {/* Meals */}
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
        <div>• Lunch: Picnic near Deluun Boldog</div>
        <div>• Dinner: Traditional meal in Camp</div>
      </div>
</div>
      {/* Optional Activity */}
      <div
        style={{
          marginTop: "30px",
          padding: "15px 20px",
          background: "#f9f9f9",
          borderRadius: "10px",
          border: "1px solid #ddd"
        }}
      >
        <div style={{ fontWeight: "bold", color: "blue", fontSize: "16px", marginBottom: "12px" }}>
          Optional Activities
        </div>
        <div style={{ fontWeight: "bold" }}>
          • Wear Traditional Mongolian Clothes-Deel ($15/person)
        </div>
        <div style={{ marginLeft: "10px" }}>
          Try on the traditional attire of Mongolians and take memorable photos in a historical setting in Birthplace of Chingis Khan.
        </div>
      </div>
    
  </>
);

export const HistoricalTourDay3 = () => (
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
      {/* Morning Activity */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
        <FaLandmark style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit Baldan Bereeven Monastery and Hike to Sacred Sites</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[baldan1, baldan2 , baldan3].map((src, i) => (
          <img key={i} src={src} alt={`Horse ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
   

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>11:30</div>
        <FaBinoculars style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Explore Khentii's Natural Scenery and Wildlife</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[khentii4, khentii5, khentii6].map((src, i) => (
          <img key={i} src={src} alt={`Horse ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      {/* Afternoon Travel */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive Back to Ulaanbaatar (Duration: 6 hours)</div>
      </div>

      {/* Arrival in UB */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>20:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Check-in to Hotel in Ulaanbaatar and Rest</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[ubhotel1, ubhotel3, ubhotel2].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>

      {/* Meals */}
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
        <div>• Lunch: Picnic or local eatery on the road</div>
        <div>• Dinner: Hotel Restaurant in UB</div>
      </div>
    </div>
  </>
);
