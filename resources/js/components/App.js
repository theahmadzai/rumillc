import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/network" component={Network} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer />
        </BrowserRouter>

        <BackTop />
      </Layout>
    </div>
  )
}

export default App
