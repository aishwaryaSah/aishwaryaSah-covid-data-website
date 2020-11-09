import React from "react";

const MainHeading = function ({ title = ""}) {
    return <div className="wrapperMainHeading">
        <table>
        <tr>
          <td className="tdSmallerFont">
            <span className="smallerFont">Made By : Aishwarya Sah (Linkedin Twitter Gmail)</span>
          </td>
          <td>
            <span className="mainHeading">{title}</span>
          </td>
          <td>
            Data By: <a href="https://disease.sh/">Disease.sh</a> and <a href="https://github.com/amodm/api-covid19-in">Covid India API</a>
          </td>
        </tr>
      </table>
    </div>;
};

export default MainHeading;
