import React, { Component } from "react";

import data from "./data";
import SingleQuestion from "./Question";
import "./accordian.css";

class Accordion extends Component {
    state = {
        questions: data,
    };
    render() {
        return (
            <main>
                <div className="container">
                    <h4 className="font-extrabold m-4 ml-2 mb-8">
                        Questions And Answers About Login
                    </h4>
                    <section className="info">
                        {this.state.questions.map((question) => {
                            return (
                                <SingleQuestion
                                    key={question.id}
                                    question={question}
                                />
                            );
                        })}
                    </section>
                </div>
            </main>
        );
    }
}

export default Accordion;
