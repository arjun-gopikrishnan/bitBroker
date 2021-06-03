import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MoneyOffOutlinedIcon from '@material-ui/icons/MoneyOffOutlined';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    height: '60vh',
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
  pos: {
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '90%'
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
  }
}));

export default function Large(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const iconColor = props.iconColor?props.iconColor:green;
  const title = props.title?props.title:'Title';
  const subtitle = props.subtitle?props.subtitle:'Subtitle';
  const iconVal = props.iconvalue?props.iconvalue:1;
  const shareVal = props.shareVal?props.shareVal:'0$';

  return (
    <Card className={classes.root} variant="elevation">
      <CardContent className = {classes.cardContent}>
        <div className={classes.cardRight}>
          <Typography className={classes.pos} color="textSecondary" variant="subtitle2" align="right">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textPrimary" variant="h4" align="right">
            {shareVal}
          </Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Button size="small">
          {subtitle}
        </Button>
      </CardActions>
    </Card>
  );
}