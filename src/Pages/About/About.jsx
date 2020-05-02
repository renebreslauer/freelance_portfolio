import React from 'react'
import AboutAnimation from '../../Components/AboutAnimation/AboutAnimation'
import styles from './About.module.scss'

class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.about_container}>
          <AboutAnimation />
          <p>I am a designer and front-end UI developer. </p>
        </div>
      </div>
    )
  }
}

export default About
