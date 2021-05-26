import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme)=>({
  root: {
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    width: '50vw',
    [theme.breakpoints.down('sm')]: {
      width: 350,
    },
    [theme.breakpoints.up('sm')]: {
      width: 580,
    },
    [theme.breakpoints.up('md')]: {
      width: 900,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1100,
    },
  },
  media: {
    height: 440
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    }
  },
  desc: {
    fontFamily: 'Nunito',
    color: '#ddd',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    },
  },
}));

export default function ImageCard({ card, checked }) {
  const classes = useStyles();
  //alert(checked);
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={card.imageUrl}
          title="Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {card.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">
          <a href = {card.link} target="_blank" className={classes.link}> 
            READ MORE
          </a>
        </Button>
      </CardActions>
      </Card>
    </Collapse>
  );
}
