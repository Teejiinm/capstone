import React from 'react';
import './blog-card.css';
import { Link } from 'react-router-dom';

import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg'; 
import blog3 from '../assets/images/blog3.jpg'; 
import blog4 from '../assets/images/blog4.webp'; 
import blog5 from '../assets/images/blog5.jpg'; 
import blog6 from '../assets/images/blog6.webp'; 
import blog7 from '../assets/images/blog7.webp'; 
import blog8 from '../assets/images/blog8.jpg'; 


export const blog = [
  {
    id: 1,
    title: 'Mongolian Desert Adventure: Where Silence Meets the Sands',
    content: 'The Mongolian desert, especially the vast Gobi, is a place where silence stretches endlessly and the sky feels impossibly wide. It’s not just a desert—it’s a living, breathing landscape filled with ancient stories, rugged terrain, and moments of pure stillness.\n\nUnlike the typical image of endless dunes, the Gobi is diverse. There are gravel plains, dramatic cliffs, fossil-rich areas, and even green patches near hidden springs. It’s a land shaped by wind and time, home to nomads who have lived in harmony with nature for generations.\n\nOne of the most unforgettable experiences is watching the sun set over the Khongoryn Els dunes, also known as the "Singing Sands." As the light fades, the wind moves through the sand, creating a low hum that feels both eerie and beautiful—like the desert is whispering its secrets.\n\nThe Mongolian desert isn’t just a destination. It’s a journey inward. A place to slow down, to listen, and to reconnect—with nature, with silence, and perhaps, with yourself.',
    image: blog1,
    date: '2024-06-10'
  },
  {
    id: 2,
    title: 'Wandering Through the Gobi: An Oasis of Solitude',
    content: 'The Gobi Desert isn’t just a barren stretch of land. It’s an enigmatic world of contrasts—from its vast, empty stretches of sand to its hidden oases that surprise with bursts of life. This adventure takes you through one of the most serene and untamed landscapes on Earth. The Gobi’s vastness creates a sense of isolation, yet this quiet solitude offers an unmatched opportunity for reflection and connection with nature.\n\nAs you venture through the desert, the terrain shifts constantly, offering new and unexpected views: towering sand dunes, jagged cliffs, and the occasional nomadic ger. But the real magic lies in the moments of stillness—sitting on the sand as the wind whispers, and gazing at the endless horizon where the earth meets the sky.\n\nThe Gobi Desert is not just a place to visit; it’s a place to immerse yourself in a world where time seems to stand still, and the only sounds you hear are the winds of history sweeping through the dunes.',
    image: blog2,
    date: '2024-06-15'
  },
  {
    id: 3,
    title: 'Life Among the Nomads: The Heartbeat of Mongolia',
    content: 'Journey into the heart of Mongolia and experience life through the eyes of its nomadic herders. The Mongolian people have lived in harmony with nature for centuries, and their way of life remains steeped in tradition. These nomads lead a life unlike any other, where each day revolves around the rhythms of the land and the animals they care for.\n\nFrom their portable homes, known as gers, to their deep knowledge of the land and weather, nomadic herders possess an extraordinary connection to nature. Their lifestyle is dictated by the seasons, as they follow the herds from pasture to pasture, depending on the availability of food and water.\n\nSpending time with these herders offers a glimpse into a lifestyle that has remained unchanged for thousands of years. Whether it’s milking yaks in the early morning or sitting around the fire in the evening, the experience is a profound reminder of the simplicity and beauty of life lived in close connection with the earth.',
    image: blog3,
    date: '2024-06-18'
  },
  {
    id: 4,
    title: 'A Taste of Mongolia: Culinary Adventures in the Steppe',
    content: 'Mongolian cuisine offers a unique culinary experience deeply rooted in the traditions of its nomadic people. The diet of a Mongolian herder is shaped by the land itself, with meats, dairy, and grains making up the core of their daily meals. This blog takes you on a gastronomic journey through the heart of Mongolia, where you’ll discover how the land’s harsh conditions shape the flavors of its food.\n\nFrom steaming bowls of meat stew to savory dumplings filled with lamb and vegetables, each dish tells a story of survival and resourcefulness. Traditional Mongolian dishes are designed for warmth and sustenance, ideal for the harsh winters and long journeys across the vast steppes. And let’s not forget the fermented mare’s milk, a traditional drink that offers both refreshment and a taste of Mongolia’s deep-rooted customs.\n\nTrying Mongolian food isn’t just about satisfying hunger—it’s about experiencing the culture in its most authentic form, where every bite connects you to centuries of tradition and the harsh yet beautiful land that defines this ancient civilization.',
    image: blog4,
    date: '2024-06-20'
  },
  {
    id: 5,
    title: 'Trekking the Mongolian Steppes: A Walk Through History',
    content: 'The Mongolian Steppes are one of the last great wildernesses in the world, offering trekkers a chance to walk through history. This vast, windswept plain is not only stunning in its beauty but also rich in cultural significance. From the legendary rise of the Mongol Empire to the traditions of the nomadic people, the Steppes are a living monument to the past.\n\nTrekking across the Steppes means walking in the footsteps of history. The land is dotted with ancient burial mounds, historic ruins, and even the remnants of Genghis Khan’s empire. But it’s not just about the past—it’s about the present too. The Steppes are home to modern-day nomads who still live a life that echoes the ancient ways, moving with the seasons and living off the land.\n\nWhether you’re following ancient trade routes or simply taking in the endless horizon, trekking the Mongolian Steppes is an adventure that brings history, culture, and nature together in a truly unforgettable way.',
    image: blog5,
    date: '2024-06-22'
  },
  {
    id: 6,
    title: 'Mongolian Heritage: A Journey Into the Past',
    content: 'Mongolia’s culture is rich in traditions, history, and stories passed down through generations. This blog takes you on a journey through Mongolia’s fascinating heritage, exploring ancient monuments, folklore, and the spiritual practices that have shaped this remarkable nation.\n\nFrom the majestic Buddhist monasteries perched on mountaintops to the ancient petroglyphs carved into the cliffs of the Gobi Desert, Mongolia’s heritage is as diverse as the landscape itself. Alongside its cultural landmarks, Mongolia is also home to a rich tradition of oral storytelling, with elders passing down ancient myths, legends, and songs that continue to shape the national identity.\n\nExploring Mongolia’s heritage offers more than just a glimpse into the past—it offers a chance to understand the enduring strength of a culture that has survived centuries of conquest, modernization, and change. The more you explore, the more you realize that Mongolia’s true spirit is found not only in its monuments but in the hearts of its people who continue to preserve and celebrate these traditions.',
    image: blog6,
    date: '2024-06-25'
  },
  {
    id: 7,
    title: 'Adventures in the Steppes: A Traveler’s Guide to Mongolia',
    content: 'Mongolia is a country of extremes: vast deserts, towering mountains, and endless plains. But its true beauty lies in the wide open spaces of the Steppes—a land that seems to stretch forever and offers the perfect backdrop for adventure. This blog serves as a comprehensive travel guide for anyone looking to explore Mongolia’s rugged wilderness.\n\nWhether you’re an avid trekker or a first-time adventurer, the Steppes offer something for everyone. From the deep blue skies and rolling hills to the chance to meet nomadic herders and experience their way of life, a trip to Mongolia is a journey into a land where time moves slowly, and the beauty of nature takes center stage.\n\nIn this guide, you’ll find everything you need to plan your trip—from the best routes for trekking to tips on how to connect with local nomads. Prepare to be amazed by the untouched beauty of Mongolia’s Steppes, and get ready to experience adventure like never before.',
    image: blog7,
    date: '2024-06-28'
  },
  {
    id: 8,
    title: 'Mongolian Traditions: Preserving the Past in the Modern World',
    content: 'In a rapidly changing world, Mongolia is one of the few places where ancient traditions remain alive. From music and dance to unique craftsmanship, Mongolia’s cultural practices are a testament to its people’s resilience and love for their heritage. This blog explores the ways in which Mongolian culture is preserved and celebrated in the modern world.\n\nMongolia’s commitment to preserving its heritage is evident in its traditional crafts, such as intricate leatherwork, felt-making, and wood carving, which continue to be passed down through generations. The music of Mongolia, with its haunting throat singing and traditional instruments, also plays a crucial role in keeping the past alive.\n\nAs Mongolia rapidly modernizes, its people continue to hold fast to the traditions that have defined their identity for centuries. By attending festivals, visiting cultural centers, and experiencing these practices firsthand, you can truly appreciate how the past and present coexist in a way that honors both Mongolia’s rich history and its future.',
    image: blog8,
    date: '2024-07-01'
  }
];


const BlogCard = ({ blog }) => {
  // 첫 20단어만 추출
  const getPreview = (text) => {
    const words = text.split(' ').slice(0, 20).join(' ');
    return words + '...';
  };

  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="content">
        <h3>{blog.title}</h3>
        <p>{getPreview(blog.content)}</p>

        <button className="read-more">
          <Link to={`/blogs/${blog.id}`} style={{ color: 'white', textDecoration: 'none' }}>
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};
export default BlogCard;