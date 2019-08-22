import React,{Component} from 'react';
import { userRequest, searchuserRequest } from '../../store/Users/actions';
import { connect } from "react-redux";
import logo from '../../img/user.jpg';
import List from '../Common/SearchResult'
import StateHolder from '../Common/StateHolder';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl, Dropdown} from 'react-bootstrap';
import { link } from 'fs';
import _ from 'loadsh';
class Users extends Component {
    constructor(){
        super();
        this.state = {
            searchData: [],

        }
    }
   async componentDidMount() {
        await this.props.userRequest();
        this.setState({
            searchData  : this.props.user,
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(!_.isEqual(prevProps.user, this.props.user)){
            this.setState({
                searchData  : this.props.user
            })
        }
        if(!_.isEqual(prevProps.searcheduser, this.props.searcheduser)){
            // console.log("abc..........",prevProps.searcheduser);
            this.setState({
                searchData  : this.props.user
            })
        }
    }
    componentWillReceiveProps(){
        console.log("component will recieve props has been called.............");
    }
    startChat = () =>{
        console.log("chat box clicked");
    }
    render(){
        var { user }= this.props;
        let { searchData  }= this.state;
            console.log("search Data",searchData);
        return(
           <Container className="search-user">
                {
                    searchData?(
                        <Row className="users-searched">
                        {searchData.map((i,j)=>{
                            return  <Col xs={6}> 
                                        <div className="container-user-card">
                                            <div className="search-user-card">
                                                <img src={i.profile} className="user-searched-image"/>
                                                <p className="user-name"><b>{i.name}</b> <i class="fa fa-circle"></i></p>
                                                <p className="user-designation">6360474553</p>
                                                <span className="usd"><i class="fa fa-usd" aria-hidden="true"></i> {i.price}</span>
                                            </div>
                                            <div className="footer-card">
                                                <p><i class="fa fa-thumbs-up"></i> {i.likes} <span className="f-gray"></span></p>
                                                <p><i class="fa fa-thumbs-down"></i> {i.dislike} <span className="f-gray"></span></p>
                                                <p className="chat-start" onClick={this.startChat}> <i class="fa fa-commenting" aria-hidden="true"></i> <span className="f-gray">available</span></p>
                                            </div>
                                        </div>
                                    </Col>
                            })}
                        </Row>
                    ):
                    (
                        <p>aadfad</p>
                    )
                }

           </Container>
        )
    }
}
const mapStateToProps = state => ({
    user: state.userReducer.users
});
const mapDispatchToProps = function(dispatch) {
    return {
        userRequest: function(userData) {
        dispatch(userRequest(userData));
       },
    
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users);
