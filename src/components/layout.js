import React from 'react'
import Helmet from 'react-helmet'
import { BackTop } from 'antd'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Header from './header'
import Footer from './footer'
import * as styles from './layout.module.css'

export default function Layout({ children, ...props }) {
  const { title, description } = useSiteMetadata()

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main {...props}>{children}</main>
      <Footer />
      <BackTop />
    </div>
  )
}
