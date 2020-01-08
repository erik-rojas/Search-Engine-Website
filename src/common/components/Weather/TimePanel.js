import React, { Component } from 'react'
import PropTypes from 'prop-types'

import btn_indicator_icon from '../../../assets/images/icon/indicator.png'

import './index.scss'

class TimePanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  onTimeClicked = () => {
    const { timeVal, onTimeSelected } = this.props

    onTimeSelected(timeVal)
  }

  render() {
    const { timeVal } = this.props
    let { showIndicator } = this.props

    if (showIndicator === undefined) showIndicator = false

    return (
      <div className='timepanel'>
        { showIndicator && <img src={btn_indicator_icon} alt={'indicator'} /> }
        <div className='time' onClick={ () => this.onTimeClicked() }>{timeVal}</div>
      </div>
    )
  }
}

TimePanel.propTypes = {
  timeVal: PropTypes.string.isRequired,
  showIndicator: PropTypes.bool,
  onTimeSelected: PropTypes.func
}

export default TimePanel
