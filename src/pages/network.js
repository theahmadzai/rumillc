import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Row, Col, Card, Drawer } from 'antd'
import useNetwork from '../hooks/use-network'
import Layout from '../components/layout'

export default function NetworkPage() {
  const locations = useNetwork()

  const [selectedLocation, setSelectedLocation] = useState(null)
  const [visible, setVisible] = useState(false)

  const showDrawerFor = location => {
    setSelectedLocation(location)
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <Layout className="spaceRow">
      <Row gutter={[24, 24]}>
        <Drawer
          title={selectedLocation?.name ?? 'Name'}
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
          width="80%"
        >
          <GatsbyImage
            style={{ height: '300px', marginBottom: '1.5rem' }}
            alt={selectedLocation?.image?.title}
            image={selectedLocation?.image?.gatsbyImageData}
          />
          {renderRichText(selectedLocation?.info ?? { raw: null })}
        </Drawer>
        {locations.map(location => (
          <Col key={location.name} span={24} md={6}>
            <Card
              hoverable
              bordered={true}
              size="small"
              type="inner"
              cover={
                <GatsbyImage
                  alt={location.image.title}
                  image={location.image.gatsbyImageData}
                />
              }
              onClick={() => showDrawerFor(location)}
            >
              <Card.Meta title={location.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}
