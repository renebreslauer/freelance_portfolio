import React from 'react'
import styles from './Services.module.scss'
import IndividualService from './IndividualService'
import WebDesign from '../../Assets/Icons/web_design.svg'
import Email from '../../Assets/Icons/email.svg'
import Develop from '../../Assets/Icons/develop.svg'

class ServiceGrid extends React.Component {
  render() {
    return (
      <div className={styles.service_grid}>
        <div className={styles.row}>
          <IndividualService
            service_title="Web Design"
            service_description="UX/UI | Wireframes | Mock-Ups"
            source={WebDesign}
          />
          <IndividualService
            service_title="Development"
            service_description="React | Javascript | CSS3 | SASS"
            source={Develop}
          />
          <IndividualService
            service_title="Email Blasts"
            service_description="Engaging emails designed to increase conversion"
            source={Email}
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
