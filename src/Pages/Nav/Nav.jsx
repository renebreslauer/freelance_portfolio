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
          <NavLink to="/Home">
            <img src={Logo} className={styles.nav_logo} />
          </NavLink>
          <Lottie options={blobOptions} height={200} width={200} />
        </div>

        <div className={styles.nav_internal}>
          <NavLink to="/Contact" activeClassName={styles.navlink_active}>
            Contact
            <div className={styles.nav_circle}></div>
          </NavLink>

          <NavLink to="/Work" activeClassName={styles.navlink_active}>
            Work
            <div className={styles.nav_circle}></div>
          </NavLink>

          <NavLink to="/About" activeClassName={styles.navlink_active}>
            About
            <div className={styles.nav_circle}></div>
          </NavLink>
          <NavLink to="/Home" activeClassName={styles.navlink_active}>
            Home
            <div className={styles.nav_circle}></div>
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
