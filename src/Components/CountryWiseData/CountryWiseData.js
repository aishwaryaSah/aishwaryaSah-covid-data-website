import React, { Component, Fragment } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Card, CardDeck, OverlayTrigger, Tooltip, Button, Table, Row, Col, Container, CardColumns} from 'react-bootstrap';
import './WorldData.css';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

class CountryWiseData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      today: {},
      yesterday: {},
      daybeforeyest: {}
    }
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    const request = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/continents');
      const today = await response.json();
      const response1 = await fetch('https://disease.sh/v3/covid-19/continents?yesterday=true');
      const yesterday = await response1.json();
      const response2 = await fetch('https://disease.sh/v3/covid-19/continents?yesterday=false&twoDaysAgo=true');
      const daybeforeyest = await response2.json();

        this.setState({
          today,
          yesterday,
          loading: false,
          daybeforeyest
        });
    }
    request();
  }

  renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Per total persons being tested
    </Tooltip>
  )
  
  getCircularBar = (value, maxValue, text, color) => {
    return <span>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={this.renderTooltip()}
      >
        <span>
          <CircularProgressbar 
            value={value} maxValue={maxValue} text={`${text}*`}
            styles={{text: {fontSize: '15px', fill: color},path: {stroke: color}}}
          />
        </span>
      </OverlayTrigger>
    </span>
  }

  incDecCount = (value, posColor="green", negColor="red") => {
    if(value>0){
      return <span className="arrowColor" style={{color:posColor}}><ArrowUp  color={posColor}/> {value}</span>
    }else if( value==0){
      return null;
    }else{
      value=value*-1;
      return <span className="arrowColor" style={{color:negColor}}><ArrowDown colour={negColor}/> {value}</span>
    }
  }

  moveToCountry = (name) => {
    console.log(name);
  }

  getCards = (arr) => {
    let x= arr.map((user, index) => {
      return <div onClick={this.moveToCountry.bind(null, user.continent)}>
        <Card>
          <Card.Body>
            <Card.Title>{user.continent}</Card.Title>
            <Card.Text>
              <span className="textCard">
                <span>{user.cases}<br></br>Confirmed<br></br>{user.casesPerOneMillion}(/mil)</span>
                <span>{user.recovered}<br></br>Recovered<br></br>{user.recoveredPerOneMillion}(/mil)</span>
                <span>{user.deaths}<br></br>Deaths<br></br>{user.deathsPerOneMillion}(/mil)</span>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    });
    let p= <CardColumns>{x}</CardColumns>
    
    return <div className="cardsList">{p}</div>;
  }

  render (){
    if(this.state.loading){
    return (
      <h1>loading</h1>
    );
  }else{
    const { today, yesterday, daybeforeyest } = this.state;

  return (<div classNamw="worldDecks">
        <div className="sectionTitle">Continents Overview</div>
        {this.getCards(today)}
      </div>);
    }
  }
}

export default CountryWiseData;