import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeSearch(props) {
  return (
    <>
      {/* <div id="home-search"> */}
        <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder="Food Item, Restaurant Name..." name="restaurant" onChange={props.handleChange} id="restaurant" />
        <input type="text" placeholder="City or Address or Zip Code..." name="location" onChange={props.handleChange} id="location" />
          <select>
            {
              
            }
          </select>
          <Link to={'/specific-search '} id="form-link">
            <button>Search</button>
          </Link>
        </form>
     {/* </div> */}
    </>
  )
}