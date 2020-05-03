import React from 'react'
import styles from './ContactForm.module.scss'
import MainButton from '../../Components/MainButton/MainButton'

class ContactForm extends React.Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: '',
  }
  render() {
    return (
      <div className={styles.contact_form_container}>
        <form className={styles.contact_form}>
          <div className={styles.input_group}>
            <div className={styles.form_group}>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className={styles.name_control}
                autoComplete="off"
                name="name"
              />
            </div>
            <div className={styles.form_group}>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={styles.message_control}
                autoComplete="off"
                name="email"
                required
              />
            </div>
            <div className={styles.form_group}>
              <textarea
                id="message"
                type="text"
                placeholder="Message"
                rows="5"
                className={styles.message_input}
                autoComplete="off"
                name="message"
                required
              />
            </div>
            <div className={styles.form_button}>
              <MainButton text="Submit" />{' '}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm
