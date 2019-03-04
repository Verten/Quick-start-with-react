import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Link className='App-link' to={'/users'}>
            Users Page
          </Link>
        </header>
      </div>
    )
  }
}

export default App
