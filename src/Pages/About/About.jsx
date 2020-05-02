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
          <p className={styles.about_text}>
            I am a visual designer and UI developer. With a background in
            customer service and business management, I understand the
            importance of the User Experience, and it is at the heart of
            everything I do. Great design is nothing without great results.
          </p>
          <ServiceGrid />
        </div>
      </div>
    )
  }
}

export default About
