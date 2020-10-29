import React, { Component } from "react";
// import './App.css';
import CountryWiseData from "../CountryWiseData/CountryWiseData";
import WorldData from "../WorldData/WorldData";
import VaccineBasic from "../VaccineBasic/VaccineBasic";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Redirect, Route, Switch } from "react-router-dom";

class LandingPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      worldToday: {},
      worldYesterday: {},
      worldDayBeforeYest: {},
      countryWiseToday: {},
      vaccineData: {}
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

        this.setState({
          worldToday,
          worldYesterday,
          loading: false,
          worldDayBeforeYest,
          countryWiseToday,
          vaccineData
        });
    }
    request();
  }

  render (){
    const { worldToday, worldYesterday, worldDayBeforeYest, countryWiseToday, vaccineData, loading} = this.state;
    if(loading){
      return (
        <h1>loading</h1>
      );
    } else {
      return (
        <div>
          <WorldData worldToday={worldToday} worldYesterday={worldYesterday} worldDayBeforeYest={worldDayBeforeYest}></WorldData>
          <CountryWiseData countryWiseToday={countryWiseToday}></CountryWiseData>
          <VaccineBasic vaccineData={vaccineData}></VaccineBasic>
        </div>
      );
    }
  }
}

export default LandingPage;