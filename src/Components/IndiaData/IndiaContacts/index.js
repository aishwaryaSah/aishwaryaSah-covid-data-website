import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Loader from "../../Loading";

class IndiaContacts extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      regional: [],
      primary: {}
    }
  }

  componentDidMount() {
    this.setState({
      regional: this.props.indiaData.contacts.regional,
      primary: this.props.indiaData.contacts.primary,
      loading:false
    });
  }

  render (){
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
      const {primary, regional}= this.state;

      let candidateCount= regional.map((locations) => {
        return <tr>
          <td>{locations.loc}</td>
          <td>{locations.number}</td>
        </tr>
      });
      
      return <div>
        <div className="accordianHeading">COVID Helpline Details</div>
        <h3>Goverment Details</h3>
        <Table responsive striped bordered hover>
          <tr>
            <td>number</td>
            <td>number-tollfree</td>
            <td>email</td>
            <td>twitter</td>
            <td>facebook</td>
            <td>media</td>
          </tr>
          <tr>
            <td>{primary.number}</td>
            <td>{primary["number-tollfree"]}</td>
            <td>{primary.email}</td>
            <td>{primary.twitter}</td>
            <td>{primary.facebook}</td>
            <td>{primary.media[0]}</td>
          </tr>
        </Table>
        <br></br>
        <h3>State-wise Details</h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <td>Location</td>
            <td>Number</td>
          </tr>
        </thead>
        <tbody>
          {candidateCount}
        </tbody>
      </Table>
    </div>
    }
  }
}

export default IndiaContacts;