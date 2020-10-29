import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import {Link} from "react-router-dom";

class VaccineBasic extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    console.log(this.props.history);
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    const request = async () => {
      const vaccineResponse = await fetch('https://disease.sh/v3/covid-19/vaccine');
      const vaccineData = await vaccineResponse.json();
        this.setState({
          loading: false,
          data: vaccineData
        });
    }
    request();
  }


  // componentDidMount() {
  //   this.setState({
  //     data: this.props.vaccineData,
  //     loading:false
  //   });
  // }

  getTable = () => {
    const { phases } = this.state.data;
    let candidateCount= phases.map((user) => {
      return <td>{user.candidates}</td>
    });

    let phaseCount= phases.map((user) => {
      return <th>{user.phase}</th>
    });

    let tableData= <Table>
      <thead>
        <tr>
          {phaseCount}
         </tr>
       </thead>
       <tbody>
         <tr>
           {candidateCount}
         </tr>
        </tbody>
    </Table>
    return <div className="cardsList">{tableData}</div>;
  }

  hi =() => {
    alert("hi");
  }

  render () {
    if(this.state.loading) {
      return (
        <h1>loading</h1>
      );
    } else {
      return (
        <div className="worldDecks">
          <button onClick={this.hi}> Verify </button>
          <span className="sectionTitle">
            Vaccine Data
          </span>
          <span className="readMoreLink" ><Link to="/vaccineData">Components</Link></span>
          <div className="sectionSubTitle">
            Total Candidates = {this.state.data.totalCandidates}
          </div>
          {/* <h1></h1> */}
          {this.getTable()}
        </div>
      );
    }
  }
}

export default VaccineBasic;