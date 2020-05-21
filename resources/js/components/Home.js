import React from 'react'
import { Layout } from 'antd'
import About from './About'
import Network from './Network'
import Slider from './Slider'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <Layout.Content>
      <Slider />
      <Network />
      <About />
      <Testimonials />
      <Subscribe />
    </Layout.Content>
  )
}

export default Home
