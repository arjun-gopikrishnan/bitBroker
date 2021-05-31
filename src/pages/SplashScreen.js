import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/splashComponents/Header';
import DisplayCard from '../components/splashComponents/DisplayCard';
import Navbar from '../components/splashComponents/Navbar'

const backgroundImage = 'url(https://images.unsplash.com/photo-1612461313144-fc1676a1bf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1291&q=80)'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: backgroundImage,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 72%',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#001a1d',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#001a1d',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#001a1d',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: '#001a1d',
    },
  },
}));
export default function SplashScreen(props) {
  const classes = useStyles();
  console.clear();
  console.log(props.hooks.setSign)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar hooks={props.hooks} />
      <Header />
      <DisplayCard />
    </div>
  );
}
