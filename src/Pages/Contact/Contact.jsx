import React from 'react'
import styles from './Contact.module.scss'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactAnimation from '../../Components/ContactAnimation/ContactAnimation'
import Map from '../../Components/Map/Map'

class Contact extends React.Component {
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.contact_form_container}>
          <ContactAnimation />
          <ContactForm />

          <p>
            or send me an email at{' '}
            <a href={'mailto:renebreslauer@me.com'} className={styles.email}>
              renebreslauer@me.com
            </a>
          </p>
        </div>
        <Map />
      </div>
    )
  }
}

export default Contact
