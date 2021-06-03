import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Viewboard from './Viewboard' 
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    backgroundColor: '#f4f3ef',
    color: '#6a6560',
    borderBottom: '1px solid #dddddd'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#212120',
    color: '#adadac'
  },
  content: {
    flexGrow: 1,
    backgroundColor:'#f4f3ef',
    height: '100vh',
    padding: theme.spacing(3),
  },
  text: {
    fontFamily: 'Nunito',
  }
}));

function Dashpanel(props) {
  console.clear();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab,setactiveTab] = React.useState('Dashboard');
  const handleDash = () =>{
    setactiveTab('Dashboard');
  }

  const handleProfile = () =>{
    setactiveTab('Profile');
  }

  const handleHoldings = () =>{
    setactiveTab('Holdings');
  }

  const handleMarket = () =>{
    setactiveTab('Market');
  }

  const sidebarHooks = {
    handleDash,
    handleProfile,
    handleHoldings,
    handleMarket,
    activeTab
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} activeTab={activeTab}/>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {<Sidebar logOut={props.logOut} sidebarHooks={sidebarHooks}/>}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {<Sidebar logOut={props.logOut} sidebarHooks={sidebarHooks}/>}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.props.currentUser?
          <Viewboard currentUser={props.props.currentUser} sidebarHooks={sidebarHooks}
          />
          :
          <p>Loading</p>
        }
      </main>
    </div>
  );
}

export default Dashpanel;
