import React from 'react'
import Helmet from 'react-helmet'
import { BackTop } from 'antd'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children, ...props }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
      <BackTop />
    </div>
  )
}
export default Layout
