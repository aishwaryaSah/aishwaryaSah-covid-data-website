import React, { Component } from "react";
import {PageHeading, SubHeading} from "../Heading";
import VaccinePhaseData from "./VaccinePhaseData";
import VaccineCompleteData from "./VaccineCompleteData";
import Loader from "../Loading";
class Vaccine extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      vaccineData: {}
    }
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    const request = async () => {
      //Vaccine Data
      const vaccineResponse = await fetch('https://disease.sh/v3/covid-19/vaccine');
      const vaccineData = await vaccineResponse.json();
        this.setState({
          loading: false,
          vaccineData
        });
    }
    request();
  }

  render (){
    const { vaccineData, loading} = this.state;
    if(loading){
      return (
        <Loader/>
      );
    } else {
      return (
        <div>
          <PageHeading title="World COVID Vaccine Details"/>
          <SubHeading title="Vaccine Phase Details" underline="true"/>
            <VaccinePhaseData vaccineData={vaccineData}></VaccinePhaseData>
          <SubHeading title="Vaccine Complete Details" underline="true"/>
            <VaccineCompleteData vaccineData={vaccineData}></VaccineCompleteData>
        </div>
      );
    }
  }
}

export default Vaccine;