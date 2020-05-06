import React from 'react'
import styles from './Home.module.scss'
import MainButton from '../../Components/MainButton/MainButton'
import NameAnimation from '../../Components/NameAnimation/NameAnimation'
import ResponsiveBackground from '../../Components/ResponsiveBackground/ResponsiveBackground'
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <ResponsiveBackground />
        <div className={styles.main_header}>
          <NameAnimation />
          <h1 className={styles.main_header_subtitle}>Designer + Developer</h1>
        </div>
        <div className={styles.main_body}>
          <NavLink to="/Contact">
            <MainButton text="Let's Chat" />
          </NavLink>
        </div>
        <div className={styles.background_reveal}></div>
      </div>
    )
  }
}

export default Home
