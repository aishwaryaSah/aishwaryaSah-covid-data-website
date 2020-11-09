import React, { Component } from "react";
import VaccineBasic from "../VaccineBasic/VaccineBasic";
import VaccineData from "../VaccineData/VaccineData";
import {withRouter} from "react-router-dom";
import {Button} from 'react-bootstrap';

class VaccineMain extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      vaccineData: {}
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
          vaccineData
        });
    }
    request();
  }

  hi =() => {
    alert("hi");
  }

  render (){
    const { vaccineData, loading} = this.state;
    if(loading){
      return (
        <h1>loading</h1>
      );
    } else {
      return (
        <div>
          <button onClick={this.hi}> Verify </button>
          {/* <Button onClick={this.verifyIt}> Verify </Button> */}
          <VaccineBasic vaccineData={vaccineData}></VaccineBasic>
          <VaccineData vaccineData={vaccineData}></VaccineData>
        </div>
      );
    }
  }
}

export default VaccineMain;