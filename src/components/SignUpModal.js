import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const primaryColor = '#326771';
const secondaryColor = '#9000d9';
const backgroundUrl = 'https://images.unsplash.com/photo-1538170819641-15b741105cb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'

const useStyles = makeStyles((theme) => ({
  modal: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'7%',
    
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down('sm')]: {
     width: '80%',
     minHeight: '50vh'
    },
    [theme.breakpoints.up('sm')]: {
     width: '70%',
     minHeight: '50vh'
    },
    [theme.breakpoints.up('md')]: {
     width: '50%',
     minHeight: '60vh'
    },
    [theme.breakpoints.up('lg')]: {
     width: '40%',
     minHeight: '70vh'
    },
    padding: '0px',
    display: 'flex',
    marginTop: '10vh',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  link: {
    textDecoration: 'none'
  },
  formTab: {
    backgroundColor: '#FFF',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '4rem',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl:{
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '2.5rem',
    },
  },
  formTextBox: {
    width: '100%',
    height: '4rem',
    marginLeft: '11%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
      marginLeft: '0%',
      height: '3rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8rem',
      marginLeft: '11%',
      height: '4rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      marginLeft: '11%',
      height: '4rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
      marginLeft: '11%',
      height: '6rem'
    },
  },
  inputLabel: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginLeft: '0%',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
      marginLeft: '11%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
    width: '70%',
    height: '2rem',
    marginBottom: '0.8rem'
  },
  inputField: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: '0%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      marginLeft: '11%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      marginLeft: '11%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      marginLeft: '11%',
    },
    height: '2rem',
    marginLeft: '10%',
    border: '1px solid #D3D3D3',
    borderRadius: '1rem',
    padding: '10px',
    opacity: '50%'
  },
  submitButton: {
    color: 'white',
    width: '70%',
    height: '2rem',
    fontSize:'1rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      height: '2rem'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
      height: '2rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
      height: '2rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
      height: '2.2rem'
    },
    marginLeft: '10%',
    backgroundColor: secondaryColor,
    border: '1px solid #9000d9',
    borderRadius: '1rem',
    cursor: 'pointer'
  },
  signupText: {
    fontSize: '1rem',
    width: '70%',
    height: '2rem',
    marginLeft: '11%',
    marginTop: '-1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginLeft: '10%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      fontSize: '1.2rem',
      marginLeft: '11%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.78rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },

  },
  ghostBreak: {
    [theme.breakpoints.up('xs')]: {
      display:'flex'
    },
    [theme.breakpoints.up('sm')]: {
      display:'none'
    },
  },
  colorText: {
    color: secondaryColor,
    cursor: 'pointer',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      display:'flex',
      marginLeft: '0px'
    },
  },
  imageTab: {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '60%'
  }
}));

export default function SignUpModalModal(props) {
  console.log(props)
  const classes = useStyles();
  const handleOpen = props.openModal;
  const handleClose = props.closeModal;
  var open = props.openVal;
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email,username,password);
  }

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div className={classes.formTab}>
          <div className={classes.formTextBox}>
            Hop onboard!
          </div>
          <form className={classes.loginForm} onSubmit = {e => { handleSubmit(e) }}>
            <div className={classes.formControl}>
              <label className={classes.inputLabel}>Email</label>
              <input type='text' className={classes.inputField} placeholder='example@dummy.com' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className={classes.formControl}>
              <label className={classes.inputLabel}>Username</label>
              <input type='text' className={classes.inputField} placeholder='John Doe' onChange={e => setUsername(e.target.value)} />
            </div>
            <div className={classes.formControl}>
              <label className={classes.inputLabel}>Password</label>
              <input type='password' className={classes.inputField} placeholder='Min. 8 characters' onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={classes.formControl}>
              <input type='submit' value="Sign Up" className={classes.submitButton}/>
            </div>
            <div className={classes.formControl}>
              <label className={classes.signupText}>
                Already have an account?<Link className={classes.link}><span className={classes.colorText}>Log in here</span></Link>
              </label>
            </div>
          </form>
        </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}