import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      count: 0,
    }
  }

  handleIncreaseNumber = () => {
    this.setState(state => ({
      count: state.count + 1,
    }))
  }

  handleDecreaseNumber = () => {
    this.setState(state => ({
      count: state.count - 1,
    }))
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Link className='App-link' to={'/users'}>
            Users Page
          </Link>
          <div name='count'>{this.state.count}</div>
          <button name='increase' onClick={this.handleIncreaseNumber}>
            Increase
          </button>
          <button name='decrease' onClick={this.handleDecreaseNumber}>
            Decrease
          </button>
        </header>
      </div>
    )
  }
}

export default App
