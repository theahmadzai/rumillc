import React from 'react'
import { Link } from 'gatsby'
import styles from './NavLink.module.css'

const NavLink = ({ href, children }) => {
  return (
    <Link to={href} className={styles.link} activeClassName={styles.active}>
      {children}
    </Link>
  )
}

export default NavLink
