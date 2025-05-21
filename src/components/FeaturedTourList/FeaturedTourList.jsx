import React from 'react';
import { Row, Col } from 'reactstrap';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';

const FeaturedTourList = () => {
  return (
    <Row>
      {tourData.slice(0, 8).map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedTourList;

