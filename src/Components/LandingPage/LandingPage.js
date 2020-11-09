import React, { Component } from "react";
import CountryWiseData from "../CountryWiseData/CountryWiseData";
import WorldData from "../WorldData/WorldData";
import {SubHeading} from "../Heading";
import IndiaOverview from "../IndiaData/IndiaOverview"
import VaccinePhaseData from "../Vaccine/VaccinePhaseData";
import Loader from "../Loading";

class LandingPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      worldToday: {},
      worldYesterday: {},
      worldDayBeforeYest: {},
      countryWiseToday: {},
      vaccineData: {},
      indiaData: {}
    }
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    const request = async () => {
      // World Data
      const worldResponseToday = await fetch('https://disease.sh/v3/covid-19/all');
      const worldToday = await worldResponseToday.json();
      const worldResponseYesterday = await fetch('https://disease.sh/v3/covid-19/all?yesterday=true');
      const worldYesterday = await worldResponseYesterday.json();
      const worldResponseDatBeforeYest = await fetch('https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=true');
      const worldDayBeforeYest = await worldResponseDatBeforeYest.json();
      // CountryWise Data
      const countryWiseResponseToday = await fetch('https://disease.sh/v3/covid-19/continents');
      const countryWiseToday = await countryWiseResponseToday.json();
      //Vaccine Data
      const vaccineResponse = await fetch('https://disease.sh/v3/covid-19/vaccine');
      const vaccineData = await vaccineResponse.json();
      //India Data
      const indiaResponse = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const indiaData = await indiaResponse.json();

        this.setState({
          worldToday,
          worldYesterday,
          loading: false,
          worldDayBeforeYest,
          countryWiseToday,
          vaccineData,
          indiaData
        });
    }
    request();
  }

  render (){
    const { worldToday, worldYesterday, worldDayBeforeYest, countryWiseToday, vaccineData, loading, indiaData} = this.state;
    if(loading){
      return (
        <Loader/>
      );
    } else {
      return (
        <div>
          <SubHeading title="World Overview"/>
          <WorldData worldToday={worldToday} worldYesterday={worldYesterday} worldDayBeforeYest={worldDayBeforeYest}></WorldData>
          <SubHeading title="Continents Overview" infoIcon="true" infoText="Click on the continent to know more."/>
          <CountryWiseData countryWiseToday={countryWiseToday}></CountryWiseData>
          <SubHeading title="India Overview" linkTo="/indiaData" linkNeeded="true"/>
          <IndiaOverview indiaData={indiaData.data}></IndiaOverview>
          <SubHeading title="Vaccine Phase Details" linkTo="/vaccineData" linkNeeded="true"/>
          <VaccinePhaseData vaccineData={vaccineData}></VaccinePhaseData>
        </div>
      );
    }
  }
}

export default LandingPage;