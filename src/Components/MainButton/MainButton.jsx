import React from 'react'
import styles from './MainButton.module.scss'

const MainButton = (props) => {
  return (
    <>
      <button className={styles.main_button}>{props.text}</button>
    </>
  )
}
export default MainButton
