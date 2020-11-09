import React, { Component } from "react";
import {Card, Button, Accordion} from 'react-bootstrap';
import IndiaOverview from "../IndiaData/IndiaOverview";
import IndianStateWise from "../IndiaData/IndiaStateWise";
import IndiaBed from "../IndiaData/IndiaBed";
import IndiaMedical from "../IndiaData/IndiaMedical";
import IndiaContacts from "../IndiaData/IndiaContacts";
import IndiaNotification from "../IndiaData/IndiaNotification";
import Loader from "../Loading";
import {PageHeading} from "../Heading";
import "./styles.css";

class IndiaData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      indiaData: {},
      indiaBedsData: {},
      indiaMedicalCollegeData: {},
      indiaNotifData: {},
      indiaHelplineData: {}
    }
  }

  componentDidMount() {
    this.fetchInitialData();
  }

  fetchInitialData = () => {
    const request = async () => {
      //India Data
      const indiaResponse = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const indiaData = await indiaResponse.json();
      const indiaBeds = await fetch('https://api.rootnet.in/covid19-in/hospitals/beds');
      const indiaBedsData = await indiaBeds.json();
      const indiaMedicalCollege = await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges');
      const indiaMedicalCollegeData = await indiaMedicalCollege.json();
      const indiaNotif = await fetch('https://api.rootnet.in/covid19-in/notifications');
      const indiaNotifData = await indiaNotif.json();
      const indiaHelpline = await fetch('https://api.rootnet.in/covid19-in/contacts');
      const indiaHelplineData = await indiaHelpline.json();

        this.setState({
          loading: false,
          indiaData,
          indiaBedsData,
          indiaMedicalCollegeData,
          indiaNotifData,
          indiaHelplineData
        });
    }
    request();
  }

  render (){
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
      const {indiaData, indiaBedsData, indiaMedicalCollegeData, indiaHelplineData, indiaNotifData} = this.state;
      return <div>
        <PageHeading title="COVID India Details"/>
        <IndiaOverview indiaData={indiaData.data}></IndiaOverview>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                State Wise Data 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body><IndianStateWise indiaData={indiaData.data}></IndianStateWise></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Beds Available Statewise
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body><IndiaBed indiaData={indiaBedsData.data}></IndiaBed></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Medical Colleges Statewise
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body><IndiaMedical indiaData={indiaMedicalCollegeData.data}></IndiaMedical></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Notifications and advisories
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body><IndiaNotification indiaData={indiaNotifData.data}></IndiaNotification></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Helpline numbers Statewise
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body><IndiaContacts indiaData={indiaHelplineData.data}></IndiaContacts></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
      </div>
    }
  }
}

export default IndiaData;