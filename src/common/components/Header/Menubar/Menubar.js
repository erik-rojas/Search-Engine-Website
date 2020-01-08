import React, { Component } from 'react'

import MenuItem from '../MenuItem/MenuItem'
import DropdownMenu from '../../DropdownMenu'

import './Menubar.scss'

let dispMenuItems = ['Glance', 'All', 'Images', 'News', 'Videos', 'Maps']
let moreItems = ['Books', 'Shopping', 'Finance']

class Menubar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      curSelectedItemName: 'Glance'
    }
  }

  componentWillMount () {
    this.updateDimensions()
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    if (window.innerWidth < 370) {
      dispMenuItems = ['Glance', 'All']
      moreItems = ['Images', 'News', 'Videos', 'Maps', 'Books', 'Shopping', 'Finance']
    } else if (window.innerWidth < 440) {
      dispMenuItems = ['Glance', 'All', 'Images']
      moreItems = ['News', 'Videos', 'Maps', 'Books', 'Shopping', 'Finance']
    } else if (window.innerWidth < 510) {
      dispMenuItems = ['Glance', 'All', 'Images', 'News']
      moreItems = ['Videos', 'Maps', 'Books', 'Shopping', 'Finance']
    } else if (window.innerWidth < 580) {
      dispMenuItems = ['Glance', 'All', 'Images', 'News', 'Videos']
      moreItems = ['Maps', 'Books', 'Shopping', 'Finance']
    } else {
      dispMenuItems = ['Glance', 'All', 'Images', 'News', 'Videos', 'Maps']
      moreItems = ['Books', 'Shopping', 'Finance']
    }

    this.setState({ curSelectedItemName: this.state.curSelectedItemName })
  }

  onItemClicked = itemName => {
    this.setState({ curSelectedItemName: itemName })
  }

  onDropdownMenuItemClicked = itemName => {

  }

  renderDispMenuItems = () => {
    const { curSelectedItemName } = this.state

    return dispMenuItems.map((item, index) => {
      return (
        <MenuItem
          key={ index }
          itemName={ item }
          isClicked={ curSelectedItemName === item }
          onItemClicked={ (itemName) => this.onItemClicked(itemName) }
        />
      )
    })
  }

  render() {
    return (
      <div className='menuBar'>
        <div className='menuItems-section'>
          { this.renderDispMenuItems() }
          <DropdownMenu menuName={'More'} menuItems={moreItems} onItemClicked={(itemName) => this.onDropdownMenuItemClicked(itemName)} />
        </div>
        <div className='settings-section'>
          <button className='btn btn-settings'>{'Settings'}</button>
          <button className='btn btn-tools'>{'Tools'}</button>
        </div>
      </div>
    )
  }
}

export default Menubar
