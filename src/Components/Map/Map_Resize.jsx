import React, { useState } from 'react'
import styles from './Map.module.scss'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'
import MapMarker from '../../Assets/map_marker.svg'
import 'mapbox-gl/dist/mapbox-gl.css'
require('dotenv').config()

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
}

class Map_Resize extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: '100vw',
        height: '40vh',
        latitude: 25.790654,
        longitude: -80.1300455,
        bearing: 0,
        pitch: 0,
        zoom: 11,
      },
    }
  }
  render() {
    const { viewport } = this.state
    return (
      <div className={styles.map_resize}>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/renebreslauer/ck9rpca4l137y1irvek3nzcjw"
          mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
        >
          <div className={styles.nav} style={navStyle}>
            <NavigationControl />
            <Marker latitude={25.8319} longitude={-80.1238}>
              <img src={MapMarker} className={styles.map_marker} />
            </Marker>
          </div>
        </MapGL>
      </div>
    )
  }
}
export default Map_Resize
