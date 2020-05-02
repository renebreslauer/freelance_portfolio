import React from 'react'
import styles from './Home.module.scss'
import MainButton from '../../Components/MainButton/MainButton'
import PaintStroke from '../../Assets/paint_stroke.svg'
class Home extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.main_header}>
          <h1 className={styles.main_header_title}>Rene Breslauer</h1>
          <h1 className={styles.main_header_subtitle}>Designer + Developer</h1>
          <img src={PaintStroke} className={styles.main_header_paintstroke} />
        </div>
        <div className={styles.main_body}>
          <MainButton text="Let's Chat" />
        </div>
      </div>
    )
  }
}

export default Home
