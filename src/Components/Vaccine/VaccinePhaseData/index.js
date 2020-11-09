import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Loader from "../../Loading";

class VaccinePhaseData extends Component{

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

  getTable = () => {
    const { phases } = this.state.vaccineData;
    let candidateCount= phases.map((user) => {
      return <td>{user.candidates}</td>
    });

    let phaseCount= phases.map((user) => {
      return <th>{user.phase}</th>
    });

    let tableData= <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Phase: </th>
          {phaseCount}
         </tr>
       </thead>
       <tbody>
         <tr>
           <th>Number of Vaccine in that Phase: </th>
           {candidateCount}
         </tr>
        </tbody>
    </Table>
    return <div className="cardsList">{tableData}</div>;
  }

  render (){
    const {loading=true } = this.state;
    if(loading){
      return (
        <Loader/>
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

export default VaccinePhaseData;