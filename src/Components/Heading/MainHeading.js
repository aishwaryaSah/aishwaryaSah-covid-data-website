import React from "react";

const MainHeading = function ({ title = ""}) {
    return <div className="wrapperMainHeading">
        <table>
        <tr>
          <td className="tdSmallerFont">
            <span className="smallerFont">Made By : Aishwarya Sah (
                <a href="https://www.linkedin.com/in/aishwarya-sah-bbb674131/" target="_blank" rel="noopener noreferrer">Linkedin</a> &nbsp;
                <a href="https://twitter.com/SahAishwarya" target="_blank" rel="noopener noreferrer">Twitter</a> &nbsp;
                <a href="aishwarya.asah@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a> )</span>
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
