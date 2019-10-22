import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './components/Header';
import HeaderTwo from './components/HeaderTwo';
import Home from './components/Home';
import SpecificSearch from './components/SpecificSearch';
import { getYelp } from './services/api-helper';
import { getYelpOnLoad } from './services/api-helper';
import { onLoadOptions } from './services/api-helper';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImg: [],
      city: '',
      onLoad: [],
      location: '',
      restaurant: '',
      price: '',
      search: [],
      // tracks the pages y-axis
      scrollY: null
    }
  }

  componentDidMount = async () => {
    //Add window event listener
    window.addEventListener('scroll', this.handleScroll)
    let location = await onLoadOptions();
    let city = location.data.city;
    this.setState({
      city: city
    })
    let onLoad = await getYelpOnLoad(this.state.city)
    let businesses = onLoad.data.businesses
    this.setState({
      onLoad: businesses
    })
    console.log(onLoad);
  }

  //Updates stae with the Y-Axis as the user scrolls
  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY
    });
  } 

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let userSearch = await getYelp(this.state.restaurant, this.state.location, this.state.price);
    console.log(userSearch)
    this.setState({
      search: userSearch.data.businesses
    })
    this.props.history.push('/specific-search'); // On submit this form will route to the SpecificSearch component with the route
    // in this render function. This history.push('/specific-search') is acting as a link
  }

  render() {
    
    let header;
    if (this.state.scrollY > 425) {
      header = <HeaderTwo handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    } 
    
    return (
      <div className="app">
      <Header />
      {header}
        
      <Route exact path="/" render={() => (<Home handleChange={this.handleChange} handleSubmit={this.handleSubmit} onLoad={this.state.onLoad} />)} />
      <Route exact path="/specific-search" render={() => (<SpecificSearch search={this.state.search} />)} />
      </div>
    );
  }
}
export default withRouter(App);
