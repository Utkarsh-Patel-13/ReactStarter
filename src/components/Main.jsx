import React, { Component } from "react";

import Bday from "./birthday/Bday";
import Menu from "./Menu";
import Tours from "./tours/Tours";
import Reviews from "./reviews/Reviews";
import Accordion from "./accordion/Accordian";
import FoodMenu from "./foodmenu/FoodMenu";
import Tabs from "./tabs/Tabs";
// import Slider from "./slider/Slider";
import Lorem from "./loremipsum/Lorem";
import ColorGenerator from "./colorgenerator/Color";
import Grocery from "./grocery/Grocery";

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
            accordion: <Accordion />,
            foodmenu: <FoodMenu />,
            tabs: <Tabs />,
            // slider: <Slider />,
            lorem: <Lorem />,
            color: <ColorGenerator />,
            grocery: <Grocery />,
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
