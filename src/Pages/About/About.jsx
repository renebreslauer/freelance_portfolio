import React from 'react'
import ServiceGrid from '../../Components/Services/ServiceGrid'
import AboutAnimation from '../../Components/AboutAnimation/AboutAnimation'
import styles from './About.module.scss'

class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.about_container}>
          <AboutAnimation />
          <p>I am a visual designer and UI developer. </p>
          <ServiceGrid />
        </div>
        <div className={styles.background_reveal}></div>
      </div>
    )
  }
}

export default About
