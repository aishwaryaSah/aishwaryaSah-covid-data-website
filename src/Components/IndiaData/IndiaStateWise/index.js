import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Loader from "../../Loading";

class IndiaStateWise extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      regional: []
    }
  }

  componentDidMount() {
    this.setState({
      regional: this.props.indiaData.regional,
      loading:false
    });
  }

  render (){
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
      const {regional}= this.state;


    let candidateCount= regional.map((locations) => {
      return <tr>
        <td>{locations.loc}</td>
        <td>{locations.totalConfirmed}</td>
        <td>{locations.discharged}</td>
        <td>{locations.deaths}</td>
        <td>{locations.confirmedCasesIndian}</td>
        <td>{locations.confirmedCasesForeign}</td>
      </tr>
    });



      return <div>
        <div className="accordianHeading">State Wise COVID Data</div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <td>Name</td>
              <td>Total Confirmed</td>
              <td>Discharged</td>
              <td>Deaths</td>
              <td>Confirmed Cases Indian</td>
              <td>Confirmed Cases Foreign</td>
            </tr>
          </thead>
          <tbody>
            {candidateCount}
          </tbody>
        </Table>
      </div>
    }
  }
}

export default IndiaStateWise;