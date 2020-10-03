import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
import '../../styles/global.css'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
