import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import "./tour-card.css";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();
  const { _id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <h3 className="ri-star-fill"></h3>{" "}
              {avgRating === 0 ? null : avgRating}{" "}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span>/per person</span>
            </h5>

            {/* 버튼 클릭 시 navigate 처리 */}
            <button
              className="btn booking__btn"
              onClick={() => navigate(`/tours/${_id}`)}
              type="button"
            >
              Book Now
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
