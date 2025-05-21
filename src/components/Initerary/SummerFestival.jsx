import React from "react";
import { FaBus, FaHotel, FaMapMarkerAlt, FaStar, FaMusic, FaLandmark, FaMountain, FaFlag, FaShoppingBag } from "react-icons/fa";
import { GiHorseHead, GiBowman } from "react-icons/gi";
import chingiskhanstatue2 from "../../assets/images/chingiskhanstatue2.jpg";
import chingiskhanstatue3 from "../../assets/images/chingiskhanstatue3.jpg";
import chingiskhanstatue4 from "../../assets/images/chingiskhanstatue4.jpg";
import horseride1 from "../../assets/images/horseride1.jpg";
import horseride2 from "../../assets/images/horseride2.jpg";
import horseride3 from "../../assets/images/horseride3.jpg";
import terelj1 from "../../assets/images/tereljhotel.jpg";
import terelj2 from "../../assets/images/tereljhotel2.jpg";
import terelj3 from "../../assets/images/tereljhotel3.jpg";
import star1 from "../../assets/images/star1.jpg";
import star2 from "../../assets/images/star2.webp";
import star3 from "../../assets/images/star3.jpg";
import playtime1 from "../../assets/images/playtime1.jpg";
import playtime2 from "../../assets/images/playtime2.jpg";
import playtime3 from "../../assets/images/playtime3.jpg";
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
import naadam1 from "../../assets/images/naadam1.jpg";
import naadam2 from "../../assets/images/naadam2.jpg";
import naadam3 from "../../assets/images/naadam3.jpg";
import naadam4 from "../../assets/images/naadam4.jpg";
import naadam5 from "../../assets/images/naadam5.jpg";
import naadam6 from "../../assets/images/tour-img01.jpg";
import shopping1 from "../../assets/images/shopping1.jpg";
import shopping2 from "../../assets/images/shopping2.jpg";
import shopping3 from "../../assets/images/shopping3.jpg";


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
        <div>2025.07.08 (Tue)</div>
        <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>08:10</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE197</div>
        <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 40m</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={{ fontWeight: "bold" }}>Arrival: Ulaanbaatar (UBN)</div>
        <div>2025.07.08 (Tue)</div>
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[chingiskhanstatue2, chingiskhanstatue3, chingiskhanstatue4].map((src, i) => (
          <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center",  marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
        <GiHorseHead style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Horseback riding in the Terelj valley</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[horseride1, horseride2, horseride3].map((src, i) => (
          <img key={i} src={src} alt={`Horse ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>18:00</div>
        <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Check-in: Traditional Mongolian Ger Hotel</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[terelj1, terelj2, terelj3].map((src, i) => (
          <img key={i} src={src} alt={`Terelj ${i}`} style={{ maxWidth: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>21:00</div>
        <FaStar style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
        <div>Night: Stargazing under the Mongolian sky</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
        {[star1, star2, star3].map((src, i) => (
          <img key={i} src={src} alt={`Terelj ${i}`} style={{ maxWidth: "200px", height: "130px", borderRadius: "8px" }} />
        ))}
      </div>
     {/* Simple Food Summary */}
<div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
  <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
  <div>• Breakfast: In-flight meal</div>
  <div>• Lunch: Khorkhog (Mongolian stone-grilled lamb)</div>
  <div>• Dinner: Buuz (steamed dumplings)</div>
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

  <div style={{ marginBottom: "15px" }}>
    <div style={{ fontWeight: "bold" }}>
      • Falcon in Chinggis Khan Statue ($50/person/1hr)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Experience the majestic falcons while visiting the Chinggis Khan Statue. 
      Enjoy a unique opportunity to interact with these birds.
    </div>
  </div>

  <div>
    <div style={{ fontWeight: "bold" }}>
      • Nomadic Horse Show Experience ($40/person/1hr)
    </div>
    <div style={{ marginLeft: "10px" }}>
      A traditional nomadic performance introducing Mongolian cultural heritage.
    </div>
  </div>
</div>

  </>
);


export const SummerFestivalDay2 = () => (
    <>
      
      <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
          <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
          <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
          <div> Departure to Playtime Music Festival</div>
        </div>
  
        <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
  <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>11:00~22:00</div>
  <div style={{ paddingLeft: "40px", display: "flex", alignItems: "center" }}>
    <FaMusic style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
    <div>Enjoying the Playtime Music Festival (All-day pass)</div>
  </div>
</div>

  
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[playtime1, playtime2, playtime3].map((src, i) => (
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
      <div>• Lunch: Festival food trucks (variety of options)</div>
      <div>• Dinner: Local Mongolian BBQ</div>
    </div>
    </div>
    

  
    </>
);
  
export const SummerFestivalDay3 = () => (
<>
<div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
<div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
  <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
  <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
  <div>Depart from Terelj National Park to Ulaanbaatar (Duration: 1hour)</div>
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
export const SummerFestivalDay4 = () => (
    <>
    <div style={{ borderLeft: "2px solid blue", paddingLeft: "20px", marginLeft: "10px", marginTop: "30px", lineHeight: "1.8" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>09:00</div>
    <FaBus style={{ fontSize: "18px", color: "blue", marginRight: "10px", marginLeft: "5px" }} />
    <div>Departure to Naadam Festival Venue</div>
  </div>

  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>10:00</div>
    <FaFlag style={{ fontSize: "18px", color: "blue", marginRight: "10px", marginLeft: "5px" }} />
    <div>Watch Naadam Opening Ceremony (Parade & National Celebration)</div>
  </div>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
          {[naadam1, naadam2, naadam6].map((src, i) => (
            <img key={i} src={src} alt={`Statue ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
          ))}
        </div>

        <div style={{ marginBottom: "25px" }}>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>12:00~16:00</div>
    <div style={{ paddingLeft: "30px", display: "flex", alignItems: "center" }}>
      <GiBowman style={{ fontSize: "18px", color: "blue", marginRight: "10px" }} />
      <div>Watch Mongolian Traditional Sports (Wrestling, Archery, Horse Racing)</div>
    </div>
  </div>

  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "-20px" }}>
    {[naadam4, naadam5, naadam3].map((src, i) => (
      <img key={i} src={src} alt={`Naadam ${i}`} style={{ width: "200px", height: "130px", borderRadius: "8px" }} />
    ))}
  </div>
  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
    <div style={{ width: "70px", fontWeight: "bold", color: "#555" }}>16:00</div>
    <FaHotel style={{ fontSize: "18px", color: "blue", marginRight: "10px", marginLeft: "5px" }} />
    <div>Go back to hotel and Freetime</div>
  </div>
