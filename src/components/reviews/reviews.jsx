import React, { Component } from "react";

import Review from "./review";

import "./reviews.css";

class Reviews extends Component {
    state = {};
    render() {
        return (
            <main>
                <section className="bg-yellow-300 section text-black">
                    <div className="title">
                        <h2>Our Reviews</h2>
                        <div className="underlinediv"></div>
                    </div>
                    <Review />
                </section>
            </main>
        );
    }
}

export default Reviews;
