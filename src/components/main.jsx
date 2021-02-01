import React, { Component } from "react";

import Bday from "./birthday/bday";
import Menu from "./menu";
import Tours from "./tours/tours";

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
                <div className="m-10">
                    =============================================
                </div>
                <div>{this.getProject(this.state.currentMode)}</div>
            </div>
        );
    }
}

export default Main;
