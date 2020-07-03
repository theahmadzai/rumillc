import React, { useState } from 'react'
import { Layout } from 'antd'
import Categories from './Categories'
import ProductsList from './ProductsList'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryChange = category => setSelectedCategory(category)

  return (
    <Layout style={{ background: '#fff' }}>
      <Layout.Sider style={{
        background: '#fff',
        paddingTop: '1.5rem'
      }} breakpoint="lg" width={250}>
        <Categories onCategoryChange={handleCategoryChange} />
      </Layout.Sider>
      <Layout>
        <ProductsList category={selectedCategory} />
      </Layout>
    </Layout>
  )
}

export default Products
