import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import cards from '../static/cards';
import useWindowPosition from '../hook/useWindowPosition';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="splash-tabs">
      <Carousel>
        {cards.map( (card, i) => <ImageCard card={card} checked={checked} /> )}
      </Carousel>
    </div>
  );
}
