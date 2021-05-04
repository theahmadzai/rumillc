import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Drawer } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import useSiteMetadata from '../../../hooks/use-sitemetadata'
import NavLink from './NavLink/NavLink'
import styles from './Header.module.css'

const NavLinks = props => (
  <nav {...props}>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/products">Products</NavLink>
    <NavLink href="/network">Network</NavLink>
    <NavLink href="/gallery">Gallery</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </nav>
)

const ToggleIcon = ({ visible, ...props }) =>
  !visible ? <MenuOutlined {...props} /> : <CloseOutlined {...props} />

const Header = () => {
  const { title } = useSiteMetadata()
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => setVisible(visible => !visible)

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="/logo.png" alt={title} className={styles.logo} />
      </Link>

      <NavLinks className={styles.navDesktop} />

      <ToggleIcon
        visible={visible}
        className={styles.toggleNav}
        onClick={toggleVisible}
      />

      <Drawer
        title={title}
        visible={visible}
        closeable={false}
        onClose={toggleVisible}
      >
        <NavLinks className={styles.navMobile} />
      </Drawer>
    </header>
  )
}

export default Header
