import React, { Component } from 'react'
import Geocode from 'react-geocode'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

import './index.scss'

class Maps extends Component {
  constructor (props) {
    super(props)

    this.state = {
      defaultInfo: {
        center: {
          lat: 52.36106,
          lng: 4.89423
        },
        zoom: 10
      },
      geocode: {
        lat: null,
        lng: null
      },
      searchKey: 'Amsterdam'
    }
  }

  componentDidMount () {
    const { searchKey } = this.state

    Geocode.setApiKey('AIzaSyAhKZu3REXwr9ZBRAtSQxcNNb7LUt91EyI')
    Geocode.enableDebug()

    Geocode.fromAddress(searchKey).then(response => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({ geocode: { lat: lat, lng: lng } })
    },
    error => {
      console.error(error);
    })
  }

  render() {
    const { defaultInfo, geocode } = this.state

    const MyMapComponent = withScriptjs(withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={ defaultInfo.zoom }
        defaultCenter={ defaultInfo.center }
      />
    )))

    return (
      <div className='maps'>
        <MyMapComponent 
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div className='maps-container' />}
          mapElement={<div className='maps-map_element' />}
        />
      </div>
    )
  }
}

export default Maps
