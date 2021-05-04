import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Image, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import useSiteMetadata from '../hooks/use-sitemetadata'
import NavLink from './nav-link'
import * as styles from './header.module.css'

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

export default function Header() {
  const { name, title } = useSiteMetadata()
  const [visible, setVisible] = useState(false)

  return (
    <header className={styles.header}>
      <Link to="/">
        <Image
          src="/logo.png"
          alt={title}
          preview={false}
          className={styles.logo}
        />
      </Link>

      <NavLinks className={styles.navDesktop} />

      <MenuOutlined
        className={styles.toggleNav}
        onClick={() => setVisible(true)}
      />

      <Drawer
        title={name}
        visible={visible}
        closeable={false}
        onClose={() => setVisible(false)}
      >
        <NavLinks className={styles.navMobile} />
      </Drawer>
    </header>
  )
}
