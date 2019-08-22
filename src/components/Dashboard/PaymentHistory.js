import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import logo from '../../img/profile.png';
import { loginRequest } from '../../store/AuthLogin/actions';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl, Dropdown} from 'react-bootstrap';
class PaymentHistory extends Component{
    render(){
        var {auth} = this.props;
        // console.log("your component data is ......",auth.loginInfo.data.status);
        return(
            <Container>
                <Row>
                    <Col>
                        <p>History Component.....................................</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.loginReducer
});
export default withRouter(connect(
    mapStateToProps,
    null
  )(PaymentHistory));
 