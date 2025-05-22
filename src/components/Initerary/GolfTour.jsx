import { FaBus, FaGolfBall } from "react-icons/fa";
import golf1 from "../../assets/images/golf1.jpg";
import golf2 from "../../assets/images/golf2.jpg";
import golf3 from "../../assets/images/golf3.jpg";


export const GolfTourDay2 = () => (
    <>
      
      <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
          <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
          <div> Departure to Terelj National Park Golf Course</div>
        </div>
  
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
  <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>11:00~22:00</div>
  <div style={{ paddingLeft: "40px", display: "flex", alignItems: "center" }}>
    <FaGolfBall style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Enjoying the Golf Course (All-day pass)</div>
  </div>
</div>

  
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[golf1 , golf2 , golf3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
        </div>

        
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>22:00</div>
          <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
          <div> Go back to Hotel</div>
        </div>

        <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
        <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
      <div>• Breakfast: In-hotel breakfast buffet</div>
      <div>• Lunch: Buffet food trucks (variety of options)</div>
      <div>• Dinner: Local Mongolian BBQ</div>
    </div>
    </div>
    

  
    </>
);