import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            className={`colorgen-color ${index > 10 && "colorgen-color-light"}`}
            style={{ background: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="colorgen-percent-value">{weight}%</p>
            <p className="colorgen-color-value">{hexValue}</p>
            {alert && (
                <p
                    className={`colorgen-alert ${
                        index > 10 ? "text-white" : "text-black"
                    }`}
                >
                    copied to clipboard
                </p>
            )}
        </article>
    );
};

export default SingleColor;
