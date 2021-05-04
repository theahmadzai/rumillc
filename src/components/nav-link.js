import React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav-link.module.css'

export default function NavLink({ href, children }) {
  return (
    <Link to={href} className={styles.link} activeClassName={styles.active}>
      {children}
    </Link>
  )
}
