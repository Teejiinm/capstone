import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCloudSun, FaSuitcase, FaArrowRight } from 'react-icons/fa';
import './service-card.css';
import { GiDumplingBao, GiHorseHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const cardData = [
  { id: 1, icon: <FaCloudSun />, title: 'Weather & Geography' },
  { id: 2, icon: <GiDumplingBao />, title: 'Food & Drinks' },
  { id: 3, icon: <FaSuitcase />, title: 'Packing List' },
  { id: 4, icon: <GiHorseHead />, title: 'To-Do List' },
];

const ServiceCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="info__section">
      <Container>
        <Row className="justify-content-center gy-4">
  {cardData.map((card) => (
  <Col lg="6" md="6" key={card.id}>
    <Link to="/about" className="info__card__link">
      <div
        className={`info__card ${hoveredCard === card.id ? 'hovered' : ''}`}
        onMouseEnter={() => setHoveredCard(card.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="info__icon">{card.icon}</div>
        <h5 className="info__title">{card.title}</h5>
        <button className="info__go">
          <FaArrowRight />
        </button>
      </div>
    </Link>
  </Col>
))}

</Row>

      </Container>
    </section>
  );
};

export default ServiceCard;