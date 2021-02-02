import React, { Component } from "react";

import List from "./List";
import birthdays from "./birthdays";

class Bday extends Component {
    state = {
        people: birthdays.map((data) => {
            return {
                id: data.id,
                name: data.name,
                age: data.age,
                image: data.image,
            };
        }),
    };

    removeEntry = (personId) => {
        var people = this.state.people.filter((p) => p.id !== personId);
        this.setState({
            people,
        });
    };

    render() {
        return (
            <main className="p-2 m-10 rounded text-black font-light">
                <section className="p-5 m-3 bg-white section">
                    <header className="text-center font-bold">
                        <h4>Birthday Remainder</h4>
                    </header>
                    <h5 className="p-3 font-semibold">
                        {this.state.people.length} Birthdays Today
                    </h5>
                    <List
                        people={this.state.people}
                        removeEntry={this.removeEntry}
                    />
                    <button
                        className="bg-purple-700 p-2 font-semibold rounded-sm m-2"
                        onClick={() => this.setState({ people: [] })}
                    >
                        Clear All
                    </button>
                    <button
                        className="bg-purple-700 p-2 font-semibold rounded-sm m-2"
                        onClick={() =>
                            this.setState({
                                people: birthdays.map((data) => {
                                    return {
                                        id: data.id,
                                        name: data.name,
                                        age: data.age,
                                        image: data.image,
                                    };
                                }),
                            })
                        }
                    >
                        Reset
                    </button>
                </section>
            </main>
        );
    }
}

export default Bday;
