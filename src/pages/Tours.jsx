import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tours.css";
import tourData from "../assets/data/tours";
<<<<<<< HEAD
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
/*port Newsletter from"./../shared/Newsletter";*/
=======
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
>>>>>>> 163829768f4e7f1823e38e46d31295083baef47e
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

<section className="searchbar-overlay">
  <Container>
    <Row className="justify-content-center">
      <Col lg="8">
        <SearchBar />
      </Col>
    </Row>
  </Container>
</section>


      <section className="pt-5 mt-5" style={{ paddingTop: "6rem" }}>


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
