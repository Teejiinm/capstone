import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpeg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.webp";
import tourImg10 from "../images/tour-img10.jpg";

import { SummerFestivalDay1, SummerFestivalDay2, SummerFestivalDay3, SummerFestivalDay4, SummerFestivalDay5 } from "../../components/Initerary/SummerFestival";
import { CityTourDay1, CityTourDay2, CityTourDay3, CityTourDay4 } from "../../components/Initerary/CityTour";
import { AdventureTourDay1, AdventureTourDay2, AdventureTourDay3, AdventureTourDay4, AdventureTourDay5, AdventureTourDay6, AdventureTourDay7 } from "../../components/Initerary/AdventureTour";
import { DessertTourDay1, DessertTourDay2, DessertTourDay3, DessertTourDay4, DessertTourDay5 } from "../../components/Initerary/DessertTour";
import { RealFrozenDay1, RealFrozenTourDay2, RealFrozenTourDay3, RealFrozenTourDay4, RealFrozenTourDay5 } from "../../components/Initerary/RealFrozen";
import { TraditionalTourDay1, TraditionalTourDay2, TraditionalTourDay3, TraditionalTourDay4 } from "../../components/Initerary/TraditionalTour";
import { GolfTourDay2 } from "../../components/Initerary/GolfTour";
import { WinterCityTourDay1, WinterCityTourDay2 } from "../../components/Initerary/WinterCityTour";
import { YogaTourDay3 } from "../../components/Initerary/YogaTour";
import { HistoricalTourDay1, HistoricalTourDay2, HistoricalTourDay3 } from "../../components/Initerary/HistoricalTour";

  const tours = [
    {
      id: "01",
      title: "Summer Festival Tour",
      city: "Ulaanbaatar",
      distance: 100,
      price: 1000,
      maxGroupSize: 10,
      desc: "Experience the essence of Mongolia where tradition and modern culture blend seamlessly. Witness the excitement of the Naadam Festival and dance the day away at the Playtime Music Festival. From nomadic adventures to vibrant city life, this summer tour captures the heart of Mongolia.",
      reviews: [
        {
          name: "jhon doe",
          rating: 4.6,
        },
      ],
      avgRating: 4.5,
      photo: tourImg01,
      featured: true,
      itinerary: [
        {
          day: "Day 1",
          date: "2025/07/08",
          route: "Incheon ➝ Terelj",
          Component: SummerFestivalDay1, // 실제 컴포넌트
        },
        {
          day: "Day 2",
          date: "2025/07/09",
          route: "Playtime Music Festival",
          Component: SummerFestivalDay2, // 실제 컴포넌트
        },
        {
          day: "Day 3",
          date: "2025/07/10",
          route: "Terelj ➝ Ulaanbaatar",
          Component: SummerFestivalDay3, // 실제 컴포넌트
        },
        {
          day: "Day 4",
          date: "2025/07/11",
          route: "Mongolian National Naadam Festival",
          Component: SummerFestivalDay4, // 실제 컴포넌트
        },
        {
          day: "Day 5",
          date: "2025/07/12",
          route: "Ulaanbaatar ➝ Incheon",

          Component: SummerFestivalDay5, // 실제 컴포넌트
        },
        
      ]
    },
    {
      id: "02",
      title: "City Tour",
      city: "Ulaanbaatar",
      distance: 50,
      price: 800,
      maxGroupSize: 10,
      desc: "Discover the vibrant spirit of Ulaanbaatar where history meets modern life. Explore ancient temples, bustling markets, and lively cultural scenes. From traditional performances to contemporary art, this tour immerses you in Mongolia’s dynamic capital.",
      reviews: [
        {
          name: "jhon doe",
          rating: 4.6,
        },
      ],
      avgRating: 4.5,
      photo: tourImg02,
      featured: true,
       itinerary: [
        {
          day: "Day 1",
          date: "2025/06/10",
          route: "Incheon ➝ Ulaanbaatar",
          Component: CityTourDay1, 
        },
        {
          day: "Day 2",
          date: "2025/06/11",
          route: "Historical Day Tour",
          Component: CityTourDay2,
        },
        {
          day: "Day 3",
          date: "2025/06/12",
          route: "Mongolian Art & Culturel Day",
          Component: CityTourDay3,
        },
        {
          day: "Day 4",
          date: "2025/06/13",
          route: "Ulaanbaatar ➝ Incheon",
          Component: CityTourDay4, 
        },
      ]
    },
    {
      id: "03",
      title: "Adventure Tour",
      city: "Bayan-Ulgii",
      distance: 1800,
      price: 2200,
      maxGroupSize: 8,
      desc: "Explore the wild beauty of Bayan-Ulgii with thrilling adventures — eagle hunting, mountain trekking, and vibrant Kazakh culture. Experience untouched nature, majestic Altai peaks, and traditional nomadic life in Mongolia’s western frontier.",
      reviews: [],
      avgRating: 0,
      photo: tourImg03,
      featured: true,
      itinerary: [
        {
          day: "Day 1",
          date: "2025/07/25",
          route: "Incheon ➝ Bayan-Ulgii",
          Component: AdventureTourDay1, 
        },
        {
          day: "Day 2",
          date: "2025/07/26",
          route: "Ulgii City Tour",
          Component: AdventureTourDay2, 
        },
           {
          day: "Day 3",
          date: "2025/07/27",
          route: "Ulgii City ➝ Altai Tavan Bogd",
          Component: AdventureTourDay3, 
        },
           {
          day: "Day 4",
          date: "2025/07/28",
          route: "Terkking Day",
          Component: AdventureTourDay4, 
        },
           {
          day: "Day 5",
          date: "2025/07/29",
          route: "Altai Tavan Bogd ➝ Ulgii City",
          Component: AdventureTourDay5, 
        },
             {
          day: "Day 6",
          date: "2025/07/30",
          route: "Ulgii City ➝ Ulaanbaatar City",
          Component: AdventureTourDay6, 
        },
            {
          day: "Day 7",
          date: "2025/07/31",
          route: "Ulaanbaatar City ➝ Incheon",
          Component: AdventureTourDay7, 
        },
      ]
    },
    {
      id: "04",
      title: "Dessert Tour",
      city: "Umnugobi",
      distance: 500,
      price: 1400,
      maxGroupSize: 8,
      desc: "Discover the vast beauty of Umnugovi Desert — towering sand dunes, ancient flaming cliffs, and star-filled skies. Experience camel rides, Gobi nomad culture, and breathtaking desert landscapes in Mongolia’s iconic wilderness.",
      reviews: [],
      avgRating: 0,
      photo: tourImg04,
      featured: true,
      itinerary: [
        {
          day: "Day 1",
          date: "2025/08/10",
          route: "Incheon ➝ Dalanzadgad",
          Component: DessertTourDay1, 
        },
         {
          day: "Day 2",
          date: "2025/08/11",
          route: "Dune Dessert Tour",
          Component: DessertTourDay2, 
        },
         {
          day: "Day 3",
          date: "2025/08/12",
          route: "Dalanzadgad City Tour",
          Component: DessertTourDay3, 
        },
         {
          day: "Day 4",
          date: "2025/08/13",
          route: "Dalanzadgad ➝ Ulaanbaatar",
          Component: DessertTourDay4, 
        },
         {
          day: "Day 5",
          date: "2025/08/14",
          route: "Ulaanbaatar ➝ Incheon",
          Component: DessertTourDay5, 
        },
      ]
    },
    {
      id: "05",
      title: "Real Frozen World",
      city: "Khuvsgul",
      distance: 800,
      price: 1800,
      maxGroupSize: 8,
      desc: "Embrace the magic of winter at Lake Khuvsgul — frozen crystal waters, snowy forests, and traditional nomadic life. Enjoy ice fishing, horse sleigh rides, and cozy ger stays amid Mongolia’s serene winter wilderness.",
      reviews: [],
      avgRating: 0,
      photo: tourImg05,
      featured: false,
      itinerary: [
        {
          day: "Day 1",
          date: "2025/12/20",
          route: "Incheon ➝ Murun",
          Component: RealFrozenDay1, 
        },
         {
          day: "Day 2",
          date: "2025/12/21",
          route: "Khuvsgul Lake",
          Component: RealFrozenTourDay2, 
        },
         {
          day: "Day 3",
          date: "2025/12/22",
          route: "Tsaatan Reindeer Herders",
          Component: RealFrozenTourDay3, 
        },
        {
          day: "Day 4",
          date: "2025/12/23",
          route: "Murun ➝ Ulaanbaatar",
          Component: RealFrozenTourDay4, 
        },
        {
          day: "Day 5",
          date: "2025/12/24",
          route: "Ulaanbaatar ➝ Incheon",
          Component: RealFrozenTourDay5, 
        },
        
      ]
    },
    {
      id: "06",
      title: "Traditional Tour",
      city: "Arkhangai",
      distance: 300,
      price: 1000,
      maxGroupSize: 8,
      desc: "Experience authentic Mongolian traditions in Arkhangai — ancient monasteries, nomadic herders, and untouched landscapes. Discover folk crafts, horseback riding, and warm ger hospitality in the heart of Mongolia’s cultural heritage.",
      reviews: [],
      avgRating: 0,
      photo: tourImg06,
      featured: false,
      itinerary: [
        {
          day: "Day 1",
          date: "2025/08/10",
          route: "Incheon ➝ Arkhangai",
          Component: TraditionalTourDay1, 
        },
         {
          day: "Day 2",
          date: "2025/08/11",
          route: "Erdene Zuu Monastery and Kharkhorin Museum",
          Component: TraditionalTourDay2, 
        },
         {
          day: "Day 3",
          date: "2025/08/12",
          route: "Mongolian Traditional Lifestyle",
          Component: TraditionalTourDay3, 
        },
         {
          day: "Day 4",
          date: "2025/08/13",
          route: "Arkhangai ➝ Ulaanbaatar",
          Component: TraditionalTourDay4, 
        },
         {
          day: "Day 5",
          date: "2025/08/14",
          route: "Ulaanbaatar ➝ Incheon",
          Component: DessertTourDay5, 
        },
      ]
    },
    {
      id: "07",
      title: "Golf Tour",
      city: "Ulaanbaatar",
      distance: 100,
      price: 900,
      maxGroupSize: 8,
      desc: "Tee off in Ulaanbaatar’s scenic golf courses surrounded by stunning Mongolian landscapes. Enjoy modern facilities, fresh air, and a perfect blend of sport and nature in the vibrant capital.",
      reviews: [],
      avgRating: 0,
      photo: tourImg07,
      featured: false,
      itinerary: [
        {
          day: "Day 1",
          date: "2025/07/08",
          route: "Incheon ➝ Terelj",
          Component: SummerFestivalDay1, 
        },
         {
          day: "Day 2",
          date: "2025/07/09",
          route: "Golf Day",
          Component: GolfTourDay2, 
        },
         {
          day: "Day 3",
          date: "2025/07/10",
          route: "Terelj ➝ Ulaanbaatar",
          Component: SummerFestivalDay3, 
        },
         {
          day: "Day 4",
          date: "2025/07/11",
          route: "Mongolian National Naadam Festival",
          Component: SummerFestivalDay4, // 실제 컴포넌트
        },
        {
          day: "Day 5",
          date: "2025/07/12",
          route: "Ulaanbaatar ➝ Incheon",

          Component: SummerFestivalDay5, // 실제 컴포넌트
        },

      ]
    },
    {
      id: "08",
      title: "Winter's City Tour",
      city: "Ulaanbaatar",
      distance: 100,
      price: 900,
      maxGroupSize: 8,
      desc: "Experience Ulaanbaatar’s winter charm and venture to Terelj National Park for horseback riding and thrilling dog sledding. Discover snowy landscapes, traditional nomadic culture, and unforgettable outdoor adventures.",
      reviews: [],
      avgRating: 0,
      photo: tourImg08,
      featured: false,
      itinerary: [
      {
          day: "Day 1",
          date: "2025/12/20",
          route: "Incheon ➝ Ulaanbaatar",
          Component: WinterCityTourDay1, 
        },
        {
          day: "Day 2",
          date: "2025/12/21",
          route: "Terelj National Park",
          Component: WinterCityTourDay2, 
        },
        {
          day: "Day 3",
          date: "2025/12/22",
          route: "Historical Day Tour",
          Component: CityTourDay2,
        },
        {
          day: "Day 4",
          date: "2025/12/23",
          route: "Mongolian Art & Culturel Day",
          Component: CityTourDay3,
        },
        {
          day: "Day 5",
          date: "2025/12/24",
          route: "Ulaanbaatar ➝ Incheon",
          Component: RealFrozenTourDay5, 
        },
      ]
    },
    {
  id: "09",
  title: "Yoga & MorinKhur in Nature",
  city: "Arkhangai",
  distance: 300,
  price: 1200,
  maxGroupSize: 10,
  desc: "Experience deep relaxation as you practice yoga in Mongolia's serene landscapes, guided by the soulful sounds of the traditional Morin Khuur. Let the music of the steppe connect your breath to nature.",
  reviews: [],
  avgRating: 0,
  photo: tourImg09,
  featured: false,
  itinerary: [
     {
          day: "Day 1",
          date: "2025/08/10",
          route: "Incheon ➝ Arkhangai",
          Component: TraditionalTourDay1, 
        },
         {
          day: "Day 2",
          date: "2025/08/11",
          route: "Erdene Zuu Monastery and Kharkhorin Museum",
          Component: TraditionalTourDay2, 
        },
         {
          day: "Day 3",
          date: "2025/08/12",
          route: "Yoga with Morin Khuur in Dessert",
          Component: YogaTourDay3, 
        },
         {
          day: "Day 4",
          date: "2025/08/13",
          route: "Arkhangai ➝ Ulaanbaatar",
          Component: TraditionalTourDay4, 
        },
         {
          day: "Day 5",
          date: "2025/08/14",
          route: "Ulaanbaatar ➝ Incheon",
          Component: DessertTourDay5, 
        },
  ]
},

    {
  id: "10",
  title: "Culture & Historical Tour",
  city: "Khentii",
  distance: 400,
  price: 1250,
  maxGroupSize: 10,
  desc: "Experience rich Mongolian culture in Ulaanbaatar’s museums and traditional sites, then explore Khentii’s historic landmarks including Chinggis Khan’s birthplace and ancient monuments.",
  reviews: [],
  avgRating: 0,
  photo: tourImg10,
  featured: false,
  itinerary: [
    {
          day: "Day 1",
          date: "2025/06/08",
          route: "Incheon ➝ Khentii",
          Component: HistoricalTourDay1,
        },
         {
          day: "Day 2",
          date: "2025/06/09",
          route: "Land of Chingis Khan",
          Component: HistoricalTourDay2,
        },
         {
          day: "Day 3",
          date: "2025/06/10",
          route: "Khentii ➝ Ulaanbaatar",
          Component: HistoricalTourDay3,
        },
     {
          day: "Day 4",
          date: "2025/06/11",
          route: "Historical Day Tour",
          Component: CityTourDay2,
        },
        {
          day: "Day 5",
          date: "2025/06/12",
          route: "Mongolian Art & Culturel Day",
          Component: CityTourDay3,
        },
        {
          day: "Day 6",
          date: "2025/06/13",
          route: "Ulaanbaatar ➝ Incheon",
          Component: CityTourDay4, 
        },

  ]
},

    
  ];

export default tours;
