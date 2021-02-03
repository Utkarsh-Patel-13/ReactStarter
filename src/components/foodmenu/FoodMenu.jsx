import React, { Component } from "react";

import "./foodmenu.css";
import food_menu from "./data";

import Categories from "./Categories";
import SingleList from "./SingleList";

const allCategories = [
    "all",
    ...new Set(food_menu.map((item) => item.category)),
];

class FoodMenu extends Component {
    state = {
        menuItems: food_menu,
        categories: allCategories,
    };

    filterItems = (category) => {
        if (category === "all") {
            this.setState({ menuItems: food_menu });
            return;
        }
        // const newItems = ;

        // console.log(newItems);

        this.setState({
            menuItems: food_menu.filter((item) => item.category === category),
        });
    };

    render() {
        return (
            <main>
                <section className="menu section container">
                    <div className="menu-title">
                        <h2>Our Menu</h2>
                        <div className="underlinediv"></div>
                    </div>
                    <Categories
                        categories={this.state.categories}
                        filterItems={this.filterItems}
                    />
                    <SingleList items={this.state.menuItems} />
                </section>
            </main>
        );
    }
}

export default FoodMenu;
