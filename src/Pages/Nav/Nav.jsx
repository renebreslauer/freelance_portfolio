import React from 'react'
import styles from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { NavLink } from 'react-router-dom'
import Lottie from 'react-lottie'
import Blob from '../../Assets/Lotties/blobs.json'
import Logo from '../../Assets/logo.svg'

library.add(fab)

class Nav extends React.Component {
  render() {
    const blobOptions = {
      loop: true,
      autoplay: true,
      animationData: Blob,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }
    return (
      <div className={styles.nav}>
        <div className={styles.nav_logo_container}>
          <NavLink to="/">
            <img src={Logo} className={styles.nav_logo} />
          </NavLink>
          <Lottie options={blobOptions} height={210} width={210} />
        </div>

        <div className={styles.nav_internal}>
          <NavLink to="/Contact">Contact</NavLink>

          <NavLink to="/Work">Work</NavLink>

          <NavLink to="/About">About</NavLink>
          <NavLink to="/" label="home">
            Home
          </NavLink>
        </div>
        <div className={styles.nav_external}>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'behance']} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={['fab', 'dribbble']} />
          </a>
        </div>
      </div>
    )
  }
}

export default Nav
