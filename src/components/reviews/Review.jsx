import React, { Component } from "react";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

class Review extends Component {
    state = {
        people: people,
        index: 0,
    };

    nextPerson = () => {
        this.setState({
            index: (this.state.index + 1) % this.state.people.length,
        });
    };
    prevPerson = () => {
        if (this.state.index === 0) {
            this.setState({
                index: this.state.people.length - 1,
            });
        } else {
            this.setState({
                index: this.state.index - 1,
            });
        }
    };
    randomPerson = () => {
        const randomIndex = Math.floor(
            Math.random() * this.state.people.length
        );

        this.setState({
            index: randomIndex,
        });
    };

    render() {
        const { name, job, image, text } = this.state.people[this.state.index];
        return (
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>

                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={this.prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={this.nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="random-btn" onClick={this.randomPerson}>
                    Surprise Me
                </button>
            </article>
        );
    }
}

export default Review;
