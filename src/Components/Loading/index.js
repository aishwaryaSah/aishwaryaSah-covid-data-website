import React from "react";
import {Spinner} from 'react-bootstrap';
import "./loader.css";

const Loader = function ({ size = "lg" }) {
    return <div className="loaderClass">
      <Spinner animation="grow" variant="secondary" size={size}/>
    </div>;
};

export default Loader;
