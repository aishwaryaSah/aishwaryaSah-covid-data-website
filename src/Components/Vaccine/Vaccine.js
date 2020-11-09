import React, { Component } from "react";
import {MainHeading, SubHeading} from "../Heading";
// import SubHeading from "..";
import VaccinePhaseData from "./VaccinePhaseData";
import VaccineCompleteData from "./VaccineCompleteData";
import {Link} from "react-router-dom";

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
        <h1>loading</h1>
      );
    } else {
      return (
        <div>
          <Link to="/">Back</Link>
          <MainHeading title="Vaccine Data"></MainHeading>
          <SubHeading title="Vaccine Phase Details"></SubHeading>
            <VaccinePhaseData vaccineData={vaccineData}></VaccinePhaseData>
          <SubHeading title="Vaccine Complete Details"></SubHeading>
            <VaccineCompleteData vaccineData={vaccineData}></VaccineCompleteData>
          {/* <WorldData worldToday={worldToday} worldYesterday={worldYesterday} worldDayBeforeYest={worldDayBeforeYest}></WorldData>
          <CountryWiseData countryWiseToday={countryWiseToday}></CountryWiseData> */}
          {/* <VaccineBasic vaccineData={vaccineData}></VaccineBasic> */}
        </div>
      );
    }
  }
}

export default Vaccine;