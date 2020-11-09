import React, { Component } from "react";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import Vaccine from "./Components/Vaccine/Vaccine";
import CountryWiseData from "./Components/CountryWiseData/CountryWiseData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component{

  render (){
    return <Router>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/vaccineData"  component={ Vaccine } />
        <Route path="/CountryWiseData"  component={ CountryWiseData } />
      </Switch>
    </Router>
  }
}

export default App;