import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:'aniket', age:22},
      {name:'naru', age:22},
      {name:'manali',age:22}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Handsome boiz</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi Heisenberg'));
  }
}

export default App;
