import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Typography, Button } from 'antd'
import Layout from '../components/Layout/Layout'

const { Title, Paragraph } = Typography

export default () => {
  const { farmer } = useStaticQuery(graphql`
    query {
      farmer: file(relativePath: { eq: "farmer.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Row>
        <Col md={14} style={{ padding: '3rem' }}>
          <Title>Rumi Dried Fruits & Nuts Company</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nobis porro eius culpa voluptatum ab officia nam expedita? Molestias
            quo assumenda ducimus quis sed voluptates cumque, consectetur
            asperiores eveniet deleniti?
          </Paragraph>
          <Button>Contact</Button>
        </Col>
        <Col md={10} style={{ padding: '3rem' }}>
          <Img fluid={farmer.sharp.fluid} />
        </Col>
      </Row>
    </Layout>
  )
}
