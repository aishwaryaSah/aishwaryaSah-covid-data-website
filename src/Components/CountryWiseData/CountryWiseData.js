import React, { Component } from "react";
import {Card, CardColumns, Table, Modal, Form, Col} from 'react-bootstrap';
import './CountryData.css';
import Loader from "../Loading";

class CountryWiseData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      today: {},
      showModal: false,
      continentData: {},
      presentCountry: "",
      presentCountryToday: {}
    }
  }

  componentDidMount() {
    this.setState({
      today: this.props.countryWiseToday,
      loading:false
    });
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.presentCountry !== prevState.presentCountry) {
      const request = async () => {
        const countryWiseResponse = await fetch('https://disease.sh/v3/covid-19/countries/'+this.state.presentCountry);
        const presentCountryToday = await countryWiseResponse.json();
          this.setState({
            countryLoading: false,
            presentCountryToday
          });
        }
        request();
    }
  }

  closeCountryModal = () => {
    this.setState({
      showModal: false
    })
  }

  moveToCountry = (continentData={}) => {
    this.setState({
      showModal: true,
      continentData,
      presentCountry: ""
    });
  }

  onChangeColor(event) {
    this.setState({
      presentCountry: event.target.value,
      countryLoading: true
    });
  }

  get getBodyModal() {
    if(this.state.presentCountry!==""){
      const {countryLoading= true, presentCountryToday={}} = this.state;
      if(countryLoading){
        return <Loader/>
      } else {
        return <Table responsive striped bordered hover>
          <tr><td>Continent</td><td>{presentCountryToday.continent}</td></tr>
          <tr><td>country</td><td>{presentCountryToday.country}</td></tr>
          <tr><td>population</td><td>{presentCountryToday.population}</td></tr>
          <tr><td>tests</td><td>{presentCountryToday.tests}</td></tr>
          <tr><td>todayCases</td><td>{presentCountryToday.todayCases}</td></tr>
          <tr><td>todayDeaths</td><td>{presentCountryToday.todayDeaths}</td></tr>
          <tr><td>todayRecovered</td><td>{presentCountryToday.todayRecovered}</td></tr>
          <tr><td>testsPerOneMillion</td><td>{presentCountryToday.testsPerOneMillion}</td></tr>
          <tr><td>active</td><td>{presentCountryToday.active}</td></tr>
          <tr><td>activePerOneMillion</td><td>{presentCountryToday.activePerOneMillion}</td></tr>
          <tr><td>cases</td><td>{presentCountryToday.cases}</td></tr>
          <tr><td>casesPerOneMillion</td><td>{presentCountryToday.casesPerOneMillion}</td></tr>
          <tr><td>critical</td><td>{presentCountryToday.critical}</td></tr>
          <tr><td>criticalPerOneMillion</td><td>{presentCountryToday.criticalPerOneMillion}</td></tr>
          <tr><td>deaths</td><td>{presentCountryToday.deaths}</td></tr>
          <tr><td>deathsPerOneMillion</td><td>{presentCountryToday.deathsPerOneMillion}</td></tr>
          <tr><td>oneCasePerPeople</td><td>{presentCountryToday.oneCasePerPeople}</td></tr>
          <tr><td>oneDeathPerPeople</td><td>{presentCountryToday.oneDeathPerPeople}</td></tr>
          <tr><td>oneTestPerPeople</td><td>{presentCountryToday.oneTestPerPeople}</td></tr>
        </Table>
      }
    }
    return null;
  }


  countrySelectOption = () => {

    const {continentData = {}}= this.state;
    const {countries = []} = continentData;

    let candidateCount= countries.map((country) => {
      return <option value={country}>{country}</option>;
    });


    return <Form>
    <Form.Row className="align-items-center">
      <Col xs="auto" className="my-1">
        <Form.Label>Select Country</Form.Label>
      </Col>
      <Col xs="auto" className="my-1">
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
          Preference
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
          onChange={this.onChangeColor.bind(this)}
        >
          <option value="">Select the country</option>;
          {candidateCount}
        </Form.Control>
      </Col>
    </Form.Row>
  </Form>
  }

  getCards = (arr) => {
    let x= arr.map((user, index) => {
      return <div onClick={this.moveToCountry.bind(this, user)}>
        <Card>
          <Card.Body>
            <Card.Title>{user.continent}</Card.Title>
            <Card.Text>
              <span className="textCard">
                <span className="line">{user.cases}<br></br><span className="red">Confirmed</span><br></br>{user.casesPerOneMillion}(/mil)</span>
                <span className="line">{user.recovered}<br></br><span className="green">Recovered</span><br></br>{user.recoveredPerOneMillion}(/mil)</span>
                <span className="line">{user.deaths}<br></br><span className="gray">Deaths</span><br></br>{user.deathsPerOneMillion}(/mil)</span>
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
        <Loader/>
      );
    } else {
      const { today, showModal, continentData} = this.state;
      return (
        <div className="worldDecks">
          {this.getCards(today)}
          <Modal
            size="lg"
            show={showModal}
            onHide={this.closeCountryModal}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                {continentData.continent}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.countrySelectOption()}
              {this.getBodyModal}
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}

export default CountryWiseData;