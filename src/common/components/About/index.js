import React, { Component } from 'react'

import Wikipedia_img from '../../../assets/images/Wikipedia.png'

import './index.scss'

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-header'>{'About Amsterdam'}</div>
        <div className='content'>
          <div className='about-content'>{'Amsterdam is the capital and most populous municipality of the Netherlands. Its status as the capital is mandated by the Constitution of the Netherlands, ...'}</div>
          <div className='wikipedia'>
            <img src={Wikipedia_img} alt={'Wikipedia'} />
            <div className='wikipedia-text'>{'Wikipedia'}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
