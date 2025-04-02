import React, {useState, useEffect} from "react";
import '../styles/home.css';
import hotels from '../assets/data/hotels'

import Helmet from "../components/Helmet/Helmet";

import {Link} from "react-router-dom";


import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/IMG_4102.jpg";

import HotelsList from "../components/UI/HotelsList";



const Home = () => {

   
    return (

    <Helmet title={"Home"}>
    {/*-----------hero---------*/}
    <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className="hero__content">
                    <p className="hero__subtitle">
                        Welcome to Mongolia
                        </p>
                    <h2>
                    Mongolia is a country of stunning landscapes, from vast steppes to the Gobi Desert. Rich in history and culture, it was the birthplace of the Mongol Empire under Genghis Khan. Explore a unique blend of ancient traditions and modern developments, with nomadic life still flourishing.
                    </h2>
                    <button className="more__btn"><Link to='about'>More</Link></button>
                </div>
                </Col>

                <Col lg="6" md="6">
                <div className="hero__img">
                    <img src={heroImg} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
        
    </section>
    {/*-----------hero end---------- */}
    
    {/*--------Hotel--------*/}
    
    <section className="hotels">
        <Container>
            <Row>
                <Col lg="12" className="text-center">
                <h2 className="section__title">Hotels</h2>
                </Col>
                <HotelsList />
            </Row>
        </Container>
    </section>
    {/*----------hotel ned---------*/}

    {/*-----------tour--------
    <section className="tours">
        <Container>
            <Row>
                <Col lg='12' className="text-center">
                <h2 className="section__title">Tours</h2>
                </Col>
                <ToursList />
            </Row>
        </Container>
    </section>
    ---------tour end--------*/}
</Helmet>
);
};
export default Home;