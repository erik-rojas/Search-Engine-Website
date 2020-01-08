import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import down_arrow_icon from '../../../assets/images/icon/down_arrow.png'

import './index.scss'

class DropdownMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dropdownIsOpen: false,
      search_key: '',
      matched_Items: []
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClickEvent)

    const { menuItems } = this.props
    this.setState({ matched_Items: menuItems })
  }

  handleClickEvent = event => {
    const element = event.target.className

    if (element === 'menu-default' || element === 'menuItem' || element === 'menu-weather' || element === 'search') {
    } else {
      this.setState({ dropdownIsOpen: false })
    }
  }

  onMenuClicked = () => {
    const { dropdownIsOpen } = this.state
    
    this.setState({ dropdownIsOpen: !dropdownIsOpen })
  }

  onDropdownMenuItemClicked = (item) => {
    const { onItemClicked } = this.props

    this.setState({ dropdownIsOpen: false })
    onItemClicked(item)
  }

  onSearchInputChanged = (event) => {
    const { menuItems } = this.props
    const inputValue = event.target.value
    this.setState({ search_key: inputValue })

    if (inputValue) {
      let matched_items = menuItems.map((item) => {
        const length = inputValue.length
        if (item.slice(0, length).toLowerCase() === inputValue.toLowerCase()) {
          return item
        }
      })
      this.setState({ matched_Items: matched_items })
    } else {
      this.setState({ matched_Items: menuItems })
    }
  }

  render() {
    const { dropdownIsOpen, matched_Items } = this.state
    const { menuName } = this.props
    let { menuClassName, menuItemClassName, showArrow } = this.props

    if (menuClassName === undefined) menuClassName = 'default'
    if (showArrow === undefined) showArrow = false

    let contentItems = ''
    if (matched_Items) {
      contentItems = matched_Items.map((item, index) => {
        return (
          <div key={index} className='menuItem' onClick={ () => this.onDropdownMenuItemClicked(item) }>{item}</div>
        )
      })
    }

    return (
      <div className='dropdownMenu'>
        <div className='menuSection' onClick={ () => this.onMenuClicked() }>
          <div className={`menu-${menuClassName}`}>{menuName}</div>
          { showArrow && <img src={down_arrow_icon} alt={'down_arrow'} /> }
        </div>
        { dropdownIsOpen && <div className={classNames('contentSection', `contentSection-${menuClassName}`)}>
          { menuClassName === 'translator' && (<div>
            <input className='search' value={this.state.search_key} placeholder={'Search'} onChange={ (event) => this.onSearchInputChanged(event) } autoFocus />
            <div className='splitter' />
          </div>) }
          {contentItems}
        </div> }
      </div>
    )
  }
}

DropdownMenu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuClassName: PropTypes.string,
  menuItems: PropTypes.array.isRequired,
  menuItemClassName: PropTypes.string,
  showArrow: PropTypes.bool,
  onItemClicked: PropTypes.func
}

export default DropdownMenu
