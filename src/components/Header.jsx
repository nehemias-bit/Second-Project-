import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (

    <div id="header">
      <h1>Sondar</h1>
      <Link to='/' id="header-link">Home</Link>
    </div>
  )
}