import React from 'react';
import Dashpanel from '../components/dashComponents/Dashpanel'
import { makeStyles } from '@material-ui/core/styles';

var axios = require('axios');

const useStyles = makeStyles((theme)=>({
  root: {
    backgroundColor: '#f4f3ef'
  }
}));

export default function Dashboard(props) {
  const setSign = props.hooks.setSign;
  const setUser = props.hooks.setUser;
  const currentUser = props.currentUser;
  const classes = useStyles();

  const logOut = async () =>{
    const data = {
      username: currentUser.username,
      apiKey: currentUser.apiKey,
    };
    var config = {
      method: 'post',
      url: 'http://localhost:8080/logout',
      headers: { 
        'Content-Type': 'application/json' 
      },
      data : JSON.stringify(data)
    };
 
    try{
      const response = await axios(config);
      if(response.data.error === false){
        window.sessionStorage.clear();
        setSign(false);
        setUser(true);
      }else{
        alert('Something went wrong');
      }
    }catch(error){
      console.log(data);
    }   
  }

  return (
    <div className = {classes.root}>
      <Dashpanel props={props} logOut={logOut}/>
    </div>
  );
}

/*
currentUser={currentUser} logOut={logOut}
*/
