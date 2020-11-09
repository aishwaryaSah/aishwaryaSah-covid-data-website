import React, { Component } from "react";
import {Card, CardDeck} from 'react-bootstrap';
import Loader from "../../Loading";

class IndiaOverview extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      summary: {}
    }
  }

  componentDidMount() {
    this.setState({
      summary: this.props.indiaData.summary,
      loading:false
    });
  }

  render (){
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
      const {summary}= this.state;
      return <div className="cardsList">
      <CardDeck>
        <Card>
          <Card.Body>
          <Card.Text>
              <b>Total Cases</b> = {summary.total}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <b>Total Deaths</b> = {summary.deaths}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <b>Total Discharged</b> = {summary.discharged}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              <b>Total Foreign Cases</b> = {summary.confirmedCasesForeign}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    }
  }
}

export default IndiaOverview;