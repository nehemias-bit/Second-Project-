import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SpecificSearch from './components/SpecificSearch';
import { getYelp } from './services/api-helper';
import { getYelpOnLoad } from './services/api-helper';
import { onLoadOptions } from './services/api-helper';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundImg: [],
      city: '',
      onLoad: [],
      location: '',
      restaurant: '',
      price: '',
      search: []
    }
  }

  componentDidMount = async () => {
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


  }

  render() {

    return (
      <div className="app">
        <Header />
        <Route exact path="/" render={() => (<Home handleChange={this.handleChange} handleSubmit={this.handleSubmit} onLoad={this.state.onLoad} />)} />
        {/* {this.state.search && <Route exact path="/specific-search" render={(props) => (<SpecificSearch {...props} search={this.state.search} />)} />} */}
        <SpecificSearch />
      </div>
    );
  }
}
export default App;
