import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarRateIcon from '@material-ui/icons/StarRate';
function SearchResult({

  img,
  location,
  title,
  description,
  star,
  price,
  total
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="rooms" />
      <FavoriteBorderIcon
        className="searchResult__heart"
      />
      <div className="searchResult__info">
        <div className="info__top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="info__bottom">
          <div className="searchResult__stars">
            <StarRateIcon
              className="searchResult__star"
            />
            <p><strong>{star}</strong></p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchResult
