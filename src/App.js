import React from 'react';
import './App.css';
import { getYelp } from './services/api-helper';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  componentDidMount = async () => {
    let findSomething = await getYelp('10001');
    console.log(findSomething);
  }
  
  render() {
    return (
      <div className="app">

      </div>
    );

  }
}

export default App;
