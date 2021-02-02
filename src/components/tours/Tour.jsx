import React, { Component } from "react";
import "./tours.css";

class Tour extends Component {
    state = {
        readMore: false,
    };
    render() {
        const { id, name, info, image, price } = this.props.tour;
        return (
            <div className="text-black">
                <article className="single-tour">
                    <img src={image} alt={name} />
                    <footer className="bg-white shadow-2xl">
                        <div className="tour-info font-bold">
                            <h4>{name}</h4>
                            <h4 className="tour-price">${price}</h4>
                        </div>
                        <p>
                            {this.state.readMore
                                ? info
                                : `${info.substring(0, 250)}...`}
                            <button
                                onClick={() =>
                                    this.setState({
                                        readMore: !this.state.readMore,
                                    })
                                }
                            >
                                <h5 className="text-blue-700">
                                    {this.state.readMore
                                        ? "show less"
                                        : "show more"}
                                </h5>
                            </button>
                        </p>

                        <button
                            className="delete-btn font-semibold"
                            onClick={() => {
                                this.props.removeTour(id);
                            }}
                        >
                            Remove Item
                        </button>
                    </footer>
                </article>
            </div>
        );
    }
}

export default Tour;
