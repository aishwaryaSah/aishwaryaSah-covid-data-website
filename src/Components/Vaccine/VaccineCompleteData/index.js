import React, { Component } from "react";
import {Table} from 'react-bootstrap';

class VaccineCompleteData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      vaccineData: {},
      loading:true
    }
  }

  componentDidMount() {
    this.setState({
      vaccineData: this.props.vaccineData,
      loading:false
    });
  }

  flattenArray = (givenArray) => {
    let x="", i;
    for(i=0; i<givenArray.length; i++){
      x=x+givenArray[i]+"\n";
    }
    return x;
  }

  getTable = () => {
    const { data } = this.state.vaccineData;
    // let candidateCount= <td></td>

    let candidateCount= data.map((user) => {
      return <tr>
        <td>{user.candidate}</td>
        <td><div dangerouslySetInnerHTML={{__html: user.details}}></div></td>
        <td>{user.mechanism}</td>
        <td>{this.flattenArray(user.institutions)}</td>
        <td>{this.flattenArray(user.sponsors)}</td>
        <td>{user.trialPhase}</td>
      </tr>
    });

    let tableData= <Table striped bordered hover responsive>
      <thead>
        <tr>
          <td>Candidate</td>
          <td>Details</td>
          <td>Mechanism</td>
          <td>Institutions</td>
          <td>Sponsers</td>
          <td>Trial Phase</td>
        </tr>
       </thead>
       <tbody>
         {/* <tr> */}
           {candidateCount}
         {/* </tr> */}
        </tbody>
    </Table>
    return <div className="cardsList">{tableData}</div>;
  }

  render (){
    const {loading=true } = this.state;
    if(loading){
      return (
        <h1>loading</h1>
      );
    }else{
      return (
        <div className="mhg">
          <div className="cardsLjknist">{this.getTable()}</div>
        </div>
      );
    }
  }
}

export default VaccineCompleteData;