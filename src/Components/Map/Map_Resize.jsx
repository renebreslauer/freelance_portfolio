import React, { useState } from 'react'
import styles from './Map.module.scss'
import MapGL, { Marker } from 'react-map-gl'
import MapMarker from '../../Assets/map_marker.svg'
import 'mapbox-gl/dist/mapbox-gl.css'
require('dotenv').config()

class Map_Resize extends React.Component {
  state = {
    viewport: {
      width: '100vw',
      height: '40vh',
      latitude: 25.790654,
      longitude: -80.1300455,
      zoom: 10,
    },
  }
  render() {
    return (
      <div className={styles.map_resize}>
        <MapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
          mapStyle="mapbox://styles/renebreslauer/ck9rpca4l137y1irvek3nzcjw"
        >
          <Marker latitude={25.8319} longitude={-80.1238}>
            <img src={MapMarker} className={styles.map_marker} />
          </Marker>
        </MapGL>
      </div>
    )
  }
}
export default Map_Resize
