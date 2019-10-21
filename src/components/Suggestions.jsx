import React from 'react';

export default function Suggestions(props) {
  return (
    <div id="suggestions">
      {
        props.onLoad.map(each => (
          <div className="on-load-results" key={each.id}>
            <h1>{each.name}</h1>
            <img src={each.image_url} alt="restaurant" />
            <p><strong>Phone Number:</strong>{each.display_phone ? each.display_phone : 'Working on it!'}</p>
            <h4>{each.price}</h4>
            <p><strong>Rating:</strong> {each.rating} Based Off {each.review_count} Reviews</p>
            <h4>Deliver: {each.transactions[0] ? 'Yes!' : 'No Sorry!'}</h4> <br/> <br/>
            <a href={each.url} target="_blank" rel="noopener noreferrer" >Visit Website!</a>
          </div>
          ))
      }
    </div>
  )
}