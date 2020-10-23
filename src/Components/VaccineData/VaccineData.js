import React, { Component, Fragment } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Card, CardDeck, OverlayTrigger, Tooltip, Button, Table, Row, Col, Container, CardColumns} from 'react-bootstrap';
// import './WorldData.css';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';

class VaccineData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    const request = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/vaccine');
      const data = await response.json();
      // const response1 = await fetch('https://disease.sh/v3/covid-19/continents?yesterday=true');
      // const yesterday = await response1.json();
      // const response2 = await fetch('https://disease.sh/v3/covid-19/continents?yesterday=false&twoDaysAgo=true');
      // const daybeforeyest = await response2.json();

        this.setState({
          data,
          loading: false
        });
    }
    request();
  }

  // renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Per total persons being tested
  //   </Tooltip>
  // )
  
  // getCircularBar = (value, maxValue, text, color) => {
  //   return <span>
  //     <OverlayTrigger
  //       placement="right"
  //       delay={{ show: 250, hide: 400 }}
  //       overlay={this.renderTooltip()}
  //     >
  //       <span>
  //         <CircularProgressbar 
  //           value={value} maxValue={maxValue} text={`${text}*`}
  //           styles={{text: {fontSize: '15px', fill: color},path: {stroke: color}}}
  //         />
  //       </span>
  //     </OverlayTrigger>
  //   </span>
  // }

  // incDecCount = (value, posColor="green", negColor="red") => {
  //   if(value>0){
  //     return <span className="arrowColor" style={{color:posColor}}><ArrowUp  color={posColor}/> {value}</span>
  //   }else if( value==0){
  //     return null;
  //   }else{
  //     value=value*-1;
  //     return <span className="arrowColor" style={{color:negColor}}><ArrowDown colour={negColor}/> {value}</span>
  //   }
  // }

  // moveToCountry = (name) => {
  //   console.log(name);
  // }

  getTable = () => {
    const { data } = this.state.data;
    let x= data.map((user, index) => {
      return <tr>
          <td>{user.candidate}</td>
          <td>{user.mechanism}</td>
          <td>{user.trialPhase}</td>
          {/* <td>{user.candidate}</td>
          <td>{user.candidate}</td> */}
        </tr>
    });
    let p= <Table>
      <thead>
        <tr>
           <th>Name</th>
           <th>Mechanism</th>
           <th>Trial Phase</th>
         </tr>
       </thead>
       <tbody>{x}</tbody>
    </Table>
    
    return <div className="cardsList">{p}</div>;
  }

  render (){
    if(this.state.loading){
    return (
      <h1>loading</h1>
    );
  }else{
  return (<div classNamw="worldDecks">
        <div className="sectionTitle">Vaccine Data</div>
        {this.getTable()}
       </div>);
    }
  }
}

export default VaccineData;