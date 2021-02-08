import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className="grocery-lis">
            {items.map((item) => {
                const { id, title } = item;

                return (
                    <article key={id} className="grocery-item">
                        <p className="grocery-title">{title}</p>
                        <div className="grocery-btn-container">
                            <button
                                className="grocery-edit-btn"
                                onClick={() => editItem(id)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="grocery-delete-btn"
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};
export default List;
