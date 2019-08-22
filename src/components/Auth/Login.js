import React ,{Component} from 'react';
import { loginRequest } from '../../store/AuthLogin/actions';
import { connect } from "react-redux";
import first from '../../img/first.gif';
import {Bootstrap, Grid, Row, Col,Container,Card,Button,Form,FormControl,Radio,Input,ButtonGroup} from 'react-bootstrap';
class Login extends Component {
    state = {
        userName:"",
        email:"",
        password:"",
        display:false
    }
    onChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleLogin = (e) =>{
        e.preventDefault();
        const user ={
            userName:this.state.userName,
            password:this.state.password
        }
        this.props.loginRequest(user);
    }

    render(){
        const { auth } = this.props;
        console.log(this.props)
        return (
            <Row className="regp">
                        <Container>
                            <Row>
                            <Col sm={6}>
                                <Container className="register-left">

                                </Container>
                            </Col>
                            <Col sm={6} onMouseLeave={this.onLeave}>
                            <Card className="reg-card">
                                    <Card.Header>Signing In...</Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={this.handleLogin}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Col sm={9}><i className="fa fa-user"></i>
                                                    <Form.Control className="signup-input-username" onChange={this.onChange} type="email" placeholder="Enter Username" name="userName" required/>
                                                </Col>
                                            </Form.Group><br></br>
                                            <hr className="hr"></hr>
                                           
                                            <Form.Group controlId="formBasicEmail">
                                                <Col sm={9}><i className="fa fa-lock" aria-hidden="true"></i>
                                                <Form.Control className="signup-input-cpassword" onChange={this.onChange} type="password" placeholder="Password" name="password" required/></Col>
                                            </Form.Group>
                                            <br/>
                                            <hr className="hr"/>
                                                {auth.error?(<p className="password_warning">Incorrect Username or password</p>):null}
                                                <Button variant="primary form-btn" type="submit">
                                                    Sign Up
                                                </Button>
                                        </Form>
                                        {/* <img className="spinner" src= {first} /> */}
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
        loginRequest: function(userData) {
        dispatch(loginRequest(userData));
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
