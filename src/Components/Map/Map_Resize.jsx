import React, { useState } from 'react'
import styles from './Map.module.scss'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
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
  state = {
    viewport: {
      width: '100vw',
      height: '40vh',
      latitude: 25.790654,
      longitude: -80.1300455,
      zoom: 11,
    },
  }

  render() {
    return (
      <div className={styles.map_resize}>
        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/renebreslauer/ck9sufnqe079j1iqleot7d9f8"
          mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
        >
          <div className={styles.nav} style={navStyle}>
            <NavigationControl />
            <Marker latitude={25.8319} longitude={-80.1300455}>
              <img src={MapMarker} className={styles.map_marker} />
            </Marker>
          </div>
        </ReactMapGL>
      </div>
    )
  }
}
export default Map_Resize
