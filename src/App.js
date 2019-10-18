import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { getYelp } from './services/api-helper';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundImg: []
    }
  }
  
  componentDidMount = async () => {
    let findSomething = await getYelp('10001');
    console.log(findSomething);
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
      </div>
    );

  }
}

export default App;
