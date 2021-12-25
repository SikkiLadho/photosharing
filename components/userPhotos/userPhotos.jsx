import React from 'react';
import './userPhotos.css';
import { Link } from "react-router-dom";
import {  Typography } from '@material-ui/core';


import fetchModel from '../../lib/fetchModelData.js';

 import Card from "@material-ui/core/Card";
 import CardActionArea from "@material-ui/core/CardActionArea";
 import CardContent from "@material-ui/core/CardContent";
 import CardMedia from "@material-ui/core/CardMedia";

 
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      userData: {},
      userId: this.props.match.params.userId,
      userList: [],


    }    

  }
componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidMount() {
    fetchModel("http://localhost:3000/photosOfUser/" + this.state.userId).then((data) => {
        this.setState({
          photos: data,
        })    

  
        });

      fetchModel("http://localhost:3000/user/list").then((data) => {
      this.setState({
        userList: data
      }) 
      
  //    console.log("User list in photos:", data);

      });

        

        fetchModel("http://localhost:3000/user/"  + this.state.userId).then((data) => {

          this.setState({
            userData: data,
          })    
          

          this.context.setTitle(data.first_name + "'s Photos");
          
          });


      }


  // componentDidUpdate() {
  //   console.log("UserID:", this.state.userID);

  //   fetchModel("http://localhost:3000/photosOfUser/" + String(this.state.userID)).then((data) => {
  //       this.setState({
  //         userList: data
  //       })    
  
  //       });
  //       fetchModel("http://localhost:3000/user/"  + String(this.state.userID)).then((data) => {
  //         this.setState({
  //           UserPhotos: data
  //         })    
    
  //         });
  //     }

  // static getDerivedStateFromProps(props, state){
  //   return { 
  //     userDetail: [],
  //     userData: [],
  //     userId: props.match.params.userId,
   
  //   };
  // }



  render() {
    return (
<React.Fragment>
       { this.state.photos.map((item) => (
        <Card sx={{ maxWidth: 40 }} key={item._id} >
            <CardMedia
            component="img"
            height="400"
            image={`../../images/${item.file_name}`}
            >
            
              
              </CardMedia>

              <CardContent> <Typography>Photo Created: {item.date_time}</Typography> </CardContent>
            {"comments" in item ? item.comments.map(item => ( 
            <CardContent key={item._id}>
        
        
        <CardActionArea component={Link} replace to={`/users/${item.user_id}`}>    
                <Typography  gutterBottom variant="h5" component="h2">
                  
                  {this.state.userList.length > 0 ? this.state.userList.find(a => a._id === item.user_id).first_name: ""}
                  </Typography>
                    
          </CardActionArea>
                <Typography variant="body2" color="textSecondary" component="p">
                 {item.comment}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Comment Created: {item.date_time}
                </Typography>
                </CardContent>

  )) : <CardContent> <Typography>No Comments</Typography> </CardContent>}
              
          
        </Card>
       ))}
       </React.Fragment>
       ); }}



export default UserPhotos;
