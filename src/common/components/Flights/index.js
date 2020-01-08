import React, { Component } from 'react'

import ico_flight from '../../../assets/images/icon/flight.png'

import './index.scss'

class Flights extends Component {
  render() {
    return (
      <div className='flights'>
        <div className='flights-header'>
          <img src={ico_flight} alt={'flights'} />
          <div className='category'>{'Flights'}</div>
        </div>
        <div className='flights-content'>
          <div className='content-row'>{'1 h 10 min flight, from €174'}</div>
          <div className='content-row'>{'4h 30 min 1 stop flight, from €207'}</div>
        </div>
      </div>
    )
  }
}

export default Flights
