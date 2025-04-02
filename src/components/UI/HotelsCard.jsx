import React from 'react';
import hotelImg from "../../assets/images/hotel1.jpg";
import "../../styles/hotelscard.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const HotelsCard = () => {
    return (
        <Col lg='3' md='4'>
        <div className="hotel_item">
            <div className='hotel_img'>
                <img src={hotelImg} alt="" />

            </div>
            <div className='p-2 hotels__info'>
            <h3 className='hotel_name'><Link to="/hotels/id">Shangri-La</Link></h3>
            <span>Ulaanbaatar</span>
            </div>

            <div className='hotels__card-bottom d-flex align-items-center justify-content-between p-2'>
                <span className='price'>$115</span>
                <span>
                    <i class="ri-add-line"></i>
                </span>
            </div>
                
            
        </div>
        </Col>
    );
};

export default HotelsCard;