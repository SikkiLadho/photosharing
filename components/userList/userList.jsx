import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import { Link } from "react-router-dom";
import fetchModel from '../../lib/fetchModelData.js';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    }

   // console.log("State:", this.state.userList);
  }

 
  componentDidMount() {
  fetchModel("http://localhost:3000/user/list").then((data) => {
      this.setState({
        userList: data
      })    

      });
    }

    
  userClickHandler(user){
      console.log("User:", user);
  }
  
  render() {
    return (
      <div>
        <Typography variant="body1">
          User List:
        </Typography>
        
        <List component="nav">

        {
          this.state.userList.map(a => {
            return <React.Fragment key={a._id}> <ListItem button component={Link} replace to={"/users/" + a._id} ><ListItemText  primary={a.first_name} /></ListItem><Divider /></React.Fragment>
          })
        }
        </List>
      </div>
    );
  }
}

export default UserList;
