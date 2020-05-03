import React from 'react'
import styles from './ResponsiveBackground.module.scss'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / -100}px,${y / -10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / -200}px,0)`
const trans3 = (x, y) => `translate3d(${x / 89 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
const trans5 = (x, y) => `translate3d(${x / -345}px,${y / 8 - 250}px,0)`
const trans6 = (x, y) => `translate3d(${x / 160}px,${y / 45}px,0)`
const trans7 = (x, y) => `translate3d(${x / -67}px,${y / -34}px,0)`
const trans8 = (x, y) => `translate3d(${x / 34}px,${y / 6 - 100}px,0)`
const trans9 = (x, y) => `translate3d(${x / -374}px,${y / 9 - 300}px,0)`
const trans10 = (x, y) => `translate3d(${x / -90}px,${y / 6 - 230}px,0)`
const trans11 = (x, y) => `translate3d(${x / 478}px,${y / 7 - 234}px,0)`
const trans12 = (x, y) => `translate3d(${x / -150}px,${y / 9 - 890}px,0)`

function ResponsiveBackground() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <>
      <div
        className="spring_container"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className={styles.circle}
          id={styles.one}
          style={{ transform: props.xy.interpolate(trans1) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.two}
          style={{ transform: props.xy.interpolate(trans2) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.three}
          style={{ transform: props.xy.interpolate(trans3) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.four}
          style={{ transform: props.xy.interpolate(trans4) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.five}
          style={{ transform: props.xy.interpolate(trans5) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.six}
          style={{ transform: props.xy.interpolate(trans6) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.seven}
          style={{ transform: props.xy.interpolate(trans7) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.eight}
          style={{ transform: props.xy.interpolate(trans8) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.nine}
          style={{ transform: props.xy.interpolate(trans9) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.ten}
          style={{ transform: props.xy.interpolate(trans10) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.eleven}
          style={{ transform: props.xy.interpolate(trans11) }}
        ></animated.div>
        <animated.div
          className={styles.circle}
          id={styles.twelve}
          style={{ transform: props.xy.interpolate(trans12) }}
        ></animated.div>
      </div>
    </>
  )
}

export default ResponsiveBackground
