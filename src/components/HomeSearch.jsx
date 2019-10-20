import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeSearch(props) {
  return (
    <>
      <div id="home-search">
        <form onSubmit={props.handleSubmit}>
          <input type="text" placeholder="Food item, Restaurant name..." name="restaurant" onChange={props.handleChange}/>
          <input type="text" placeholder="Location city, address..." name="location" onChange={props.handleChange}/>
          <select>
            {
              
            }
          </select>
          {/* <Link to={'/specific-search '}> */}
            <button>Search</button>
          {/* </Link> */}
        </form>
     </div>
    </>
  )
}