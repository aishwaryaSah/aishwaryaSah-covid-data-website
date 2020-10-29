import React, { Component } from "react";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import VaccineMain from "./Components/VaccineMain/VaccineMain";
import VaccineBasic from "./Components/VaccineBasic/VaccineBasic";
import CountryWiseData from "./Components/CountryWiseData/CountryWiseData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends Component{

  hi =() => {
    alert("hi");
  }
  render (){
    return <Router>
      <div>
      <button onClick={this.hi}> Verify </button>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/vaccineData"  component={ VaccineBasic } />
        <Route path="/CountryWiseData"  component={ CountryWiseData } />
      </Switch>
    </div>
    </Router>
  }
}

export default App;