import React from 'react'
import styles from './AboutAnimation.module.scss'

class AboutAnimation extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 500 76" className={styles.about_animation}>
        <path
          className={styles.design}
          d="M55.8,8.6V59h-17V40.4H23.1V59h-17V8.6h17v17.9h15.7V8.6H55.8z"
        />
        <path className={styles.design} d="M64,8.6h17V59H64V8.6z" />
        <path
          className={styles.design}
          d="M105.5,50.4c0,2.3-0.3,4-2.8,9.4l-5,10.7H87.6l3.6-12.2c-2.9-1.4-4.7-4.2-4.7-8c0-5.6,4-9.2,9.5-9.2
		C101.5,41.1,105.5,44.7,105.5,50.4z"
        />
        <path className={styles.design} d="M132.7,8.6h17V59h-17V8.6z" />
        <path
          className={styles.design}
          d="M174.2,14.1c0,2.3-0.3,4-2.8,9.4l-5,10.7h-10.1l3.6-12.2c-2.9-1.4-4.7-4.2-4.7-8c0-5.6,4-9.2,9.5-9.2
		C170.2,4.9,174.2,8.5,174.2,14.1z"
        />
        <path
          className={styles.design}
          d="M224.8,59l-0.1-23l-10.9,18.4h-7.5l-10.9-17.6V59h-15.5V8.6h14l16.4,26.9l16-26.9h14l0.1,50.4H224.8z"
        />
        <path
          className={styles.design}
          d="M291.7,46.3H287V59h-17V8.6h24.3c14,0,23,7.3,23,19c0,7.3-3.5,12.7-9.5,15.8L318.4,59h-18.1L291.7,46.3z
		 M293.2,21.7H287v11.8h6.2c4.7,0,6.9-2.2,6.9-5.9S297.9,21.7,293.2,21.7z"
        />
        <path
          className={styles.design}
          d="M365.6,46.2V59h-41.9V8.6h41v12.8h-24.3v5.9h21.3v12.2h-21.3v6.6H365.6z"
        />
        <path
          className={styles.design}
          d="M421.8,8.6V59h-14l-19.2-22.9V59h-16.6V8.6h14l19.2,22.9V8.6H421.8z"
        />
        <path
          className={styles.design}
          d="M471.9,46.2V59H430V8.6h41v12.8h-24.3v5.9h21.3v12.2h-21.3v6.6H471.9z"
        />
        <path
          className={styles.design}
          d="M476.5,50.4c0-5.5,4.1-9.2,9.5-9.2s9.5,3.7,9.5,9.2c0,5.5-4.1,9.4-9.5,9.4S476.5,55.8,476.5,50.4z"
        />
      </svg>
    )
  }
}

export default AboutAnimation
