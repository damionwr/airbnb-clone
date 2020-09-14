import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Search from './Search';
import Dialog from '@material-ui/core/Dialog';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    borderRadius: "999px",
    paddingTop: '10px',
    margin: "-5px",
  },
  tab: {
    borderLeftColor: '#c0c5c1',
    borderLeft: '1px solid'
  },
  formControl: {
    minWidth: 320,
  },
  avatar: {
    backgroundColor: red[500],
    borderLeftColor: '#c0c5c1',
    borderLeft: '1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },

});

export default function IconLabelTabs() {


  const history = useHistory();
  const classes = useStyles();
  const [showSearch, setshowSearch] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper rounded className={classes.root}>
        <Tabs

          variant="minWidth"
          indicatorColor="primary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab onClick={() => setshowSearch(!showSearch)} label="DATE&LOC" />
          <Tab className={classes.tab} label="FAVORITES" />
          <Tab className={classes.tab} onClick={handleClickOpen} label="HOUSE" />
          <Tab className={classes.tab} onClick={() => history.push('/search')} icon={<Avatar className={classes.avatar}><SearchIcon /></Avatar>} />


        </Tabs>
      </Paper>
      {showSearch && <Search />}


      <div className="dialog">
        <Dialog className={classes.formControl} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <h2>SEARCH Homes</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>

  );
}