import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <div>     
        <div style={{backgroundColor: 'red', textAlign: "center", Width: '100%', height: 200}}>
            This is our Header
        </div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/game1'>Game1</Link></li>
                <li><Link to='/game2'>Game2</Link></li>
                <li><Link to='/about'>About Us</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/game1' component={Game1}/>
              <Route path='/game2' component={Game2}/>
              <Route path='/about' component={About}/>
            </Switch>
            <div style = {{backgroundColor: 'yellow', textAlign: "center", Width: '100%', height: 50}}>
            This Is Our Footer
            </div>
      </div>
   
      


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
