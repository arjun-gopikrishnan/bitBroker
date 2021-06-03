import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';import LogOut from './LogOut';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import StoreIcon from '@material-ui/icons/Store';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  list:{
    display: 'flex',
    flexDirection: 'column',
    flex: '1'

  },
  tabList: {
    flexGrow: '1',
    marginTop: '10px'
  },
  root: {
    display: 'flex',
  },
  logout: {
    marginTop: 'auto'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  icon:{
      color: '#adadac'
  },
  topicon:{
    color: '#adadac',
    fontWeight :'bold',
    fontSize: '20px',
},
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title:{
    marginTop: '10px',
  },
  
  toolbar: {
    color: '#adadac',
    paddingBottom: '6.5px',
    paddingTop: '6.5px'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  activeIcon: {
    color: 'rgb(81, 188, 218)',
  },
  activeText: {
    color: 'rgb(81, 188, 218)',
    fontSize: '1.3rem'
  },
  iconText: {
    fontSize: '1.1rem'
  },
  listItem: {
    marginBottom: '20px'
  }
}));
const Sidebar = (props)=>{
    const classes = useStyles();
    return (
    <div className={classes.list}>
      <div className={classes.toolbar} >
        <ListItem button key={'TopIcon'}>
          <ListItemIcon className = {classes.activeIcon}>
            <DeveloperBoardIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="h5" className={classes.title}>BitBroker</Typography>
        </ListItem>
      </div>
      <Divider />
      <List className={classes.tabList}>
        <ListItem button key={'Dashboard'} className={classes.listItem} onClick={props.sidebarHooks.handleDash}>
          <ListItemIcon className = {props.sidebarHooks.activeTab==='Dashboard'?classes.activeIcon:classes.icon}> <AccountBalanceIcon/> </ListItemIcon>
          <Typography className = {props.sidebarHooks.activeTab==='Dashboard'?classes.activeText:classes.iconText} >Dashboard</Typography>
        </ListItem>
        <ListItem button key={'Holdings'} className={classes.listItem} onClick={props.sidebarHooks.handleHoldings}>
          <ListItemIcon className = {props.sidebarHooks.activeTab==='Holdings'?classes.activeIcon:classes.icon}> <ShowChartIcon/> </ListItemIcon>
          <Typography className = {props.sidebarHooks.activeTab==='Holdings'?classes.activeText:classes.iconText} >Holdings</Typography>
        </ListItem>
        <ListItem button key={'Market'} className={classes.listItem} onClick={props.sidebarHooks.handleMarket}>
          <ListItemIcon className = {props.sidebarHooks.activeTab==='Market'?classes.activeIcon:classes.icon}> <StoreIcon/> </ListItemIcon>
          <Typography className = {props.sidebarHooks.activeTab==='Market'?classes.activeText:classes.iconText} >Market</Typography>
        </ListItem>
        <ListItem button key={'Profiles'} className={classes.listItem} onClick={props.sidebarHooks.handleProfile}>
          <ListItemIcon className = {props.sidebarHooks.activeTab==='Profile'?classes.activeIcon:classes.icon}> <PersonOutlineIcon/> </ListItemIcon>
          <Typography className = {props.sidebarHooks.activeTab==='Profile'?classes.activeText:classes.iconText} >Profile</Typography>
        </ListItem>
      </List>
      <Divider />
      <List className={classes.logout}>
          <ListItem button key={'Logout'}>
              <ListItemIcon className = {classes.icon}>
                <LogOut logOut = {props.logOut}/>
              </ListItemIcon>
            <ListItemText primary={'Logout'}/>
          </ListItem>
      </List>
   </div>
    );
}
    

export default Sidebar;