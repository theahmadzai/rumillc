import React from 'react'
import { Row, Col, Image } from 'antd'
import useImages from '../hooks/use-images'
import Layout from '../components/layout'

export default function GalleryPage() {
  const images = useImages()

  return (
    <Layout className="spaceRow">
      <Row gutter={[24, 24]}>
        {images.map(image => (
          <Col key={image.caption} span={24} md={6}>
            <Image
              placeholder={
                <Image
                  width="100%"
                  height="100%"
                  src={image.image.gatsbyImageData.placeholder.fallback}
                  preview={false}
                />
              }
              src={image.image.gatsbyImageData.images.fallback.src}
              preview={{
                src: image.image.gatsbyImageData.images.sources[0].srcSet
                  .split(',')[1]
                  .split('?')[0],
              }}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}
