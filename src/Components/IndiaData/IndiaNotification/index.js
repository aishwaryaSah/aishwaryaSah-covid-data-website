import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Loader from "../../Loading";

class IndiaNotification extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notifications: []
    }
  }

  componentDidMount() {
    this.setState({
      notifications: this.props.indiaData.notifications,
      loading:false
    });
  }

  render (){
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
      const {notifications}= this.state;

      let candidateCount= notifications.map((locations) => {
        return <tr>
          <td>{locations.title}</td>
          <td>{locations.link}</td>
        </tr>
      });
      
      return <div>
      <div className="accordianHeading">COVID related Notification details</div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <td>title</td>
            <td>link</td>
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

export default IndiaNotification;