import React, { useState } from "react";

import data from "./data";
import "./lorem.css";

function Lorem() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        setText(data.slice(0, amount));
    };

    return (
        <main>
            <section className="container">
                <h2 className="capitalize font-bold">
                    tired of boring lorem ipsum?
                </h2>
                <form className="lorem-form" onSubmit={handleSubmit}>
                    <label htmlFor="amount" className="lorem-label">
                        Paragraphs:
                    </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="lorem-input bg-blue-200"
                        placeholder="0"
                        min="1"
                        max={data.length}
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button type="submit" className="label-button lorem-btn">
                        Generate
                    </button>
                </form>

                <article className="lorem-text">
                    {text.map((item, index) => {
                        return (
                            <p key={index} className="m-2">
                                {item}
                            </p>
                        );
                    })}
                </article>
            </section>
        </main>
    );
}

export default Lorem;
