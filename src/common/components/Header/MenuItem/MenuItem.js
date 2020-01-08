import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './MenuItem.scss'

class MenuItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      itemName: '',
      isClicked: false
    }
  }

  onClicked = () => {
    const { itemName, onItemClicked } = this.props

    onItemClicked(itemName)
  }

  render() {
    const { itemName, isClicked } = this.props

    return (
      <div className='menuItem'>
        <div className='itemContent' onClick={ () => this.onClicked() }>{itemName}</div>
        { isClicked && <div className='itemUnderline' /> }
      </div>
    )
  }
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  isClicked: PropTypes.bool,
  onItemClicked: PropTypes.func
}

export default MenuItem
