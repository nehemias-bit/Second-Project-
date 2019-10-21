import React from 'react';
import { Link } from 'react-router-dom';
// import Headroom from 'headroom';

export default function Header() {
  return (
  <>  
    <header id="header">
      <h1>Sondar</h1>
      <Link to='/' id="header-link">Home</Link>
      </header>

    {/* <Headroom> */}
    <header id="header-two" data-visible-range="400-">

    </header>
    {/* </Headroom>   */}
  </>
  )
}