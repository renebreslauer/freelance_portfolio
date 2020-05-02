import React from 'react'
import styles from './Services.module.scss'
import IndividualService from './IndividualService'
import WebDesign from '../../Assets/Icons/web_design.svg'

class ServiceGrid extends React.Component {
  render() {
    return (
      <div className={styles.service_grid}>
        <div className={styles.row}>
          <IndividualService
            service_title="Web Design"
            service_description="Lorem ipsum"
            source={WebDesign}
          />
          <IndividualService
            service_title="Development"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Email Blasts"
            service_description="Lorem ipsum"
          />
        </div>
        <div className={styles.row}>
          <IndividualService
            service_title="Icon Design"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Illustration"
            service_description="Lorem ipsum"
          />
          <IndividualService
            service_title="Animation"
            service_description="Lorem ipsum"
          />
        </div>
      </div>
    )
  }
}

export default ServiceGrid
