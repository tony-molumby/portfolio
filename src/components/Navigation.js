import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Tabs,
  Tab 
}  from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../images/logo.png'

import { NavLink } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
            {/* <Typography variant="title" color="inherit" className={classes.flex}>
              PagnatoKarp
            </Typography> */}
          </NavLink>
          <Tabs >
            <NavLink to="/">
              <Tab label="Who" />
            </NavLink>
            <Tab label="Planning" />
            <Tab label="Services" />
            <Tab label="Fiduciary" />
          </Tabs>
          
            <Button color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);