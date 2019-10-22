import React from 'react';

export default function HeaderTwo(props) {
  return (
    <div>
      <header id="header-two">
        <form id="header-two-form" onSubmit={props.handleSubmit} >
          <input id="header-two-form-input-one" className="input-height" type="text" placeholder="Food Item, Restaurant Name..." name="restaurant" onChange={props.handleChange} />
          <input id="header-two-form-input-two" className="input-height" type="text" placeholder="City or Address or Zip Code..." name="location" onChange={props.handleChange}  />
          <select className="header-two-select" onChange={props.handleChange} name="price" defaultValue="Price Option">
            <option disabled value="Price Option">Price Option</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <button id="header-two-form-button" className="input-height">Search</button>
        </form>
      </header>
    </div>
  )
}