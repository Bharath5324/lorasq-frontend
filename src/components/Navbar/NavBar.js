import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import './NavBar.css'
// import Link from '@material-ui/core/Link';
const drawerStyle = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const drawClasses = drawerStyle();
  const [state, setState] = React.useState({
    drawer: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ["drawer"]: open });
  };
  return (
    <div className={classes.root}>
      <AppBar style={{"borderRadius": "10px"}} position="fixed" className="Appbar">
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to='/'>
              LoRaSq
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
            anchor="left"
            open={state["drawer"]}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
          <div
            className={clsx(drawClasses.list, {
              [drawClasses.fullList]: false,
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
              <List>
                <Link to="/admin" className={classes.link}>              
                  <ListItem button key="Inbox">
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='Inbox' />
                  </ListItem>
                </Link>
                <ListItem button key="Starred">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button key="Drafts">
                  <ListItemIcon><MailIcon /></ListItemIcon>
                  <ListItemText primary='Drafts' />
                </ListItem>
                <ListItem button key="Send Email">
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Send Email" />
                </ListItem>    
              </List>
              <Divider />
              <List>
              <ListItem button key="All Email">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Send Email" />
              </ListItem>
              <ListItem button key="Trash">
                <ListItemIcon><MailIcon /></ListItemIcon>
                <ListItemText primary='Trash' />
              </ListItem>
              <ListItem button key="Spam">
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="Spam" />
              </ListItem>
              </List>
          </div>
      </SwipeableDrawer>
    </div>
  );
}
