import React from 'react'
import Helmet from 'react-helmet'
import { BackTop } from 'antd'
import SEO from './seo'
import Header from './header'
import Footer from './footer'
import * as styles from './layout.module.css'

export default function Layout({ children, ...props }) {
  return (
    <div className={styles.layout}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <SEO />
      <Header />
      <main {...props}>{children}</main>
      <Footer />
      <BackTop />
    </div>
  )
}
