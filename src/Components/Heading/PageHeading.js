import React from "react";
import {Link} from "react-router-dom";
import { ArrowLeft } from 'react-bootstrap-icons';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

const PageHeading = function ({ title = ""}) {
    return <div className="subPageHeading">
         <span className="pageLinkNeeded">
            <OverlayTrigger
              key={"right"}
              placement={"right"}
              overlay={
                  <Tooltip id={`tooltip-right`}>Move To Main Page</Tooltip>
              }
            >
              <Link to="/"><ArrowLeft/></Link>
            </OverlayTrigger>
           
          </span>
         <span className="pageHeading">{title}</span>
    </div>;
};

export default PageHeading;
