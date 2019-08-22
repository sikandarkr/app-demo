import React from 'react';
import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import TopNavbar from './components/Common/Navbar';
import Sidenav from './components/Common/Sidenav';
import Register from '../src/components/Auth/Register';
import Profile from '../src/components/Dashboard/Profile';
import Users from '../src/components/Dashboard/Users';
import Login from '../src/components/Auth/Login';
import PaymentHistory from '../src/components/Dashboard/PaymentHistory';
import  { Redirect } from 'react-router-dom'
import { Bootstrap, Grid, Row, Col,Container } from 'react-bootstrap';
import { Route, Switch, BrowserRouter as router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
class App extends React.Component{
  render(){
    console.log(localStorage.getItem("Authorization"))
    return(
        <div className="comp">
           {
             localStorage.getItem("Authorization")?
             (
                <TopNavbar>
                    <Sidenav> 
                        <Switch>
                            <Route path="/profile" component={Profile} />
                            <Route exact path="/payment-history" component={PaymentHistory} />
                            <Route exact path="/profile" component={PaymentHistory} />
                            <Route exact path="/users" component={Users} />
                            <Redirect to="/profile" />
                        </Switch> 
                    </Sidenav>
                </TopNavbar> 
             ):(
              <Switch>
                <TopNavbar>
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/payment-history" component={PaymentHistory} />
                        <Redirect to="/login" />
                      
                </TopNavbar> 
              </Switch> 
             )
           }
        </div>
    );
  }
}
export default App;