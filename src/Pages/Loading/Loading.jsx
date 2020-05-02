import React from 'react'
import styles from './Loading.module.scss'

class Loading extends React.Component {
  render() {
    return (
      <div className={styles.loading}>
        <h1>Loading</h1>
      </div>
    )
  }
}

export default Loading
