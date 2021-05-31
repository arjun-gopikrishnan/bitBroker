import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: 'yellow',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.9rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4.5rem',
    },
  },
  goDown: {
    color: 'yellow',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.056rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.52rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.52rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4rem',
    },
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            If You've Got The Time, <br />
            <span className={classes.colorText}>
            We've Got The Exchange
            </span>
          </h1>
          <Scroll to="splash-tabs" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
