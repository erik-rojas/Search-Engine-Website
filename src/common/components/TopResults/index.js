import React, { Component } from 'react'
import Carousel from 're-carousel'
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'

import './index.scss'

class TopResults extends Component {
  render() {
    return (
      <div className='top-results'>
        <div className='category'>{'Top Results'}</div>
        <div className='carousel_section'>
          <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
            <div className='frame1'>
              <div className='title'>{'I amsterdam - Your guide to visit, enjoy, live, work & invest in ...'}</div>
              <div className='content'>
                {'Official portal website of the City of Amsterdam, with everything you need to visit, enjoy, live, work, invest and do business in the Amsterdam Metropolitan Area.'}
              </div>
              <a className='url' href={'https://www.iamsterdam.com/'}>
                {'https://www.iamsterdam.com/'}
              </a>
            </div>
            <div className='frame1'>
              <div className='title'>{'I amsterdam - Your guide to visit, enjoy, live, work & invest in ...'}</div>
              <div className='content'>
                {'Official portal website of the City of Amsterdam, with everything you need to visit, enjoy, live, work, invest and do business in the Amsterdam Metropolitan Area.'}
              </div>
              <a className='url' href={'https://www.iamsterdam.com/'}>
                {'https://www.iamsterdam.com/'}
              </a>
            </div>
            <div className='frame1'>
              <div className='title'>{'I amsterdam - Your guide to visit, enjoy, live, work & invest in ...'}</div>
              <div className='content'>
                {'Official portal website of the City of Amsterdam, with everything you need to visit, enjoy, live, work, invest and do business in the Amsterdam Metropolitan Area.'}
              </div>
              <a className='url' href={'https://www.iamsterdam.com/'}>
                {'https://www.iamsterdam.com/'}
              </a>
            </div>
            <div className='frame1'>
              <div className='title'>{'I amsterdam - Your guide to visit, enjoy, live, work & invest in ...'}</div>
              <div className='content'>
                {'Official portal website of the City of Amsterdam, with everything you need to visit, enjoy, live, work, invest and do business in the Amsterdam Metropolitan Area.'}
              </div>
              <a className='url' href={'https://www.iamsterdam.com/'}>
                {'https://www.iamsterdam.com/'}
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default TopResults
