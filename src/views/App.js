import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Header from '../common/components/Header'
import Glance from './Glance'

import './App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path='/' component={Glance} />
      </Router>
    )
  }
}

export default App
