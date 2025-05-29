import React, { useRef, useState, useEffect } from "react";
import '../styles/tours-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from '../assets/images/user.png';
import Booking from "../components/Booking/Booking";
import TravelSchedule from "./TravelSchedule";
import { ReactComponent as MongoliaMap } from '../assets/BlankMongolia.svg';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const mapRef = useRef(null);
  const animationRef = useRef(null);
  const [isForward, setIsForward] = useState(true);


  const [iconPos, setIconPos] = useState({
    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: 0,
  });

  const [carPos, setCarPos] = useState({ x: 0, y: 0 });

  const tour = tourData.find(tour => tour.id == id);

  useEffect(() => {
    if (!tour || !mapRef.current) return;

    const svg = mapRef.current.querySelector("svg");
    if (!svg) return;

    const allRegions = svg.querySelectorAll("path, polygon, rect, circle");
    allRegions.forEach(region => {
      region.setAttribute("fill", "skyblue");
    });

    const fromEl = svg.getElementById(tour.from);
    const toEl = svg.getElementById(tour.to);

    if (!fromEl || !toEl) return;

    fromEl.setAttribute("fill", "blue");
    toEl.setAttribute("fill", "blue");

    function getElementCenterScreenCoords(el) {
      const bbox = el.getBBox();
      const pt = svg.createSVGPoint();
      pt.x = bbox.x + bbox.width / 2;
      pt.y = bbox.y + bbox.height / 2;
      const screenCTM = el.getScreenCTM();
      const screenPt = pt.matrixTransform(screenCTM);
      return { x: screenPt.x, y: screenPt.y };
    }

    const fromPos = getElementCenterScreenCoords(fromEl);
    const toPos = getElementCenterScreenCoords(toEl);
    const mapRect = mapRef.current.getBoundingClientRect();

    const newPos = {
      fromX: fromPos.x - mapRect.left,
      fromY: fromPos.y - mapRect.top,
      toX: toPos.x - mapRect.left,
      toY: toPos.y - mapRect.top,
    };

    setIconPos(newPos);
    setCarPos({ x: newPos.fromX, y: newPos.fromY });

  }, [tour]);

useEffect(() => {
  if (iconPos.fromX === 0 && iconPos.toX === 0) return;

  let start = null;

  const animate = (time) => {
    if (!start) start = time;
    const duration = 2000;
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);

    const fromX = isForward ? iconPos.fromX : iconPos.toX;
    const fromY = isForward ? iconPos.fromY : iconPos.toY;
    const toX = isForward ? iconPos.toX : iconPos.fromX;
    const toY = isForward ? iconPos.toY : iconPos.fromY;

    const x = fromX + (toX - fromX) * progress;
    const y = fromY + (toY - fromY) * progress;

    setCarPos({ x, y });

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsForward(prev => !prev); // 방향 전환
      start = null; // 초기화 후 다시 시작
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  animationRef.current = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationRef.current);
}, [iconPos, isForward]);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  };

  if (!tour) return <p>Tour not found</p>;

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize, itinerary } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt={title} />

              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-s-fill" style={{ color: "orange" }}></i> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? 'Not Rated' : <span>({reviews.length})</span>}
                  </span>
                  <span>
                    <i className="ri-map-pin-user-fill"></i> {address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span><i className="ri-map-pin-2-line"></i> {city} </span>
                  <span><i className="ri-money-dollar-circle-line"></i> ${price} / per person </span>
                  <span><i className="ri-map-pin-time-line"></i> {distance} k/m </span>
                  <span><i className="ri-group-line"></i> {maxGroupSize} </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>

                <h3>Tour Schedule</h3>
                <TravelSchedule itinerary={itinerary} />

                <h3 className="mt-5">Tour Route</h3>
                <div className="tour__map" ref={mapRef} style={{ position: "relative" }}>
                  <MongoliaMap className="mongolia-svg" />
                  <svg
  className="icon-overlay"
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  }}
>
  {/* 경로 선 */}
  <line
    x1={iconPos.fromX}
    y1={iconPos.fromY}
    x2={iconPos.toX}
    y2={iconPos.toY}
    stroke="white"
    strokeWidth="4"
    strokeDasharray="6"
  />

  {/* 출발지 아이콘 */}
  <path
    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    fill="yellow"
    transform={`translate(${iconPos.fromX - 25},${iconPos.fromY - 35}) scale(1.5)`}
/>

  {/* 도착지 아이콘 */}
  <path
    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    fill="yellow"
    transform={`translate(${iconPos.toX - 25},${iconPos.toY - 35}) scale(1.5)`}
/>

<text
  x={carPos.x}
  y={carPos.y}
  fontSize="24"
  textAnchor="middle"
  alignmentBaseline="central"
>
  🚌
</text>





</svg>

                </div>
              </div>

              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    {[1, 2, 3, 4, 5].map(num => (
                      <span
                        key={num}
                        onClick={() => setTourRating(num)}
                        style={{ cursor: "pointer" }}
                      >
                        {num} <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>

                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required />
                    <button className="btn primary__btn text-white" type="submit">Submit</button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews?.map((review, index) => (
                    <div key={index} className="review__item d-flex align-items-start gap-3 mb-3">
                      <img src={avatar} alt="user avatar" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.username || 'John Doe'}</h5>
                            <p>{new Date(review.date || '01-18-2023').toLocaleDateString('en-US', options)}</p>
                          </div>
                          <span className="d-flex align-items-center">
                            {review.rating || 5} <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.text || 'Amazing tour!'}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;