</div>

  {/* Simple Food Summary */}
  <div style={{ marginTop: "30px", padding: "15px 20px", backgroundColor: "#f9f9f9", borderRadius: "10px", borderLeft: "4px solid blue" }}>
    <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>🍽️ Meals of the Day</div>
    <div>• Breakfast: Hotel Buffet</div>
    <div>• Lunch: Festival Food (Khuushuur and Airag - Mongolian national drink)</div>
    <div>• Dinner: Mongolian BBQ</div>
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

  <div style={{ marginBottom: "15px" }}>
    <div style={{ fontWeight: "bold" }}>
      • Wear Traditional Mongolian Clothes ($20/person)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Dress in authentic Mongolian attire and capture the essence of local culture.
    </div>
  </div>

  <div>
    <div style={{ fontWeight: "bold" }}>
      • Explore Archery Experience ($25/person)
    </div>
    <div style={{ marginLeft: "10px" }}>
      Try your hand at traditional Mongolian archery, a skill passed down through generations.
    </div>
  </div>
</div>

    </>
);
export const SummerFestivalDay5 = () => (
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
    <div>2025.07.12 (Sat)</div>
    <div style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>16:10</div>
  </div>

  <div style={{ textAlign: "center" }}>
    <div style={{ marginBottom: "4px", fontSize: "14px" }}>Korean Air KE198</div>
    <div style={{ color: "blue", fontWeight: "bold" }}>Duration: 3h 30m</div>
  </div>

  <div style={{ textAlign: "right" }}>
    <div style={{ fontWeight: "bold" }}>Arrival: Incheon (ICN)</div>
    <div>2025.07.12 (Sat)</div>
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