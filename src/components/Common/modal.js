import React from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import {Bootstrap, Grid, Row, Col,Container} from 'react-bootstrap';
class App extends React.Component{
  // constructor(props, context) {
  //   super(props, context);
  //   this.handleShow = this.handleShow.bind(this);
  //   this.handleClose = this.handleClose.bind(this);
  // }
  state = {
    show: false,
  };
  handleClose=() => {
    this.setState({ show: false });
  }
  handleShow =()=>{
    this.setState({ show: true });
  }
  render(){
    return(
      <div>
      <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
      </Button>



    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>DEMO MODAL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
        <Col>Second</Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn" variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={this.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    );
  }
}
export default App;
