import Raect from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/weather.png"

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Weather and Geography",
        desc: "The weather in Mongolia can be extreme, with hot summers and cold winters. It's important to check the forecast before your trip.",
    },
    {
        imgUrl: guideImg,
        title: "Packing List",
        desc: "Having a local guide can enhance your experience, providing insights into the culture and history of Mongolia.",
    },
    {
        imgUrl: customizationImg,
        title: "Hotel and Transportation",
        desc: "We offer customizable tour packages to suit your preferences and interests.",
    }
]

const ServiceList = () => {
    return (
        <>
        {servicesData.map((item, index) => (
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
        </>
    );
};

export default ServiceList;