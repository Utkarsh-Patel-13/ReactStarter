import React, { Component } from "react";

class Categories extends Component {
    state = {};
    render() {
        return (
            <div className="btn-container">
                {this.props.categories.map((category, index) => {
                    return (
                        <button
                            type="button"
                            className="filter-btn capitalize"
                            key={index}
                            onClick={() => this.props.filterItems(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default Categories;
