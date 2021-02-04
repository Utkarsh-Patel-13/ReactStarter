import React, { Component } from "react";

import "./birthday.css";

class List extends Component {
    render() {
        return (
            <div>
                {this.props.people.map((data) => {
                    const { id, name, age, image } = data;
                    return (
                        <article key={id} className="person">
                            <img
                                src={image}
                                alt={name}
                                className="rounded-full"
                            />
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                                <button
                                    className="bg-red-500 rounded-md p-1 text-sm m-1"
                                    onClick={() => this.props.removeEntry(id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default List;
