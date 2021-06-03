import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Minicard from './Cards/Minicard'
import Largecard from './Cards/Largecard'
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import { teal } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f3ef',
        justifyContent: 'center'
    },
    mincardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '2.5%',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
    },
    
}));


const Dash = (props) =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.mincardContainer}>
                <Minicard iconColor={green} title="BitCoin" subtitle="Most valuable Share" shareVal="38.5K$" iconvalue={1}/>
                <Minicard iconColor={red} title="DogeCoin" subtitle="Least valuable Share" shareVal="0.41$" iconvalue={2}/>
                <Minicard iconColor={teal} title="+237 Today" subtitle="Total profit/Loss" shareVal="1000$" iconvalue={3}/>
                <Minicard iconColor={orange} title="Cumulative share value" subtitle="Wallet Balance" shareVal="2800$" iconvalue={4}/>
            </div>
            <div className={classes.mincardContainer}>
                <Largecard />
            </div>
        </div>
    );
}

export default Dash;