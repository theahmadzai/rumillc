import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div>{children}</div>
    <Footer />
  </Fragment>
)

export default Layout
