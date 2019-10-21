import React from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

export default function Header() {
  return (
  <>  
    <header id="header">
      <h1>Sondar</h1>
      <Link to='/' id="header-link">Home</Link>
    </header>

      <Headroom className="headroom" className="headroom--pinned" className="headroom--unpinned"
      className="headroom--scrolled" className="headroom--unfixed"> 
      <header id="header-two">

      </header>
    </Headroom>    
  </>
  )
}
