import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { getYelp } from './services/api-helper';
import { getYelpOnLoad } from './services/api-helper';
import { onLoadOptions } from './services/api-helper';
import SpecificSearch from './components/SpecificSearch';
import { Route } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundImg: [],
      city: '',
      onLoad: [],
      location: '',
      restaurant: '',
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
      [name]: value,
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let userSearch = await getYelp(this.state.restaurant, this.state.location);
    this.setState({
      search: userSearch
    })
    console.log(userSearch)
  }
  
  render() {

    return (
      <div className="app">
        <Header />
        {/* <Home handleChange={this.handleChange} handleSubmit={this.handleSubmit} onLoad={this.state.onLoad}/> */}
        <Route exact path="/" render={() => (<Home handleChange={this.handleChange} handleSubmit={this.handleSubmit} onLoad={this.state.onLoad}/>)} />
        <Route path={"/specific-search"} render={() => (<SpecificSearch />)}/>
      </div>
    );
  }
}

export default App;
