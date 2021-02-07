import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";

class Menu extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = { key: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    links = [
        { key: 1, name: "Bday", endpoint: "bday" },
        { key: 2, name: "Tours", endpoint: "tours" },
        { key: 3, name: "Reviews", endpoint: "reviews" },
        { key: 4, name: "Accordion", endpoint: "accordion" },
        { key: 5, name: "FoodMenu", endpoint: "foodmenu" },
        { key: 6, name: "Tabs", endpoint: "tabs" },
        // { key: 7, name: "Slider", endpoint: "slider" },
        { key: 8, name: "LoremIpsum", endpoint: "lorem" },
    ];

    handleSelect(key, projCategory) {
        this.props.toggleProject(projCategory);
        this.setState({ key });
    }

    render() {
        return (
            <div className="p-10 bg-indigo-800">
                <div className="text-lg">
                    <Nav activeKey={this.state.key}>
                        {this.links.map((link) => (
                            <NavItem
                                key={link.key}
                                title={link.name}
                                onClick={() =>
                                    this.handleSelect(link.key, link.endpoint)
                                }
                            >
                                <button>{link.name}</button>
                            </NavItem>
                        ))}
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Menu;
