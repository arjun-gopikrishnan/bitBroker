import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useLayoutEffect, useState } from 'react';
import LoginModal from '../components/LoginModal'
import SignUpModal from '../components/SignUpModal'
const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  dropdownWrapper: {
    width: '80%',
    margin: '0 auto',
    display: 'flex'
  },
  appbarTitle: {
    flexGrow: '1',
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    fontWeight: 'bold',
    PointerEvent: 'auto',
    pointer: 'cursor'
  },
  icon: {
    color: '#fff',
    fontSize: '3rem',
  },
  colorText: {
    color: 'yellow',
    pointer: 'cursor'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  poplinkLog: {
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginLeft: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
    marginRight: '1rem',
    fontFamily: 'Nunito',
    fontWeight: 'bold'
  },
  poplinkSign: {
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginLeft: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
    marginRight: '1rem',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    padding: '8px',
    borderRadius: '1rem',
    background: '#ae00e2',
  }
  ,
  placeholder:{
    display: 'flex',
    flexGrow: '1'
  },
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
    background: 'white',
    pointer: 'cursor',
  }
}));
export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logOpen, setLog] = React.useState(false);
  const [signOpen,setSign] = React.useState(false);
  const handlelogOpen = () => {
    setLog(true);
  };

  const handlelogClose = () => {
    setLog(false);
  };

  const handlesignOpen = () => {
    setSign(true);
  };

  const handlesignClose = () => {
    setSign(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
              <div className={classes.appbarTitle}> 
              <Link className= {classes.link} to = "/home">
                Bit<span className={classes.colorText}>Broker</span>
              </Link>
              </div>
              <Link className= {classes.poplinkLog} onClick = {() => setLog(true)}>
                Log<span className={classes.colorText}>in</span>
              </Link>
              <Link className= {classes.poplinkSign} onClick = {() => setSign(true)}>
                Sign<span className={classes.colorText}>up</span>
              </Link>
        </Toolbar>
      </AppBar>
      <LoginModal openModal={handlelogOpen} closeModal={handlelogClose} openVal={logOpen}/>
      <SignUpModal openModal={handlesignOpen} closeModal={handlesignClose} openVal={signOpen}/>
    </div>
  );
}
