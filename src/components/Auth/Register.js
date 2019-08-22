import React,{Component} from 'react';
import { connect } from "react-redux";
import { registerRequest } from '../../store/AuthRegister/actions';
import validate from './validate';
import first from '../../img/first.gif';
import swal from 'sweetalert';
import {Bootstrap, Grid, Row, Col,Container,Card,Button,Form,FormControl,Radio,Input,ButtonGroup} from 'react-bootstrap';
class Register extends Component{
        state = {
            userName:"",
            email:"",
            password:"",
            confirmPassword:"",
            hideAlert:false,
            display:false
        }
        onChange = (e) =>{
            e.preventDefault();
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        onLeave = (e) =>{
            this.setState({
                display:false
            })
        }
        handleRegister =(e) =>{
            e.preventDefault();
            const newUser = {
                userName:this.state.userName,
                email:this.state.email,
                password:this.state.password,
                confirmPassword:this.state.confirmPassword
            }
            if(this.state.password===this.state.confirmPassword){
                var refrence = this;
                validate(this.state.password,function(success){
                    if(success){
                        // console.log(newUser);
                        refrence.props.registerRequest(newUser);
                    }
                    else{
                       refrence.setState({
                           display:true
                       })
                    }
                })
            }
            else{
                swal({
                    title: "Error!",
                    text: "confirmPassword should be same as password",
                    icon: "error",
                    timer: 2000,
                    button: false
                  })          
            }
            
        }
        render(){
            const { auth } = this.props;
            console.log("dbfksdnkjfnsdkjfn", auth.loading);
            return(
                   <Row className="regp">
                      <Container>
                          <Row>
                            <Col sm={6}>
                                <Container className="register-left">

                                </Container>
                            </Col>
                            <Col sm={6} onMouseLeave={this.onLeave}>
                            <Card className="reg-card">
                                    <Card.Header>Signing Up...{auth.loading}</Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={this.handleRegister}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Col sm={9}><i className="fa fa-user"></i>
                                                    <Form.Control className="signup-input-username" onChange={this.onChange} type="email" placeholder="Enter Username" name="userName" required/>
                                                </Col>
                                            </Form.Group><br></br>
                                            <hr className="hr"></hr>
                                            
                                            <Form.Group controlId="formBasicEmail">
                                                <Col sm={9}><i className="fa fa-location-arrow" aria-hidden="true"></i> 
                                                <Form.Control className="signup-input-email" onChange={this.onChange} type="email" placeholder="Enter Email" name="email" required/></Col>
                                            </Form.Group><br/>
                                            <hr className="hr"/>
                                            <Form.Group controlId="formBasicEmail">
                                                <Col sm={9}><i className="fa fa-lock" aria-hidden="true"></i>
                                                    <Form.Control className="signup-input-cpassword" onChange={this.onChange} type="password" placeholder="Password" name="password"/></Col>
                                            </Form.Group><br/>
                                            <hr className="hr"/>
                                            <Form.Group controlId="formBasicEmail">
                                                <Col sm={9}><i className="fa fa-lock" aria-hidden="true"></i>
                                                <Form.Control className="signup-input-cpassword" onChange={this.onChange} type="password" placeholder="Confirm Password" name="confirmPassword" required/></Col>
                                            </Form.Group>
                                            <br/>
                                            <hr className="hr"/>
                                              {this.state.display?(<p className="password">password must contain special character and number</p>):<p></p>}
                                            <Button variant="primary form-btn" type="submit">
                                                Sign Up
                                            </Button>
                                        </Form>
                                        {auth.loading?( <img className="spinner" src= {first} />) : null}
                                    </Card.Body>
                                </Card>
                            </Col>
                          </Row>
                      </Container>
                   </Row>
               
            )
        }
}
const mapStateToProps = state => ({
    auth: state.authReducer
});
const mapDispatchToProps = function(dispatch) {
    return {
      registerRequest: function(userData) {
        dispatch(registerRequest(userData));
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);

