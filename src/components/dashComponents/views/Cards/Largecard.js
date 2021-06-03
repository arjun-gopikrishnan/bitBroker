import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Graph from './Graph'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '95%',
      borderRadius: '7px',
      height: '65vh',
      [theme.breakpoints.down('md')]: {
        width: '80%',
        marginLeft: '10%',
        marginBottom: '10%'
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    cardContent: {
      height: '80%'
    },
    cardRight:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    icon: {
      fontSize: '70px',
      [theme.breakpoints.down('md')]: {
        fontSize: '40px',
      }
    },
    graphText1: {
        marginTop: '10px',
        marginLeft: '20px'
    },
    graphText2: {
        marginTop: '5px',
        marginLeft: '20px'
    }
}));

export default function Large(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevation">
        <Typography color="textPrimary" variant="h5" className={classes.graphText1}>Transaction history</Typography>
        <Typography color="textSecondary" variant="h6" className={classes.graphText2}>1 Week</Typography>
        <CardContent className = {classes.cardContent}>
            <Graph />
        </CardContent>
        <CardActions>
        
        </CardActions>
    </Card>
  );
}