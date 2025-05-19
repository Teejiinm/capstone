import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
    const locationRef = useRef('');
    const dateRef = useRef('');
    const peopleRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const date = dateRef.current.value;
        const people = peopleRef.current.value;

        if (location === "" || date === "" || people === "")
            return alert('All fields are required!');
    };

    return (
        <Col lg='12'>
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where are you going?" ref={locationRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-calendar-line"></i></span>
                        <div>
                            <h6>Date</h6>
                            <input type="date" ref={dateRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>People</h6>
                            <input type="number" placeholder="0" ref={peopleRef} />
                        </div>
                    </FormGroup>

                    <span className='search__icon' type="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
