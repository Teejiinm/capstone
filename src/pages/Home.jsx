import React, { useState, useEffect } from "react";
import '../styles/home.css';
import Helmet from "../components/Helmet/Helmet";

import { Link } from "react-router-dom";
import Subtitle from "../shared/Subtitle";

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/IMG_4102.jpg";
import ServiceCard from "../services/ServiceCard";
import BlogCard from "../shared/BlogCard";  // Import BlogCard directly
import FeaturedTourList from "../components/FeaturedTourList/FeaturedTourList";

// Assuming you have the blogs data from somewhere (maybe a static file or API)
import { blog as blogData } from "../shared/BlogCard";  // Assuming the blog data is exported here

const Home = () => {
    const blogsToShow = blogData.slice(0, 4); // Limit to only 4 blog posts
    const [imageHidden, setImageHidden] = useState(false);
    const [tourHidden, setTourHidden] = useState(false);

    // Handle scroll event to hide image and move Package Tours
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        // If scrolled more than 50px, hide the hero image and move the Package Tours
        if (scrollPosition > 50) {
            setImageHidden(true);
            setTourHidden(true);  // Move Package Tours up when scrolled
        } else {
            setImageHidden(false);
            setTourHidden(false);  // Reset position of Package Tours
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Helmet title={"Home"}>
            {/*-----------Hero Section---------*/}
            <section className={`hero__section ${imageHidden ? 'hidden' : ''}`}>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1>WELCOME TO MONGOLIA</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*-----------Hero End---------- */}

            {/*--------Tours--------*/}
            <section className={`hotels ${tourHidden ? 'hidden' : ''}`}>
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
                        <Row className="g-0 mt-0">  {/* gutter, margin 줄이기 */}
                            <ServiceCard />
                        </Row>
                    </Row>
                </Container>
            </section>
            {/*----------Services End---------*/} 

            {/*--------Blog--------*/}
            <section className="blog-section">
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
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
