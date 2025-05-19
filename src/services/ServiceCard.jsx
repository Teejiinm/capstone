import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCloudSun, FaSuitcase, FaArrowRight } from 'react-icons/fa';
import { GiDumplingBao, GiHorseHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './service-card.css';

const cardData = [
  {
    id: 1,
    icon: <FaCloudSun />,
    title: 'Weather & Geography',
    path: '/about',
    hash: '#weather',
  },
  {
    id: 2,
    icon: <GiDumplingBao />,
    title: 'Food & Drinks',
    path: '/about',
    hash: '#food',
  },
  {
    id: 3,
    icon: <FaSuitcase />,
    title: 'Packing List',
    path: '/about',
    hash: '#packing',
  },
  {
    id: 4,
    icon: <GiHorseHead />,
    title: 'To-Do List',
    path: '/about',
    hash: '#todo',
  },
];

const ServiceCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="info__section">
      <Container>
        <Row className="justify-content-center gy-4">
          {cardData.map((card) => (
            <Col lg="6" md="6" key={card.id}>
              <Link
                to={{ pathname: card.path, hash: card.hash }}
                className="info__card__link"
              >
                <div
                  className={`info__card ${hoveredCard === card.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="info__icon">{card.icon}</div>
                  <h5 className="info__title">{card.title}</h5>
                  <button className="info__go" aria-label={`Go to ${card.title}`}>
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
