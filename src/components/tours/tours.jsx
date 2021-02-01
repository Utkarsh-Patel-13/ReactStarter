import React, { Component } from "react";

import Loading from "./loading";
import Tour from "./tour";
import "./tours.css";

const url = "https://course-api.com/react-tours-project";

class Tours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: {},
            loading: true,
        };

        this.getData();
    }

    async getData() {
        try {
            this.setState({ loading: true });
            const tours = await (await fetch(url)).json();
            this.setState({ tours: tours, loading: false });
        } catch (err) {
            this.setState({ loading: true });
            console.log(err);
        }
    }

    deleteTour = (tourID) => {
        const tours = this.state.tours.filter((t) => t.id !== tourID);
        this.setState({ tours: tours });
    };

    render() {
        if (this.state.loading) {
            return (
                <main className="p-2 containter m-10 rounded border bg-white text-black font-light">
                    <Loading />
                </main>
            );
        }
        return (
            <main className="p-2 containter m-10 font-light">
                <div className="text-center m-5 font-bold text-lg">
                    <h1>Tours List</h1>
                </div>
                {this.state.tours.map((tour) => {
                    return <Tour tour={tour} removeTour={this.deleteTour} />;
                })}
                <button
                    className="delete-btn font-semibold border border-red-400 p-3"
                    onClick={() => {
                        this.getData();
                    }}
                >
                    Reset
                </button>
            </main>
        );
    }
}

export default Tours;
