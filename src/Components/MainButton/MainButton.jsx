import React from 'react'
import styles from './MainButton.module.scss'

const MainButton = (props) => {
  return (
    <>
      <button className={styles.blob_btn}>
        {props.text}
        <span className={styles.blob_btn__inner}>
          <span className={styles.blob_btn__blobs}>
            <span className={styles.blob_btn__blob}></span>
            <span className={styles.blob_btn__blob}></span>
            <span className={styles.blob_btn__blob}></span>
            <span className={styles.blob_btn__blob}></span>
          </span>
        </span>
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  )
}
export default MainButton
