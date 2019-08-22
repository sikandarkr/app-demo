import React, {Component} from 'react';
import trim from 'trim';
import firebase from 'firebase';
import './Chatmodule.css';
import {Bootstrap, Grid, Row, Col,Container,Card,Button,Form} from 'react-bootstrap';
class MessageInput extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
          message: ''
        };
      }
      onChange(e){
          this.setState({
            message: e.target.value
          });
      }
      onKeyup(e){
        if(e.keyCode === 13 && trim(e.target.value) !== ''){
          e.preventDefault();
          console.log("here is some value typed......");
          let dbCon = this.props.db.database().ref('/sikandar');
          dbCon.push({
            message: trim(e.target.value),
            senderId:1234,
            recieverId:195,
            chatId:123,
            postedOn: firebase.database.ServerValue.TIMESTAMP,
          });
          this.setState({
            message: ''
          });
        }
      }
      sendMessage = (e) =>{
        let dbCon = this.props.db.database().ref('/sikandar');
        dbCon.push({
            message: this.state.message,
            senderId:1234,
            recieverId:195,
            chatId:123,
            postedOn: firebase.database.ServerValue.TIMESTAMP
          });
          this.setState({
            message: ''
          });
      }
      render() {
        return (
            <form> 
                <Row>
                    <Col xs={10}>
                        <textarea
                            className="textarea message-input"
                            placeholder="Type a message"
                            cols="45"
                            onChange={this.onChange}
                            onKeyUp={this.onKeyup}
                            value={this.state.message}>
                        </textarea>
                    </Col>
                    <Col xs={2}>
                        <i class="fa fa-paper-plane" aria-hidden="true" onClick={this.sendMessage}></i>
                    </Col>
                </Row>
            </form> 
        )
      }
}
export default MessageInput;
