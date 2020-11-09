import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Loader from "../../Loading";

class IndiaMedical extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      medicalColleges: [],
      sources: []
    }
  }

  componentDidMount() {
    this.setState({
      medicalColleges: this.props.indiaData.medicalColleges,
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
      const {medicalColleges, sources}= this.state;

      let candidateCount= medicalColleges.map((locations) => {
        return <tr>
          <td>{locations.state}</td>
          <td>{locations.name}</td>
          <td>{locations.city}</td>
          <td>{locations.ownership}</td>
          <td>{locations.admissionCapacity}</td>
          <td>{locations.hospitalBeds}</td>
        </tr>
      });
      
      return <div>
        <div className="accordianHeading">Medical Colleges Across India with COVID Handling Facilities</div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <td>State</td>
              <td>Name</td>
              <td>City</td>
              <td>Ownership</td>
              <td>Admission Capacity</td>
              <td>Hospital Beds</td>
            </tr>
          </thead>
          <tbody>
            {candidateCount}
          </tbody>
        </Table>
        <div className="sources">
          <span className="heading">Sources: {sources[0]}</span>
        </div>
      </div>
    }
  }
}

export default IndiaMedical;