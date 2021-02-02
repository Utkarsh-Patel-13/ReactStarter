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
                                {link.name}
                            </NavItem>
                        ))}
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Menu;
