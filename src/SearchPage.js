import React from 'react';
import SearchResult from './SearchResult';
import { makeStyles } from '@material-ui/core/styles';
import './SearchPage.css';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import KingBedIcon from '@material-ui/icons/KingBed';
import AirplanemodeInactiveIcon from '@material-ui/icons/AirplanemodeInactive';
import DeckIcon from '@material-ui/icons/Deck';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';



const useStyles = makeStyles((theme) => ({
  chip: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },

}));





function SearchPage() {

  const classes = useStyles();
  return (
    <div className="searchPages">
      <div className="searchPage__info">

        <p>62 Stays · 26 august to 30 august · 2 guest</p>
        <h1>Stay nearby</h1>
        <div className={classes.chip}>
          <Chip

            icon={<AirplanemodeInactiveIcon />}
            label="Cancellation flexability"
            variant="outlined"
            clickable
          />
          <Chip
            icon={<DeckIcon />}
            label="type of places"
            variant="outlined"
            clickable
          />
          <Chip
            icon={<AttachMoneyIcon />}
            label="Prices"
            variant="outlined"
            clickable
          />
          <Chip
            icon={<KingBedIcon />}
            label="Rooms abd Beds"
            variant="outlined"
            clickable
          />
          <Chip
            icon={<HomeIcon />}
            label="More Filters"
            variant="outlined"
            clickable
          />
        </div>

      </div>
      <SearchResult
        img="https://source.unsplash.com/L7EwHkq1B2s/320x170"
        location="Privet Room in Centrial Jamaica"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · free parking · Washing Machine"
        star={4.73}
        price="$40 / night"
        total="$134 total"

      />
      <SearchResult
        img="https://source.unsplash.com/0w8DUHgGGjs/320x170"
        location="Privet Room in western Mexico"
        title="Stay at this spacious cabin House"
        description="1 guest · 2 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · free parking · Washing Machine"
        star={5.00}
        price="$40 / night"
        total="$134 total"

      />
      <SearchResult
        img="https://source.unsplash.com/LjNpPNZWEr8/320x170"
        location="Privet house in Toranto Canada"
        title="Stay at this spacious  House"
        description="2 guest · 4 bedroom · 4 bed · 2.5  bathrooms · wifi · kitchen · free parking · Washing Machine"
        star={4.73}
        price="$80 / night"
        total="$284 total"

      />
      <SearchResult
        img="https://source.unsplash.com/Al9Cl-b7EFU/320x170"
        location="Privet Home in Barcelona Spain"
        title="Stay at this spacious  House"
        description="5 guest · 3 bedroom · 6 bed · 3  bathrooms · wifi · kitchen · free parking · Washing Machine"
        star={4.83}
        price="$70 / night"
        total="$254 total"

      />
      <SearchResult
        img="https://source.unsplash.com/Anfbz9JoGUY/320x170"
        location="Privet Home in Texas USA"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · free parking · Washing Machine"
        star={4.73}
        price="$100 / night"
        total="$464 total"

      />
      <SearchResult
        img="https://source.unsplash.com/oji_NGmBI5o/320x170"
        location="Privet Cabin in Ocho Rios Jamaica"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · wifi · kitchen · free parking · Washing Machine"
        star={4.73}
        price="$140 / night"
        total="$334 total"

      />
    </div>
  )
}

export default SearchPage
