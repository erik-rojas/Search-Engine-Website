import React, { Component } from 'react'

import Searchbar from './Searchbar/Searchbar'
import Menubar from './Menubar/Menubar'

import './index.scss'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Searchbar />
        <Menubar />
      </div>
    )
  }
}

export default Header
