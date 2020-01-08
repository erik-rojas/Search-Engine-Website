import React, { Component } from 'react'

import ico_hotel from '../../../assets/images/icon/hotel.png'

import './index.scss'

class Hotels extends Component {
  render() {
    return (
      <div className='hotels'>
        <div className='hotels-header'>
          <img src={ico_hotel} alt={'hotels'} />
          <div className='category'>{'Hotels'}</div>
        </div>
        <div className='hotels-content'>
          <div className='content-row'>{'3-star hotel averaging €133'}</div>
          <div className='content-row'>{'5-star averaging €290'}</div>
        </div>
      </div>
    )
  }
}

export default Hotels
