import React from 'react'
import styles from './Home.module.scss'
import MainButton from '../../Components/MainButton/MainButton'
import IntroAnimation from '../../Components/IntroAnimation/IntroAnimation'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.main_header}>
          <IntroAnimation />
        </div>
        <div className={styles.main_body}>
          <MainButton text="Let's Chat" />
        </div>
      </div>
    )
  }
}

export default Home
