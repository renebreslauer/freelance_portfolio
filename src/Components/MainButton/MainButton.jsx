import React from 'react'
import styles from './MainButton.module.scss'

const MainButton = (props) => {
  return (
    <button className={styles.main_button}>
      <div className={styles.main_button_text}>{props.text}</div>
    </button>
  )
}

export default MainButton
