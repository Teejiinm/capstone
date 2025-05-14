import React from 'react'
import './common-section.css'

import { Container, Row, Col } from 'reactstrap';

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <h1>{title}</h1>
    </section>
  );
};

export default CommonSection;