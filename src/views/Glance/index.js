import React, { Component } from 'react'

import TopResults from '../../common/components/TopResults'
import Videos from '../../common/components/Videos'
import Photos from '../../common/components/Photos'
import Maps from '../../common/components/Maps'
import About from '../../common/components/About'
import UpcomingEvents from '../../common/components/UpComingEvents'
import ThingsToDo from '../../common/components/ThingsToDo'
import Weather from '../../common/components/Weather'
import Flights from '../../common/components/Flights'
import Hotels from '../../common/components/Hotels'
import Translator from '../../common/components/Translator'

import './index.scss'

class Glance extends Component {
  render() {
    return (
      <div className='glance'>
        <div className='tile tile-topresults'>
          <div className='tile1 tile-topresults'>
            <TopResults />
          </div>
        </div>
        <div className='tile tile-videos'>
          <div className='tile1 tile-videos'>
            <Videos />
          </div>
        </div>
        <div className='tile tile-photos'>
          <div className='tile1 tile-photos'>
            <Photos />
          </div>
        </div>
        <div className='tile tile-maps'>
          <div className='tile1 tile-maps'>
            <Maps />
          </div>
        </div>
        <div className='tile tile-about'>
          <div className='tile1 tile-about'>
            <About />
          </div>
        </div>
        <div className='tile tile-upcoming'>
          <div className='tile1 tile-upcoming'>
            <UpcomingEvents />
          </div>
        </div>
        <div className='tile tile-things'>
          <div className='tile1 tile-things'>
            <ThingsToDo />
          </div>
        </div>
        <div className='tile tile-weather'>
          <div className='tile1 tile-weather'>
            <Weather />
          </div>
        </div>
        <div className='tile5'>
          <div className='tile4'>
            <div className='tile2 tile-flights'>
              <Flights />
            </div>
            <div className='tile2 tile-hotels'>
              <Hotels />
            </div>
          </div>
        </div>
        <div className='tile tile-translator'>
          <div className='tile3 tile-translator'>
            <Translator />
          </div>
        </div>
      </div>
    )
  }
}

export default Glance
