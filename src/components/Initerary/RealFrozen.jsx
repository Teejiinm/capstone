import { FaHotel, FaUtensils, FaSnowflake, FaFire , FaBus, FaMapMarkerAlt, FaLandmark, FaMountain, FaShoppingBag} from "react-icons/fa";
import khuvsgul1 from "../../assets/images/khuvsgul1.jpg";
import khuvsgul2 from "../../assets/images/khuvsgul2.jpg";
import khuvsgul3 from "../../assets/images/khuvsgul3.jpeg";
import khorse1 from "../../assets/images/khorse1.webp";
import khorse2 from "../../assets/images/khorse2.jpg";
import khorse3 from "../../assets/images/khorse3.jpeg";
import lake1 from "../../assets/images/winterlake1.jpg";
import lake2 from "../../assets/images/winterlake2.jpeg";
import lake3 from "../../assets/images/winterlake3.png";
import tsaatan1 from "../../assets/images/tsaatan1.jpeg";
import tsaatan2 from "../../assets/images/tsaatan2.jpg";
import tsaatan3 from "../../assets/images/tsaatan3.avif";
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

export const RealFrozenDay1 = () => (
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
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.12.20 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>10:50</div>
      </div>
    </div>
    {/* Flight to Murun */}
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
        <div>2025.12.20 (Sat)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>12:00</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Aero Mongolia M901</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 1h 30m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Murun (MXV)</div>
        <div>2025.12.20 (Sat)</div>
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
        <div>Drive to Khuvsgul Lake and Check-in at Winter Lodge</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaSnowflake style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Scenic Walk on Frozen Khuvsgul Lake</div>
      </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[khuvsgul1, khuvsgul2, khuvsgul3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>


      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:30</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Traditional Dinner in Lodge</div>
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
        <div>• Breakfast: In Flight Meal</div>
        <div>• Lunch: Packed or Local Restaurant</div>
        <div>• Dinner: Hot Meal at Winter Lodge</div>
      </div>
    </div>
  </>
);

export const RealFrozenTourDay2 = () => (
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
        <FaSnowflake style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Horse Sledding Across Frozen Khuvsgul Lake</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[khorse1, khorse2, khorse3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch at Lodge with Hot Soup and Dumplings</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaSnowflake style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Scenic Winter Walk Along the Frozen Khatgal River</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[lake1, lake2 , lake3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>19:00</div>
        <FaFire style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Evening Bonfire & Storytelling under the Stars</div>
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
        <div>• Breakfast: Lodge Breakfast</div>
        <div>• Lunch: Hot Dumplings & Soup</div>
        <div>• Dinner: Traditional Stew at Ger Lodge</div>
      </div>
</div>
      {/* Optional Activities */}
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
          • Ride a Horse on Frozen Khuvsgul Lake ($25/person)
        </div>
        <div style={{ marginLeft: "10px" }}>
          Enjoy a peaceful horseback ride across the snow-covered surface of Lake Khuvsgul, guided by local wranglers.
        </div>
      </div>
    
  </>
);

export const RealFrozenTourDay3 = () => (
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
        <FaSnowflake style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Visit Tsaatan Reindeer Herders in the Taiga Forest</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[tsaatan1, tsaatan2, tsaatan3].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>13:00</div>
        <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Lunch with Tsaatan Family – Experience Nomadic Hospitality</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>15:00</div>
        <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Drive to Murun City & Check-in at Hotel</div>
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
        <div>• Breakfast: Lodge Breakfast</div>
        <div>• Lunch: Homecooked Meal with Tsaatan</div>
        <div>• Dinner: Local Restaurant in Murun</div>
      </div>
      </div>

      {/* Optional Activities */}
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
          • Wear Traditional Tsaatan Clothes ($15/person)
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          Try on the traditional fur-lined garments of the Tsaatan people for memorable photos and cultural immersion.
        </div>

        <div style={{ fontWeight: "bold" }}>
          • Ride a Reindeer ($20/person)
        </div>
        <div style={{ marginLeft: "10px" }}>
          Enjoy a short ride on a reindeer guided by local herders – a rare and unique experience.
        </div>
      </div>
    
  </>
);
export const RealFrozenTourDay4 = () => (
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
    <div style={{ fontWeight: "bold" }}>Departure: Murun (MXV)</div>
    <div>2025.12.23 (Tue)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>09:00</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Aero Mongolia M901</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 1h 30m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
    <div>2025.12.23 (Tue)</div>
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

export const RealFrozenTourDay5 = () => (
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
    <div>2025.12.24 (Wed)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>16:10</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE198</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 30m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Incheon (ICN)</div>
    <div>2025.12.24 (Wed)</div>
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
