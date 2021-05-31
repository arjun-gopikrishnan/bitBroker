import React from 'react';
import UserDetails from '../components/dashComponents/UserDetails';
var axios = require('axios');

export default function Dashboard(props) {
  const setSign = props.hooks.setSign;
  const setUser = props.hooks.setUser;
  const currentUser = props.currentUser;
  console.log(currentUser)
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
    <div>
      Dashboard
      {currentUser?
        <UserDetails currentUser={currentUser} logOut={logOut}/>
        :
        <p>Loading</p>
      }
    </div>
  );
}
