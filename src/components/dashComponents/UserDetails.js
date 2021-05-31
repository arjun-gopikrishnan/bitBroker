import React from 'react';
import LogOut from './LogOut'
const UserDetails = (props) =>{
    const currentUser = props.currentUser;
    const name = currentUser.firstName + ' ' + currentUser.lastName;
    return (
      <div>
        <div>
          Welcome {name}
        </div>
        <div>
          Your apikey is {currentUser.apiKey}
        </div>
        <div>
          <LogOut logOut = {props.logOut}/>
        </div>
      </div>
    );
  }

  export default UserDetails;