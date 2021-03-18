import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => this.setState({ monsters: users }))
  }


  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    )
  }
}

export default App;






















/**
 * // REVIEW FOR JSX STATE AND CLASS COMPONENTS
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// older versions of React used class components and newer uses function based components.

class App extends Component {
  constructor() {
    super();

    // this is the state and we can change the p tag to whats in the state by doing this... {this.state.string} and uit changes the p tag to whatever the value is 'Hello vee'
    this.state = {
      string: 'Hello Vee baby'
    }
  }
  render() {
    return (
      <div className='App'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: 'LMAO CHANGED WITH SETSTATE' })}>Change Text</button>
      </div>
    )
  }
}

export default App;


*/