import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import logo from '../../img/profile.png';
import { loginRequest } from '../../store/AuthLogin/actions';
import Message from '../Common/Message';
import MessageList from '../Common/MessageList';
import MessageBox from '../Common/MessageBox';
import MessageInput from '../Common/MessageInput';
import './Chatmodule.css';
import {Bootstrap, Grid, Row, Col,Container,Card,Button,Form} from 'react-bootstrap';
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDSDIE9eUGAzsuVnqAywId7M5u0P2faauM",
    authDomain: "app-demo-44223.firebaseapp.com",
    databaseURL: "https://app-demo-44223.firebaseio.com",
    projectId: "app-demo-44223",
    storageBucket: "",
    messagingSenderId: "925690672976",
    appId: "1:925690672976:web:63a3dc9d039cf7d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
class Sidenav extends Component{
    state = {
        img:logo,
        preview:false
    }
    fileChangedHandler = (event) =>{
        if (event.target.files && event.target.files[0]) {
            this.setState({
                img: URL.createObjectURL(event.target.files[0]),
                preview:true
            });
        }
    }
    imageUpload = (e) =>{
        e.preventDefault();
        console.log("image data........", this.state.logo);
        this.setState({
            preview:false
        })
    }
    handleClick=(path)=>{
        this.props.history.push(path)
    }
    updateImage =() =>{
        console.log("profile clicked");
    }
    onImageChange = () =>{
        console.log("image changed.....");
    }
    render(){
        var {auth} = this.props;
        var img = this.state.img;
        return(
            <div>
                <Row>
                    <Col xs={2} className="sidebar"> 
                        <Row className="pd-50"> 
                            <Col xs={6}><img src={img} className="image-d" height="100px" width="100px"/></Col>
                            <Col xs={6} className="mb-5">
                                <div class="upload-btn-wrapper">
                                   {
                                    this.state.preview?(
                                        <Form onSubmit={this.imageUpload}>
                                            <Button className="btn-submit" type="submit">
                                                Save
                                            </Button>
                                        </Form>
                                       ):(
                                        <i class="fa fa-camera" aria-hidden="true">
                                        <input type="file" name="myfile" onChange={this.fileChangedHandler}/>
                                        </i>
                                       )
                                   }
                                </div>
                            </Col>
                        </Row> 
                        <Row className="pd-20">
                             Name:- Any
                        </Row>
                    </Col>
                    <Col xs={8} className="pd-2"> 
                          {this.props.children} 
                    </Col>
                    
                    <Col xs={2} className=" side-right">
                         <Row className="border-bottom"><Col>Recent</Col></Row>
                            <Row><MessageList db={firebase} /></Row>
                            <Row><MessageBox  db={firebase}/> </Row>
                            
                            {/* <Message/> */}
                         {/* <hr className="hr"></hr> */}
                    </Col>
                </Row>
                   <div className="chat-box">
                       <div className="chat-head">
                                <Row className="chat-head-row">
                                    <Col xs={1}><img src={logo} className="chat-head-logo"/></Col>
                                    <Col xs={2} className="mt-17">Sikandar</Col>
                                    <Col xs={8}></Col>
                                </Row>
                       </div>
                       <div className="chat-message"><MessageList db={firebase} /></div>
                       <div className="chat-input">
                          {/* <Row> */}
                              {/* <Col>
                                <MessageInput  db={firebase}/>
                              </Col>
                              <Col>Send</Col> */}
                               <MessageInput  db={firebase}/>
                          {/* </Row> */}
                       </div>
                   </div>
            </div>
        );
    }
}
const mapDispatchToProps = function(dispatch) {
    return {
        loginRequest: function(userData) {
        dispatch(loginRequest(userData));
      }
    };
};
const mapStateToProps = state => ({
    auth: state.loginReducer
});
export default withRouter(connect(
    mapStateToProps,
    null,
  )(Sidenav));
