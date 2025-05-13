import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tours.css";
import tourData from "../assets/data/tours";
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const toursPerPage = 4;

  useEffect(() => {
    const pages = Math.ceil(tourData.length / toursPerPage);
    setPageCount(pages);
  }, [currentPage]);

  const startIndex = (currentPage - 1) * toursPerPage;
  const selectedTours = tourData.slice(startIndex, startIndex + toursPerPage);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {selectedTours.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center gap-3 mt-4">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
