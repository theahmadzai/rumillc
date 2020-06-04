import React from 'react'
import { Router } from '@reach/router'
import { Layout, BackTop } from 'antd'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import ProductsPage from './ProductsPage'
import About from './About'
import Network from './Network'
import Gallery from './Gallery'
import Contact from './Contact'
import NotFound from './NotFound'

const App = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <ProductsPage path="/products" />
          <Network path="/network" />
          <Gallery path="/gallery" />
          <Contact path="/contact" />
          <NotFound default />
        </Router>
        <Footer />
        <BackTop />
      </Layout>
    </div>
  )
}

export default App
