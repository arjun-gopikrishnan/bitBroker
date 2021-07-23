import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dash from './views/Dash';
import Holdings from './views/Holdings';
import Market from './views/Market';
import Profile from './views/Profile';

const useStyles = makeStyles((theme) => ({
  root: {
   
  }
}));


const UserDetails = (props) =>{
  
  const tab = props.sidebarHooks.activeTab;
  const classes = useStyles();
  const handleView = (activeTab) =>{
    if(activeTab === 'Dashboard')
      return <Dash />;
    else if(activeTab === 'Holdings')
      return <Holdings props={props}/>;
    else if(activeTab === 'Market')
      return <Market />;
    else if(activeTab === 'Profile')
      return <Profile />
  } 
  return (
    <div className = {classes.root}>
      {handleView(tab)}
    </div>
  );
  }

  export default UserDetails;