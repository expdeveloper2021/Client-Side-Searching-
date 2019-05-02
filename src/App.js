import React, { Component } from 'react';
import './App.css';
import Forces from './Components/Forces'
import Crimes from './Components/Crimes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      forces: false,
      crimes: false,
      // Initially setting the classNames for navbar
      das: "active",
      for: "",
      cri: ""
    }
  }

  render() {
    return (
      <div className="app">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">Eight App</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className={this.state.das}><a onClick={() => this.setState({ forces: false, crimes: false, das: "active", for: '', cri: '' })}>Dashboard</a></li>
                <li className={this.state.for}><a onClick={() => this.setState({ forces: true, crimes: false, for: "active", das: '', cri: '' })}>Forces</a></li>
                <li className={this.state.cri}><a onClick={() => this.setState({ crimes: true, forces: false, cri: "active", for: '', das: '' })}>Crime Categories</a></li>
              </ul>
            </div>
          </div>
        </nav>


        {!this.state.crimes && !this.state.forces &&
          <div>
            <h3>Please go to another component to render</h3>
          </div>
        }

        {/* Using conditional rendering to render components */}
        {this.state.forces && !this.state.crimes && <Forces />}
        {this.state.crimes && !this.state.forces && <Crimes />}
      </div>
    )
  }
}

export default App;
