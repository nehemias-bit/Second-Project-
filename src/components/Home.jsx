import React from 'react';
import HomeSearch from './HomeSearch';
import Suggestions from './Suggestions';

export default function Home(props) {
  return (
    <>
      <div id="home">
        <HomeSearch handleChange={props.handleChange} handleSubmit={props.handleSubmit} search={props.search} onLoad={props.onLoad}/>
        <Suggestions onLoad={props.onLoad}/>
      </div>
    </>
  )
}