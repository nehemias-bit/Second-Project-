import React from 'react';

export default function Suggestions(props) {
  return (
    <div id="suggestions">
      {
        props.onLoad.map((each) => (
          <div className="on-load-results">
            <h1>{each.name}</h1>

          </div>
          ))
      }
    </div>
  )
}