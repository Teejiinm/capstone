import React, { useState } from 'react';
import './faq-section.css';

const faqData = [
  {
    question: 'How can I get around in Mongolia?',
    answer: 'Mongolia’s cities like Ulaanbaatar have public buses, taxis, and ride-hailing apps such as “UBCab.” In rural areas, transportation can be more limited. Many travelers book private drivers or join guided tours, especially when visiting remote places like the Gobi Desert. For budget travel, local minibuses (called “mikros”) are also available, though they may not follow strict schedules.',
  },
  {
    question: 'Do I need a visa to visit Mongolia?',
    answer: 'It depends on your nationality. Many countries have visa-free agreements with Mongolia for short stays (up to 30 or 90 days). Others will need to apply for a tourist visa at a Mongolian embassy or online (e-visa). Check the official immigration website or contact your local embassy before traveling.',
  },
  {
    question: 'Can I use foreign credit cards and what should I know about Mongolian currency?',
    answer: 'Mongolia uses the Tugrik (MNT). In Ulaanbaatar, most hotels, restaurants, and stores accept Visa and MasterCard, but cash is essential in rural areas. ATMs are widely available in cities. It’s best to exchange some cash at the airport or local banks. Note that USD, EUR, and CNY are the easiest to exchange. Avoid relying on cards alone, especially outside the capital.',
  },
  {
    question: 'Is Mongolia safe for solo travelers?',
    answer: 'Yes, Mongolia is generally safe for solo travelers, including women. Violent crime is rare, especially in the countryside. However, in cities like Ulaanbaatar, take normal precautions—watch out for pickpockets in crowded areas and avoid walking alone late at night. It’s also wise to plan your transport and accommodations ahead of time, especially when traveling to remote regions.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">{item.question}</div>
              {openIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
