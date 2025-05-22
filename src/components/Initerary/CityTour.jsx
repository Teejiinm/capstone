import React from "react";
import { FaBus, FaHotel, FaTheaterMasks, FaMusic, FaShoppingBag, FaWalking, FaUtensils, FaCamera, FaUniversity, FaMapMarkedAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import shopping1 from "../../assets/images/shopping1.jpg";
import shopping2 from "../../assets/images/shopping2.jpg";
import shopping3 from "../../assets/images/shopping3.jpg";
import ubhotel1 from "../../assets/images/ubhotel1.avif";
import ubhotel2 from "../../assets/images/ubhotel2.avif";
import ubhotel3 from "../../assets/images/ubhotel3.jpg";
import restaurant1 from "../../assets/images/restaurant1.webp";
import restaurant2 from "../../assets/images/restaurant2.jpg";
import restaurant3 from "../../assets/images/restaurant3.jpg";
import ubnight1 from "../../assets/images/ubnight1.jpg";
import ubnight2 from "../../assets/images/ubnight2.jpg";
import ubnight3 from "../../assets/images/ubnight3.jpg";
import sukhbaatar1 from "../../assets/images/sukhbaatar1.jpg";
import sukhbaatar2 from "../../assets/images/sukhbaatar2.jpg";
import sukhbaatar3 from "../../assets/images/sukhbaatar3.jpg";
import museum1 from "../../assets/images/museum1.jpg";
import museum2 from "../../assets/images/museum2.webp";
import museum3 from "../../assets/images/museum3.jpg";
import club1 from "../../assets/images/club1.png";
import club2 from "../../assets/images/club2.png";
import club3 from "../../assets/images/club3.jpg";
import gandan1 from "../../assets/images/gandan1.jpg";
import gandan2 from "../../assets/images/gandan2.jpg";
import gandan3 from "../../assets/images/gandan3.jpg";
import choijin1 from "../../assets/images/choijin1.jpg";
import choijin2 from "../../assets/images/choijin2.jpg";
import choijin3 from "../../assets/images/choijin3.jpg";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpeg";
import gallery3 from "../../assets/images/gallery3.jpeg";
import bogd1 from "../../assets/images/blog8.jpg";
import bogd2 from "../../assets/images/bogd1.jpg";
import bogd3 from "../../assets/images/bogd3.jpg";
import mglkhan1 from "../../assets/images/mglkhan1.jpg";
import mglkhan2 from "../../assets/images/mglkhan2.jpg";
import mglkhan3 from "../../assets/images/mglkhan3.webp";

export const CityTourDay1 = () => (
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
        <div>2025.06.10 (Tue)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:40</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.06.10 (Tue)</div>
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

export const CityTourDay2 = () => (
    <>
  
   <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  {/* 일정 항목 */}
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
    <FaMapMarkedAlt style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Visit Gandantegchinlen Monastery</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[gandan1, gandan2, gandan3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00</div>
    <FaUniversity style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Chingis Khaan National Museum of Mongolia</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[museum1, museum2, museum3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Lunch at BD's Mongolian BBQ</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
    <FaCamera style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Explore Sukhbaatar Square and Parliament House</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[sukhbaatar1, sukhbaatar3, sukhbaatar2].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Local Hot Pot Restaurant</div>
  </div>


 <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
    <div>• Breakfast: Hotel Buffet</div>
    <div>• Lunch: Mongolian BBQ</div>
    <div>• Dinner: Local Hot Pot Restaurant</div>
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
      • Watching Traditional Music and Dance Show ($25/person/1hr)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Enjoy a live performance of Mongolian folk music and traditional dances inside the National Museum.
    </div>
  </div>
</div>



    </>

); 

export const CityTourDay3 = () => (
<>
<div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
    <FaUniversity style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Choijin Lama Temple Museum</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[choijin1, choijin2, choijin3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00</div>
    <FaCamera style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Mongolian Art Gallery</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[gallery1, gallery2, gallery3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>
  

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>14:00</div>
    <FaUtensils style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Lunch at Luna Blanca (Vegetarian)</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
    <FaMapMarkedAlt style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Bogd Khan Winter Palace Museum</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[bogd1, bogd2, bogd3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>19:00</div>
    <FaTheaterMasks style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Watch The Mongol Khan drama at State Academic Theatre</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[mglkhan1, mglkhan2, mglkhan3].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
</div>
  <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
    <div>• Breakfast: Hotel Buffet</div>
    <div>• Lunch: Luna Blanca</div>
    <div>• Dinner: Korean Food</div>
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
      • Mongolian Calligraphy Experience at Art Gallery ($15/person/45min)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Learn the basics of traditional Mongolian script and try your hand at calligraphy under the guidance of a local artist.
    </div>
  </div>
</div>

</>
);

export const CityTourDay4 = () => (
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
    <div>2025.06.13 (Fri)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>16:10</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE198</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 30m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Incheon (ICN)</div>
    <div>2025.06.13 (Fri)</div>
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