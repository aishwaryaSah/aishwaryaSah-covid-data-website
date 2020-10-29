import React, { Component } from "react";
import {Table} from 'react-bootstrap';

class VaccineData extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    // debugger
    this.setState({
      data: this.props.vaccineData,
      loading:false
    });
  }

  getTable = () => {
    const { data } = this.state.data;
    let x= data.map((user, index) => {
      return <tr>
          <td>{user.candidate}</td>
          <td>{user.mechanism}</td>
          <td>{user.trialPhase}</td>
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

  render () {
    if(this.state.loading) {
      return (
        <h1>loading</h1>
      );
    } else {
      return (
        <div className="worldDecks">
          <div className="sectionTitle">
            Vaccine Data
          </div>
          {this.getTable()}
        </div>
      );
    }
  }
}

export default VaccineData;