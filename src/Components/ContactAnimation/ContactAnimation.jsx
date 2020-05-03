import React from 'react'
import styles from './ContactAnimation.module.scss'

class ContactAnimation extends React.Component {
  render() {
    return (
      <div className={styles.contact_animation}>
        <svg viewBox="0 0 420 76">
          <path
            className={styles.design}
            d="M2.7,39.5c0-18.6,15.1-32.9,34.6-32.9c8.1,0.1,16.8,3.7,23.2,9.5L51,28.4c-3.9-3.5-9-5.8-13.6-5.8
		c-9.7,0-17.7,7.4-17.7,17c0,9.8,8.4,16.9,17.4,16.9c5.3,0,10-2.5,14-6.1l9.5,12.7c-6,5.5-14,9.2-23.6,9.2
		C19.3,72.3,2.7,59.2,2.7,39.5z"
          />
          <path
            className={styles.design}
            d="M62.3,39.5c0-18.9,15-33.2,34.5-33.2c19.5,0,34.5,14.3,34.5,33.2c0,18.7-15,33-34.6,33
		C77.2,72.5,62.3,58.3,62.3,39.5z M114.4,39.4c0-9.7-7.6-17.2-17.6-17.2s-17.6,7.5-17.6,17.2c0,9.7,7.6,17.1,17.6,17.1
		S114.4,49.1,114.4,39.4z"
          />
          <path
            className={styles.design}
            d="M193.9,7.9v63.6h-5.3l-32.3-31.3v30.7h-16.7V7.4h5.4l32.2,31.2V7.9H193.9z"
          />
          <path
            className={styles.design}
            d="M247.9,23.6h-15.1v47.3h-16.7V23.6H201V8h46.9V23.6z"
          />
          <path
            className={styles.design}
            d="M287.4,63.6H264l-3.2,7.3h-18.3l29.2-63.7h7.9l29.3,63.7h-18.3L287.4,63.6z M282.1,51.4l-6.4-14.9l-6.5,14.9
		H282.1z"
          />
          <path
            className={styles.design}
            d="M306.6,39.5c0-18.6,15.1-32.9,34.6-32.9c8.1,0.1,16.8,3.7,23.2,9.5l-9.6,12.3c-3.9-3.5-9-5.8-13.6-5.8
		c-9.7,0-17.7,7.4-17.7,17c0,9.8,8.4,16.9,17.4,16.9c5.3,0,10-2.5,14-6.1l9.5,12.7c-6,5.5-14,9.2-23.6,9.2
		C323.2,72.3,306.6,59.2,306.6,39.5z"
          />
          <path
            className={styles.design}
            d="M414.7,23.6h-15.1v47.3h-16.7V23.6h-15.1V8h46.9V23.6z"
          />
        </svg>
      </div>
    )
  }
}

export default ContactAnimation
