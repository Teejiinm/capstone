import React, {useState, useEffect} from "react";
import '../styles/home.css';


import Helmet from "../components/Helmet/Helmet";

import {Link} from "react-router-dom";
import Subtitle from "../shared/Subtitle";


import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/IMG_4102.jpg";


import ServiceList from "../services/ServiceList";
import Blog from "../components/Blog/Blog";
import FeaturedTourList from "../components/FeaturedTourList/FeaturedTourList";



const Home = () => {

   
    return (

    <Helmet title={"Home"}>
    {/*-----------hero---------*/}
    <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1>Welcome to Mongolia</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
    {/*-----------hero end---------- */}
    
    {/*--------Tours--------*/}
    
    <section className="hotels">
        <Container>
            <Row>
                <Col lg="12" className="mb-5">
                <h2 className="section__title">Package Tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>
    {/*----------tour ned---------*/}

    { /*--------Services--------*/}
    <section>
        <Container>
            <Row>
                <Col lg="3">
                <h5 className="services__subtitle">More information about</h5>
                <h2 className="section__title">Mongolia</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
        </section>
        {/*----------services end---------*/}

        {/*--------Blog--------*/}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                    
                        <h2 className="section__title">Our Blogs</h2>
                    </Col>
                    <Blog />
                </Row>
            </Container>
        </section>
        {/*----------blog end---------*/}
</Helmet>
);
};
export default Home;