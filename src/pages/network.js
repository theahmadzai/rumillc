import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Card } from 'antd'
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
            fluid(maxHeight: 100, maxWidth: 100) {
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
        <Col span={14}>
          <Row
            gutter={[24, 24]}
            style={{
              padding: '3rem',
            }}
          >
            {networks.nodes.map((network, i) => (
              <Col key={i} span={12} md={8}>
                <Card
                  hoverable
                  bordered={true}
                  size="small"
                  cover={<Img fluid={network.image.fluid} />}
                  // onClick={() => setCurrentPlace(n.id)}
                >
                  <Card.Meta title={network.name} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}
