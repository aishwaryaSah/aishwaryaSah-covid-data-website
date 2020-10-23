import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

class Main extends Component{

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    }
  }

  componentDidMount() {
    this.fetchInitialData();
  }



  getNames = () => {
    let str="";
    // debugger
    for(let i=0; i<this.state.data.length; i++){
      str=str+this.state.data[i];
    }

    return <h1>{str}</h1>;
  }

  fetchInitialData = () => {
    const request = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/continents');
      const json = await response.json();

      json.forEach( (value, index, array) => {
        this.setState({
          data: [
            ...this.state.data,
            value["continent"]
          ]
        });
      });

      this.setState({
              loading:false//,
              // data: response
            });
      console.log(json);
  }

  request();
  }
  render (){
    if(this.state.loading){
    return (
      <h1>loading</h1>
    );
  }else{
    
    return <h1>{this.getNames()}</h1>
  }
  }
}

export default Main;