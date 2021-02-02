import React, { Component } from "react";

import "./foodmenu.css";
import food_menu from "./data";

class FoodMenu extends Component {
    state = {
        menuItems: food_menu,
        categories: [],
    };
    render() {
        return (
            <main>
                <section>
                    <section className="menu section">
                        <div className="menu-title">
                            <h2>Our Menu</h2>
                            <div className="underlinediv"></div>
                        </div>
                    </section>
                </section>
            </main>
        );
    }
}

export default FoodMenu;
