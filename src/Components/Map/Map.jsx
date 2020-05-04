import React, { useState } from 'react'
import styles from './Map.module.scss'
import MapGL, { GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  state = {
    viewport: {
      width: '30vw',
      height: '100vh',
      latitude: 25.76681,
      longitude: -80.191788,
      zoom: 10,
    },
  }
  render() {
    return (
      <div className={styles.map}>
        <MapGL
          {...this.state.viewport}
          mapboxApiAccessToken="pk.eyJ1IjoicmVuZWJyZXNsYXVlciIsImEiOiJjazlycDliNGwwd2tiM2tvMXhyaXE4bmVoIn0.n5d9qtogrMnlg2DVlaJtJA"
          mapStyle="mapbox://styles/mapbox/dark-v8"
        ></MapGL>
      </div>
    )
  }
}
export default Map
