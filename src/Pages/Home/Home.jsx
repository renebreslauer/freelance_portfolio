import React from 'react'
import styles from './Home.module.scss'
import MainButton from '../../Components/MainButton/MainButton'
import ResponsiveBackground from '../../Components/ResponsiveBackground/ResponsiveBackground'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <ResponsiveBackground />
        <div className={styles.main_header}>
          <h1 className={styles.main_header_title}>Rene Breslauer</h1>

          <h1 className={styles.main_header_subtitle}>Designer + Developer</h1>
        </div>
        <div className={styles.main_body}>
          <MainButton text="Let's Chat" />
        </div>
        <div className={styles.background_reveal}></div>
      </div>
    )
  }
}

export default Home
