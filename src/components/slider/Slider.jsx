import React, { useState } from "react";

import "./slider.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import data from "./data";

function Slider() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const { image, name, title, quote } = people[index];

    return (
        <section className="slider-section">
            <div className="slider-title">
                <h2>
                    <span>Reviews</span>
                </h2>
            </div>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    return (
                        <article key={id} className="slider-article">
                            <img
                                src={image}
                                alt={name}
                                className="person-img2"
                            />
                            <h4>{name}</h4>
                            <p className="slider-title">{title}</p>
                            <p className="slider-text">{quote}</p>
                            <FaQuoteRight className="slider-icon" />
                        </article>
                    );
                })}
                <button className="slider-prev">
                    <FaChevronLeft />
                </button>

                <button className="slider-next">
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

export default Slider;
