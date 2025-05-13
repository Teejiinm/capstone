import React, { useState, useEffect } from "react";
import '../styles/home.css';
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/IMG_4102.jpg";
import ServiceList from "../services/ServiceList";
import BlogCard from "../shared/BlogCard";  // Import BlogCard directly
import FeaturedTourList from "../components/FeaturedTourList/FeaturedTourList";

// Assuming you have the blogs data from somewhere (maybe a static file or API)
import { blog as blogData } from "../shared/BlogCard";  // Assuming the blog data is exported here

const Home = () => {
    const blogsToShow = blogData.slice(0, 4); // Limit to only 4 blog posts

    return (
        <Helmet title={"Home"}>
            {/*-----------Hero Section---------*/}
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1>Welcome to Mongolia</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*-----------Hero End---------- */}

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
            {/*----------Tours End---------*/}

            {/*--------Services--------*/}
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
            {/*----------Services End---------*/}

            {/*--------Blog--------*/}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="section__title">Our Blogs</h2>
                        </Col>
                    </Row>
                    <Row className="g-3 align-items-stretch">
  {blogsToShow.map((blog) => (
    <Col lg="3" md="4" sm="6" xs="12" key={blog.id} className="d-flex">
      <BlogCard blog={blog} />
    </Col>
  ))}
</Row>

                </Container>
            </section>
            {/*----------Blog End---------*/}

        </Helmet>
    );
};

export default Home;
