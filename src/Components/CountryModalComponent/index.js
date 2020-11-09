import React, { Component } from "react";
import {Modal, Form, Col, Button} from 'react-bootstrap';

class CountryModalComponent extends Component{

  // constructor(props) {
  //   super(props);
  //   // this.state = {

  //   // }
  // }

  // componentDidMount() {
  //   let x= this.props;
  //   debugger
  //   // this.fetchInitialData();
  // }

  countrySelectOption = () => {
    return <Form>
    <Form.Row className="align-items-center">
      <Col xs="auto" className="my-1">
        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
          Preference
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          id="inlineFormCustomSelect"
          custom
        >
          <option value="0">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Control>
      </Col>
      <Col xs="auto" className="my-1">
        <Form.Check
          type="checkbox"
          id="customControlAutosizing"
          label="Remember my preference"
          custom
        />
      </Col>
      <Col xs="auto" className="my-1">
        <Button type="submit">Submit</Button>
      </Col>
    </Form.Row>
  </Form>
  }

  render (){
    let showModal = this.props.showModal;
    debugger
    let x= this.props.continentData;
    // let {continent = ""} = continentData;

    return (
    <Modal
        size="lg"
        show={showModal}
        onHide={this.props.closeCountryModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {x}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.countrySelectOption()}
        </Modal.Body>
      </Modal>
    );
  }
}

export default CountryModalComponent;