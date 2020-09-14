import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './Header.css'
import logo from './logo.png'
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import { red } from '@material-ui/core/colors';





const useStyles = makeStyles((theme) => ({

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(0),
  },
  avatar: {
    backgroundColor: red[500],

  },

}));





function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="header__center">
        <input type="text" />
        <Avatar aria-label="recipe" className={classes.avatar}>
          <SearchIcon />
        </Avatar>

      </div>

      <div className="header__right">
        <p>Become a host</p>
        <div className="icon__lang">
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        <div className="menu__input">
          <input className="avatar" />
          <MenuIcon
            className={classes.menuButton}
            onClick={handleClick}
          />
          <Avatar
            className={classes.small}
          />
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Header
