import React, { Component } from 'react'

import DropdownMenu from '../../components/DropdownMenu'
import TimePanel from './TimePanel'

import btn_overflow_icon from '../../../assets/images/icon/overflow.png'

import './index.scss'

class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentDate: 'Today',
      curSelectedTime: '12:00'
    }
  }

  onDateSelected = (date) => {
    this.setState({ currentDate: date })
  }

  onTimeSelected = (time) => {
    this.setState({curSelectedTime: time})
  }

  render() {
    const { currentDate, curSelectedTime } = this.state

    const dateArray = ['Today', 'Yesterday']
    const timeArray = ['09:00', '12:00', '15:00', '18:00', '21:00']
    let timeSection = timeArray.map((time, index) => {
      return (
        <div key={index} className='time-info-individual'>
          <TimePanel timeVal={time} showIndicator={time === curSelectedTime} onTimeSelected={(time) => this.onTimeSelected(time)} />
        </div>
      )
    })

    return (
      <div className='weather'>
        <div className='weather-info'>
          <div className='weather-info-header'>
            <div className='title'>{'Amsterdam'}</div>
            <div className='btn-setting'>
              <img src={btn_overflow_icon} alt={'overflow'} className='img-overflow' />
            </div>
          </div>
          <div className='weather-info-content'>
            <div className='temperature'>
              <div className='temperature-value'>{'24'}</div>
              <div className='temperature-symbol' />
            </div>
            <div className='date-dropdown'>
              <DropdownMenu menuName={currentDate} menuItems={dateArray} showArrow={true} menuClassName={'weather'} onItemClicked={ (date) => this.onDateSelected(date) } />
            </div>
          </div>
        </div>
        <div className='time-info'>
          {timeSection}
        </div>
      </div>
    )
  }
}

export default Weather
