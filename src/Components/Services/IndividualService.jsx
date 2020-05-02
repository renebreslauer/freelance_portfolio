import React from 'react'
import styles from './Services.module.scss'

const IndividualService = (props) => {
  return (
    <div className={styles.individual_service}>
      <div className={styles.individual_service_header}>
        <h2 className={styles.service_title}>{props.service_title}</h2>
        <p>{props.service_description}</p>
      </div>
      <div className={styles.service_icon_container}>
        <img
          src={props.source}
          className={styles.service_icon}
          alt="service icon"
        />
      </div>
    </div>
  )
}

export default IndividualService
