import React from 'react'
import styles from './Services.module.scss'
import IndividualService from './IndividualService'

class ServiceGrid extends React.Component {
  render() {
    return (
      <div className={styles.service_grid}>
        <div className={styles.row}>
          <IndividualService
            service_title="Web Design"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Development"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Icon"
            service_description="Lorem ipsum"
          />
        </div>
        <div className={styles.row}>
          <IndividualService
            service_title="Web Design"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Web Design"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Web Design"
            service_description="Lorem ipsum"
          />
        </div>
      </div>
    )
  }
}

export default ServiceGrid
