import { FaBus, FaSpa, FaUtensils } from "react-icons/fa";
import sand1 from "../../assets/images/camel4.jpg";
import sand2 from "../../assets/images/camel5.jpg";
import sand3 from "../../assets/images/camelride.jpg";
import yoga2 from "../../assets/images/tour-img09.webp";
import yoga1 from "../../assets/images/yoga1.jpg";
import yoga3 from "../../assets/images/yoga2.jpg";
import morinkhur1 from "../../assets/images/morinkhu1.jpg";
import morinkhur2 from "../../assets/images/morinkhur2.jpeg";
import morinkhur3 from "../../assets/images/morinkhur3.jpg";

export const YogaTourDay3 = () => (
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
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>08:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive to Elsen Tasarkhai Sand Dunes (Mini Gobi)</div>
      </div>
       <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[sand1 , sand2 , sand3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
        <FaSpa style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Full-Day Yoga & Meditation in Desert with Morin Khuur Performance</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[yoga1, yoga2, yoga3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Vegetarian Lunch in Ger Camp</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaSpa style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Sound Healing Session with Morin Khuur & Nature Connection</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[morinkhur1, morinkhur2, morinkhur3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Light Dinner and Rest</div>
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
        <div>• Breakfast: Organic meal at accommodation</div>
        <div>• Lunch: Vegetarian at Ger Camp</div>
        <div>• Dinner: Light detox meal</div>
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
        <div style={{ fontWeight: "bold" }}>• Ride a camel in the Elsen Tasarkhai dunes</div>
        <div style={{ marginLeft: "10px" }}>
          Experience a calm and scenic camel ride through the beautiful desert landscape.
        </div>
      </div>
    
  </>
);
