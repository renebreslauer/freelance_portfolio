import React from 'react'
import styles from './Services.module.scss'

const IndividualService = (props) => {
  return (
    <div className={styles.individual_service}>
      <h2 className={styles.service_title}>{props.service_title}</h2>
      <p>{props.service_description}</p>
    </div>
  )
}

export default IndividualService
