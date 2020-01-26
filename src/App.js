import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
          <div className="App">
              <h1>Handsome boiz</h1>
              <Person name="Aniket" age="22"/>
              <Person name="Kapil" age="22"/>
              <Person name="Swapnaja" age="22"/>  
          </div>
      );
    //   return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi Heisenberg'));
  }
}

export default App;
