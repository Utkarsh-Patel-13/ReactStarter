import React, { useEffect, useState } from "react";

import "./grocery.css";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
    let list = localStorage.getItem("list");

    if (list) {
        return JSON.parse(localStorage.getItem("list"));
    } else {
        return [];
    }
};

function Grocery() {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: "",
    });

    const showAlert = (show = false, msg = "", type = "") => {
        setAlert({ show, msg, type });
    };
    const clearList = () => {
        setList([]);
        showAlert(true, "List is now empty!!!", "success");
    };
    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
        showAlert(true, "Item removed!!!", "danger");
    };
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            // alert
            showAlert(true, "Please Enter Some Value...", "danger");
        } else if (name && isEditing) {
            // edit item
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            setName("");
            setEditID(null);
            setIsEditing(false);
            showAlert(true, "Item Edited!!!", "success");
        } else {
            // show alert
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };

            setList([...list, newItem]);
            setName("");
            showAlert(true, "Item Added to list", "success");
        }
    };

    return (
        <main>
            <section className="container">
                <h2 className="grocery-title font-bold text-center">
                    Grocery List
                </h2>
                <div className="underlinediv"></div>

                <form className="grocery-form m-2" onSubmit={handleSubmit}>
                    <div className="grocery-form-control">
                        <input
                            type="text"
                            className="bg-blue-100 font-semibold border border-purple-700 p-2"
                            placeholder="eggs"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <button type="submit" className="grocery-submit-btn">
                            {isEditing ? "Edit" : "Submit"}
                        </button>
                    </div>
                </form>
                {alert.show && <Alert {...alert} removeAlert={showAlert} />}
                {list.length > 0 && (
                    <div className="grocery-container">
                        <List
                            items={list}
                            removeItem={removeItem}
                            editItem={editItem}
                        />
                        <button
                            className="grocery-clear-btn"
                            onClick={clearList}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}
export default Grocery;
