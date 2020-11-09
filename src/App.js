import React, { Component } from "react";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import Vaccine from "./Components/Vaccine/Vaccine";
import IndiaData from "./Components/IndiaData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {MainHeading} from "./Components/Heading";

class App extends Component{

  render (){
    return <Router>
      <MainHeading title="Covid Tracker"/>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/vaccineData"  component={ Vaccine } />
        <Route path="/indiaData"  component={ IndiaData } />
      </Switch>
    </Router>
  }
}

export default App;