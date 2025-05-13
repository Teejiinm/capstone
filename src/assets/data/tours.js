import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.webp";
import tourImg05 from "../images/tour-img05.jpeg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

import { SummerFestivalDay1, SummerFestivalDay2, SummerFestivalDay3, SummerFestivalDay4, SummerFestivalDay5 } from "../../components/Initerary/SummerFestival";

  const tours = [
    {
      id: "01",
      title: "Summer Festival Tour",
      city: "Ulaanbaatar",
      distance: 100,
      price: 99,
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
          route: "Incheon ➝ Ulaanbaatar",
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
      distance: 100,
      price: 99,
      maxGroupSize: 10,
      desc: " ",
      reviews: [
        {
          name: "jhon doe",
          rating: 4.6,
        },
      ],
      avgRating: 4.5,
      photo: tourImg02,
      featured: true,
    },
    {
      id: "03",
      title: "Adventure Tour",
      city: "Bayan-Ulgii",
      distance: 1800,
      price: 599,
      maxGroupSize: 8,
      desc: "This is the description",
      reviews: [],
      avgRating: 0,
      photo: tourImg03,
      featured: true,
    },
    {
      id: "04",
      title: "Dessert Tour",
      city: "Umnugobi",
      distance: 500,
      price: 299,
      maxGroupSize: 8,
      desc: "This is the description",
      reviews: [],
      avgRating: 0,
      photo: tourImg04,
      featured: true,
    },
    {
      id: "05",
      title: "Real Frozen World",
      city: "Khuvsgul",
      distance: 800,
      price: 399,
      maxGroupSize: 8,
      desc: "This is the description",
      reviews: [],
      avgRating: 0,
      photo: tourImg05,
      featured: false,
    },
    {
      id: "06",
      title: "Traditional Tour",
      city: "Arkhangai",
      distance: 300,
      price: 299,
      maxGroupSize: 8,
      desc: "This is the description",
      reviews: [],
      avgRating: 0,
      photo: tourImg06,
      featured: false,
    },
    {
      id: "07",
      title: "Golf Tour",
      city: "Ulaanbaatar",
      distance: 100,
      price: 149,
      maxGroupSize: 8,
      desc: "This is the description",
      reviews: [],
      avgRating: 0,
      photo: tourImg07,
      featured: false,
    },
    {
      id: "08",
      title: "Winter's City Tour",
      city: "Ulaanbaatar",
      distance: 100,
      price: 199,
      maxGroupSize: 8,
      desc: "This is the description",
      reviews: [],
      avgRating: 0,
      photo: tourImg08,
      featured: false,
    },
    
  ];

export default tours;
