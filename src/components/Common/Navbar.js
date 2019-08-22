import React,{Component} from 'react';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl, Dropdown} from 'react-bootstrap';
import { Redirect,withRouter } from 'react-router-dom';
import { searchuserRequest} from '../../store/Users/actions';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";
//import { push } from "connected-react-router";
import {Link, Router, Route} from "react-router";
import {connect} from 'react-redux'
import {call,put,takeLatest} from 'redux-saga/effects';
import logo from '../../img/appiness-logo.png';
import _ from 'loadsh';
class TopNavbar extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            seacrhData: [],
        }
    }
    componentDidMount() {
        const seacrhData = this.props.searchUser;
        this.setState({
            seacrhData  : seacrhData
        })     
    }
    componentDidUpdate(prevProps, prevState){
        if(!_.isEqual(prevProps.searchUser.users, this.props.searchUser.users)){
            this.setState({
                seacrhData  : this.props.searchUser.users
            })
        }
    }
    searchUser = event => {
        const value = event.target.value;
        this.setState({
            seacrhData  : this.props.searchUser.users,
            name:event.target.value
        })
        //console.log("typed value is ... ",value);
    };
    Logout = (e) =>{
        e.preventDefault();
        localStorage.clear();
        window.location.replace("/login");
        // this.props.history.push('/login');
        console.log("clicked on logout ");
    }
    findUser = () =>{
        this.props.history.push('/users');
    }
    paymentHistory = (e) =>{
        console.log(this.props.history.push('/payment-history'))
        //this.context.router.history.push("/payment-history")
    }
    searchItem = () => {
        const { searchItem, seacrhData } = this.state;
        let searchKey = searchItem.toLowerCase();
        const filterupdatedList = seacrhData.filter(d =>
          d.name.toLowerCase().match(searchKey) ||
          d.id.toString().match(searchKey)
        );
        this.setState({
          items: filterupdatedList
        })
      };

    searchSubmit = (e) =>{
        const user = {
            userName:this.state.name,
        }
        this.setState({name:""});
        this.props.searchuserRequest(user);
         
    }
    render(){
        //console.log("besdhfbsdjfbsdf",this.state.seacrhData);
        return(
            <div>
                {
                    localStorage.getItem("Authorization")?(
                        <Navbar fixed="top" className="nav-bg" variant="dark">
                            <Navbar.Brand href="#home"> <img src={logo} className="img-center" height="30px" width="30px"/></Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Item>
                                    <Nav.Link href="/home"><i class="fa fa-home" aria-hidden="true"></i> Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1"><i class="fa fa-money" aria-hidden="true"></i> Fund Transfer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2" onClick={this.paymentHistory} > <i class="fa fa-history" aria-hidden="true"></i> Payment History </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3"><i class="fa fa-address-book" aria-hidden="true"></i> Add Beneficiary</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4" onClick={this.findUser}><i class="fa fa-circle"></i> Online</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Row className="mt-10">
                                      <Col xs={10}><input className="search-field" type="text" value={this.state.name} placeholder="Search by Name" onChange={this.searchUser}></input></Col>
                                      <Col xs={2}> <i className="fa fa-search f-search" aria-hidden="true" onClick={this.searchSubmit}></i></Col>
                                  </Row>
                                </Nav.Item> 
                            </Nav>
                            <Form inline>
                                {/* <FormControl type="text" placeholder="Search user" className="mr-sm-2" />
                                <Button variant="outline-light">Search</Button> */}
                                <Dropdown >
                                <Dropdown.Toggle className="more-option" id="dropdown-basic">
                                    
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="d-menu" >
                                    <Dropdown.Item href="#/action-2"><i class="fa fa-key" aria-hidden="true"></i>  Privacy</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><i class="fa fa-cog" aria-hidden="true"></i> Settings</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><i class="fa fa-commenting" aria-hidden="true"></i> Chat</Dropdown.Item>
                                      <Dropdown.Item onClick={this.Logout}> <i class="fa fa-sign-out" aria-hidden="true"></i> Logout</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </Navbar>  
                        ):(
                            <Navbar className="nav-bg" variant="dark">
                                <Navbar.Brand href="#home"> <img src={logo} className="img-center" height="30px" width="30px"/></Navbar.Brand>
                                <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            </Navbar> 
                        )
                }
                    {this.props.children}   
            </div>
        )
    }
}
// export default withRouter(TopNavbar);
const mapStateToProps = state => ({
    searchUser: state.userReducer  
});

const mapDispatchToProps = function(dispatch) {
    return {
        searchuserRequest: function(userData) {
        dispatch(searchuserRequest(userData));
      }
    };
  };
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TopNavbar));
