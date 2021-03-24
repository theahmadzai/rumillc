import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Card } from 'antd'
import { AimOutlined } from '@ant-design/icons'
import Layout from '../components/Layout/Layout'

export default () => {
  const { networks } = useStaticQuery(graphql`
    query {
      networks: allContentfulNetwork {
        nodes {
          name
          slug
          info {
            json
          }
          image {
            fluid(maxHeight: 250, maxWidth: 250) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Row>
        <Col span={12}>
          <Row
            gutter={[24, 24]}
            style={{
              padding: '1.5rem 3rem 0',
            }}
          >
            {networks.nodes.map((network, i) => (
              <Col key={i} span={12} md={8}>
                <Card
                  hoverable
                  bordered={true}
                  size="small"
                  type="inner"
                  cover={<Img fluid={network.image.fluid} />}
                  // onClick={() => setCurrentPlace(n.id)}
                >
                  <Card.Meta title={network.name} avatar={<AimOutlined />} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}
