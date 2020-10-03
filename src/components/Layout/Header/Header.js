import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../../../hooks/use-sitemetadata'
import styles from './Header.module.css'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/logo.svg" alt={title} />
      </Link>
    </header>
  )
}

export default Header
