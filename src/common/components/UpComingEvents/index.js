import React, { Component } from 'react'

import calender_icon from '../../../assets/images/icon/calendar.png'

import './index.scss'

class UpComingEvents extends Component {
  render() {
    return (
      <div className='upcoming-events'>
        <div className='category'>{'Upcoming Events'}</div>
        <div className='content'>
          <div className='event-info'>
            <div className='event-header'>
              <div className='event-title'>{'Goo Goo Dolls'}</div>
              <img src={calender_icon} alt={'Calender'} />
            </div>
            <div className='event-subTitle'>{'Melkweg Max'}</div>
          </div>
          <div className='date-time'>{'Sun. 29 Jul.  07:00 p'}</div>
        </div>
      </div>
    )
  }
}

export default UpComingEvents
