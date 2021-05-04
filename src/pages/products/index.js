import React from 'react'
import { Row, Col, Tabs } from 'antd'
import useCategories from '../../hooks/use-categories'
import Layout from '../../components/layout'
import ProductPreview from '../../components/product-preview'

const { TabPane } = Tabs

export default function ProductsPage() {
  const categories = useCategories()

  return (
    <Layout className="spaceRow">
      <Tabs
        animated={true}
        defaultActiveKey="1"
        size="large"
        tabPosition={
          typeof window !== `undefined` && window.screen.availWidth >= 768
            ? 'left'
            : 'top'
        }
      >
        <TabPane tab="All" key="all">
          <Row gutter={[24, 24]}>
            {categories
              .map(category => category.products)
              .flat()
              .map(product => (
                <Col key={product.slug} span={24} sm={12} md={8} lg={6}>
                  <ProductPreview {...product} />
                </Col>
              ))}
          </Row>
        </TabPane>
        {categories.map(category => (
          <TabPane tab={category.title} key={category.title}>
            <Row gutter={[24, 24]}>
              {category.products.map(product => (
                <Col key={product.slug} span={24} sm={12} md={8} lg={6}>
                  <ProductPreview {...product} />
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </Layout>
  )
}
