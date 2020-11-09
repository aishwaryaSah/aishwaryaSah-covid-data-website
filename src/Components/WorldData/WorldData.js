import React, { Component } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Card, CardDeck, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './WorldData.css';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';
import Loader from "../Loading";

class WorldData extends Component{

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
    this.setState({
      today: this.props.worldToday,
      yesterday: this.props.worldYesterday,
      daybeforeyest: this.props.worldDayBeforeYest,
      loading:false
    });
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
        delay={{ show: 0, hide: 0 }}
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
    }else if( value===0){
      return null;
    }else{
      value=value*-1;
      return <span className="arrowColor" style={{color:negColor}}><ArrowDown colour={negColor}/> {value}</span>
    }
  }
  render (){
    if(this.state.loading){
    return (
      <Loader/>
    );
  }else{
    const { today, yesterday, daybeforeyest } = this.state;
    let totalDiff = (yesterday.todayCases)-daybeforeyest.todayCases;
    let recoveredDiff = (yesterday.todayDeaths)-daybeforeyest.todayDeaths;
    let deathDiff = (yesterday.todayRecovered)-daybeforeyest.todayRecovered;

return (<div className="worldDecks">
      <div className="cardsList">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Total Countries Affected : {today.affectedCountries}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
                <b>Critical per one million</b> = {today.criticalPerOneMillion} (Current: {today.critical})
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
                <b>Active per one million</b> = {today.activePerOneMillion} (Current: {today.active})
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div className="cardsList">
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>Total Cases</Card.Title>
              <Card.Text>
                <span className="cardBar">
                  {this.getCircularBar(today.cases, today.tests, today.cases, "red")}
                </span>
                <span className="textBar">
                  <span className="textLine">Total cases today = {today.todayCases} {this.incDecCount(totalDiff, "red", "green")}</span>
                  <span className="textLine">Cases per one million = {today.casesPerOneMillion}</span>
                  <span className="cardFooter">Updated every 10 min</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Recovered</Card.Title>
              <Card.Text>
                <span className="cardBar">
                  {this.getCircularBar(today.recovered, today.tests, today.recovered, "green")}
                </span>
                <span className="textBar">
                  <span className="textLine">Total cases today = {today.todayRecovered} {this.incDecCount(recoveredDiff, "green", "red")}</span> 
                  <span className="textLine">Recoveries per one million = {today.recoveredPerOneMillion}</span>
                  <span className="cardFooter">Updated every 10 min</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Total Deaths</Card.Title>
              <Card.Text>
                <span className="cardBar">
                  {this.getCircularBar(today.deaths, today.tests, today.deaths, "gray")}
                </span>
                <span className="textBar">
                  <span className="textLine">Total cases today = {today.todayDeaths} {this.incDecCount(deathDiff, "red", "green")}</span>
                  <span className="textLine">Deaths per one million = {today.deathsPerOneMillion}</span>
                  <span className="cardFooter">Updated every 10 min</span>
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>);
  }
  }
}

export default WorldData;