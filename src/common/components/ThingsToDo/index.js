import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import Carousel from 're-carousel'

import Buttons from './buttons'

import bg_things from '../../../assets/images/bg_things.png'

import './index.scss'

class ThingsToDo extends Component {
  render() {
    return (
      <div className='things-to-do'>
        <div className='category'>{'Things To Do'}</div>
        <div className='carousel-content'>
          <Carousel widgets={[Buttons]}>
            <div className='content'>
              <div className='thing'>
                <div className='thing-header-section'>
                  <div className='thing-name'>{'Anna Frank House'}</div>
                  <div className='thing-rate'>
                    <StarRatings
                      rating={4.4}
                      starDimension='11.5px'
                      starSpacing='1px'
                      starRatedColor='#FFBF55'
                      name='rating'
                    />
                  </div>
                </div>
                <div className='thing-intro'>{`WWII teenage diarist's house museum`}</div>
              </div>
              <div className='photo'>
                <img src={bg_things} alt={'Things'} />
              </div>
            </div>
            <div className='content'>
              <div className='thing'>
                <div className='thing-header-section'>
                  <div className='thing-name'>{'Anna Frank House'}</div>
                  <div className='thing-rate'>
                    <StarRatings
                      rating={3.6}
                      starDimension='11.5px'
                      starSpacing='1px'
                      starRatedColor='#FFBF55'
                      name='rating'
                    />
                  </div>
                </div>
                <div className='thing-intro'>{`WWII teenage diarist's house museum`}</div>
              </div>
              <div className='photo'>
                <img src={bg_things} alt={'Things'} />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default ThingsToDo
