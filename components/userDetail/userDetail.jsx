import React from 'react';

import {
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import fetchModel from '../../lib/fetchModelData.js';
import './userDetail.css';
import { Link } from "react-router-dom";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userDetail:[],
        userID: this.props.match.params.userId,
    }
   // console.log("User Data:", this.state.userDetail) 
  }
  

  componentDidMount() {
    fetchModel("http://localhost:3000/user/" + this.props.match.params.userId).then((data) => {
        this.setState({
          userDetail: data,
        })    

        this.context.setTitle(data.first_name + "'s Profile");
        });
      }



 
  render() {
    return (
        <List>
          <ListItem>
            <ListItemText secondary={this.state.userDetail.first_name +" "+ this.state.userDetail.last_name} primary="Name"/>
            <ListItemText secondary={this.state.userDetail.location } primary="Location"/>
            <ListItemText secondary={this.state.userDetail.occupation } primary="Occupation"/>
          </ListItem>
       
          <ListItem><ListItemText  primary="Description" secondary={this.state.userDetail.description} /></ListItem>
       
          <ListItem button component={Link} replace to={"/photos/" + this.props.match.params.userId} >
            <Button color='primary'>Photos</Button>
            </ListItem>
        </List>
    );
  }
}

export default UserDetail;
