import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Loader from "../../Loading";

class IndiaBed extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      regional: [],
      summary: {},
      sources: []
    }
  }

  componentDidMount() {
    this.setState({
      regional: this.props.indiaData.regional,
      summary: this.props.indiaData.summary,
      sources: this.props.indiaData.sources,
      loading:false
    });
  }

  render (){
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
      const {regional, summary, sources}= this.state;

      let candidateCount= regional.map((locations) => {
        return <tr>
          <td>{locations.state}</td>
          <td>{locations.totalHospitals}</td>
          <td>{locations.totalBeds}</td>
          <td>{locations.ruralHospitals}</td>
          <td>{locations.ruralBeds}</td>
          <td>{locations.urbanHospitals}</td>
          <td>{locations.urbanBeds}</td>
        </tr>
      });

      return <div>
        <div className="accordianHeading">Bed Availibility Details</div>
        <div className="property">
          <span className="heading">Total Hospitals in the Country : </span>
          <span className="value">{summary.totalHospitals}</span>
        </div>
        <div className="property">
          <span className="heading">Total Beds in the Country : </span>
          <span className="value">{summary.totalBeds}</span>
        </div>
        <br></br>
        <Table responsive striped bordered hover>
          <tr>
            <td>ruralHospitals</td>
            <td>ruralBeds</td>
            <td>urbanHospitals</td>
            <td>urbanBeds</td>
          </tr>
          <tr>
            <td>{summary.ruralHospitals}</td>
            <td>{summary.ruralBeds}</td>
            <td>{summary.urbanHospitals}</td>
            <td>{summary.urbanBeds}</td>
          </tr>
        </Table>
        <br></br>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <td>state</td>
            <td>totalHospitals</td>
            <td>totalBeds</td>
            <td>ruralHospitals</td>
            <td>ruralBeds</td>
            <td>urbanHospitals</td>
            <td>urbanBeds</td>
          </tr>
        </thead>
        <tbody>
          {candidateCount}
        </tbody>
      </Table>
      <div className="sources">
        <span className="heading">Sources: {sources[0].url}</span>
      </div>
    </div>
    }
  }
}

export default IndiaBed;