import React from "react";
import {Link} from "react-router-dom";

const SubHeading = function ({ title = "" , infoIcon = "", infoText="", linkNeeded="", linkTo="", linkText="Read More", underline=""}) {
    
    if(underline){
        return  <div className="subMainHeading">
            <span className="subHeading underlineHeading">{title}</span>
        </div>;
    }
    return <div className="subMainHeading">
        <span className="subHeading">{title}</span>
        {
            infoIcon && <span className="infoIcon">({infoText})</span>
        }
        {/* {
            infoIcon &&
            <OverlayTrigger
                key={"right"}
                placement={"right"}
                overlay={
                    <Tooltip id={`tooltip-right`}>
                    {infoText}
                    </Tooltip>
                }
            >
                <span className="infoIcon"><InfoCircle/></span>
            </OverlayTrigger>
        } */}
        {
            linkNeeded &&
            <span className="linkNeeded"><Link to={linkTo}>{linkText}</Link></span>
        }
    </div>;
};

export default SubHeading;
