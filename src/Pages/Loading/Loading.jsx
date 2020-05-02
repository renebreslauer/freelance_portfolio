import React from 'react'
import styles from './Loading.module.scss'
import Lottie from 'react-lottie'
import Bunny from '../../Assets/Lotties/bunny.json'

class Loading extends React.Component {
  render() {
    const bunnyOptions = {
      loop: true,
      autoplay: true,
      animationData: Bunny,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }
    return (
      <div className={styles.loading}>
        <div className={styles.bunny_container}>
          <Lottie
            options={bunnyOptions}
            height={400}
            width={400}
            className={styles.bunny}
          />
          <h1>Loading</h1>
        </div>
      </div>
    )
  }
}

export default Loading
