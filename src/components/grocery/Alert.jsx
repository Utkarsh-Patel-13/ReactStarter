import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    });
    return <p className={`grocery-alert grocery-alert-${type}`}>{msg}</p>;
};
export default Alert;
