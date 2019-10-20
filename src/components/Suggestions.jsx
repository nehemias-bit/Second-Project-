import React from 'react';

export default function Suggestions(props) {
  return (
    <div id="suggestions">
      {
        props.onLoad.map(each => (
          <div className="on-load-results" key={each.id}>
            <h1>{each.name}</h1>
            <img src={each.image_url} alt="restaurant" />
            <p><h4>Phone Number:</h4> {each.display_phone}</p>
            <h4>{each.price}</h4>
            <p><h4>Rating:</h4> {each.rating} Based Off {each.review_count} Reviews</p>
            <h4>Deliver: {each.transactions[0] ? 'Yes!' : 'No Sorry!'}</h4> <br/> <br/>
            <a href={each.url} target="_blank">Visit Website!</a>
          </div>
          ))
      }
    </div>
  )
}