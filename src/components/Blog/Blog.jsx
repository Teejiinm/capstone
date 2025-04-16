import React from "react";
import "./blog.css";
import Slider from 'react-slick';
import ava01 from "../../assets/images/ava01.jpg";
import ava02 from "../../assets/images/ava02.jpg";
import ava03 from "../../assets/images/ava03.jpg";

const Blog = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
           
        ]
    }
    return <Slider {... settings}>
        <div className="blog py-4 px-3">
            <p>very good trip</p>

            <div className=" d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>12 Dec 2023</p>
                </div>
            </div>
            </div>

            <div className="blog py-4 px-3">
            <p>very good trip</p>

            <div className=" d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>12 Dec 2023</p>
                </div>
            </div>
            </div>

            <div className="blog py-4 px-3">
            <p>very good trip</p>

            <div className=" d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>12 Dec 2023</p>
                </div>
            </div>
            </div>
    </Slider>
};

export default Blog;