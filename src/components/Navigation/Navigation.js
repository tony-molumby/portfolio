import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Switch, 
  FormControlLabel, 
  FormGroup, 
  MenuItem, 
  Menu,
  Tabs
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link, Redirect } from 'react-router-dom'
import Sections from './Sections'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  tabs: {
    flexGrow: 1,
  }
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    value: false,
    routeNames: [
      {
        name:"Boxed Events",
        value: false
      },
      {
        name: "Services",
        value: "/services"
      },
      {
        name: "Pricing",
        value: "/pricing"
      },
      {
        name: "About",
        value: "/about"
      }
    ]
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = (event, value) => {
    this.setState({value}, () =>{
      <Redirect to={"/" + value.toLowerCase()} />
    })
    
  };

  link = itemProps => <Link to="" {...itemProps}/>
  
  render() {
    const { classes } = this.props;
    const { auth, anchorEl, value, routeNames } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
          <AppBar postion="static">
            <Toolbar>
              <Tabs value ={value} onChange={this.handleChange} className={classes.tabs}>
                <Sections routeNames={routeNames} />
              </Tabs>
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
            </Toolbar>
          </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);