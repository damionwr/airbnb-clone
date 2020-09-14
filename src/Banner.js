import React from 'react';
import Button from '@material-ui/core/Button';
import './Banner.css'
import SearchTabs from './SearchTabs'
import { useHistory } from 'react-router-dom';

function Banner() {

  const history = useHistory()
  return (
    <div className="banner">


      <div className="banner__info">
        <h1> Get Out an Stretch your imagination</h1>
        <h5>Plan a different kind of gateaway to uncover the hidden gems near your</h5>
        <br />
        <Button onClick={() => history.push('/search')} variant="outlined" color="secondary">
          explore nearby
        </Button>
      </div>
      <div className="banner__search">
        <SearchTabs />
      </div>
    </div>
  )
}

export default Banner
