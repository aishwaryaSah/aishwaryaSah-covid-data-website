import React, { Component } from "react";
import './App.css';
import CountryWiseData from "./Components/CountryWiseData/CountryWiseData";
import WorldData from "./Components/WorldData/WorldData";
import VaccineData from "./Components/VaccineData/VaccineData";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render (){
    return (
      <div>
        <WorldData></WorldData>
        <CountryWiseData></CountryWiseData>
        <VaccineData></VaccineData>
      </div>
      
    );
    // );
  }
}

export default App;