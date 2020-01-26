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

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        { name: newName, age: 22 },
        { name: 'naru', age: 22 },
        { name: 'manali', age: 21 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'aniket', age: 22 },
        { name: event.target.value, age: 22 },
        { name: 'manali', age: 21 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Handsome boiz</h1>
        <button style={style} onClick={() => this.switchNameHandler('Ozu')}>Switch</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Uzu')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
      );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi Heisenberg'));
  }
}

export default App;
