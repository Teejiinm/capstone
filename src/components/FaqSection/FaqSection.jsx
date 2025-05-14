import React, { useState } from 'react';
import './faq-section.css';

const faqData = [
  {
    question: 'What is the best time to travel to Mongolia?',
    answer: 'The best time to visit Mongolia is from June to August when the weather is warm and festivals are held.',
  },
  {
    question: 'Do I need a visa to visit Mongolia?',
    answer: 'It depends on your nationality. Many countries are visa-exempt for short stays, but check with the Mongolian embassy.',
  },
  {
    question: 'What should I pack for a trip to Mongolia?',
    answer: 'Layered clothing, sturdy shoes, sunscreen, and a good camera are essential for exploring Mongolia.',
  },
  {
    question: 'Is Mongolia safe for solo travelers?',
    answer: 'Yes, Mongolia is generally safe, but always take usual precautions and respect local customs.',
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
