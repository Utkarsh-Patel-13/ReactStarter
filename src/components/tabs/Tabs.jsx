import React, { useState, useEffect } from "react";

import { FaAngleDoubleRight } from "react-icons/fa";
import "./tabs.css";

const url = "https://course-api.com/react-tabs-project";

function Tabs() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();

        setJobs(newJobs);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <main>
                <section className="container loading-tabs">
                    <h1>Loading...</h1>
                </section>
            </main>
        );
    }

    const { company, dates, duties, title } = jobs[value];

    return (
        <main>
            <section className="container">
                <div className="title text-2xl ">
                    <h2>Expierence</h2>
                    <div className="underlinediv"></div>
                </div>
                <div className="jobs-center">
                    {/* {btn container} */}
                    <div className="btn-container">
                        {jobs.map((item, index) => {
                            return (
                                <button
                                    key={item.id}
                                    className={`job-btn ${
                                        index === value && "activate-btn"
                                    } m-4`}
                                    onClick={() => setValue(index)}
                                >
                                    {item.company}
                                </button>
                            );
                        })}
                    </div>
                    {/* {job info} */}
                    <article className="job-info p-2">
                        <h3 className="font-semibold py-3">{title}</h3>
                        <h4 className="mb-2">{company}</h4>
                        <p className="job-date">{dates}</p>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className="job-desc ">
                                    <FaAngleDoubleRight className="job-icon" />
                                    <p>{duty}</p>
                                </div>
                            );
                        })}
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Tabs;
