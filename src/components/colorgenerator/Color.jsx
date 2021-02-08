import React, { useState } from "react";

import "./colorgen.css";

import Values from "values.js";

import SingleColor from "./SingleColor";

function ColorGenerator() {
    const [color, setColor] = useState("#fc6808");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#fc6808").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <main>
            <section className="container">
                <h4>Color Generator</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="colorgen-input text-red-600 bg-blue-100"
                        placeholder="#fc6808"
                        maxLength="7"
                        defaultValue="#"
                    />
                    <button tpe="btn" className="colorgen-btn">
                        Generate
                    </button>
                </form>
                <p className="text-center text-red-700 font-bold">
                    {error ? "Enter Proper Value" : ""}
                </p>
            </section>
            <section className="bg-white section colorgen-colors">
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default ColorGenerator;
