import React, { Component } from "react";

import Bday from "./birthday/bday";
import Menu from "./menu";
import Tours from "./tours/tours";
import Reviews from "./reviews/reviews";

class Main extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            currentMode: "bday",
        };

        this.toggleProject = this.toggleProject.bind(this);
        this.getProject = this.getProject.bind(this);
    }

    getProject(currentMode) {
        const projects = {
            bday: <Bday />,
            tours: <Tours />,
            reviews: <Reviews />,
        };

        return projects[currentMode];
    }

    toggleProject(currentMode) {
        this.setState({ currentMode });
    }

    // state = {};
    render() {
        return (
            <div>
                <div>
                    <Menu toggleProject={this.toggleProject} />
                </div>
                <div>{this.getProject(this.state.currentMode)}</div>
            </div>
        );
    }
}

export default Main;
