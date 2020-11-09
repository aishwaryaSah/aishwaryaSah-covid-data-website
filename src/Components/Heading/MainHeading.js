import React from "react";
// import "./Loader.css";

const MainHeading = function ({ title = "" }) {
    // const className = size && `spinner-${size}`;

    return <div className="loader-container">
        <h1>{title}</h1>
        {/* { size ? <span className="spinner-text">Loading...</span> : null } */}
    </div>;
};

export default MainHeading;
