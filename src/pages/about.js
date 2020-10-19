import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Row, Col, Typography } from 'antd'
import Layout from '../components/Layout/Layout'
import styles from './about.module.css'

const { Title, Paragraph } = Typography

export default () => {
  const { about, almonds, raisins, saffron } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      almonds: file(relativePath: { eq: "almonds.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      raisins: file(relativePath: { eq: "raisins.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      saffron: file(relativePath: { eq: "saffron.jpeg" }) {
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
      <BackgroundImage className={styles.background} fluid={about.sharp.fluid}>
        <Title className={styles.title}>
          Rumi Saffron, Dried Fruits & Nuts Company
        </Title>
      </BackgroundImage>

      <Row>
        <Col span={24} sm={14} md={16} className={styles.paragraph}>
          <Paragraph>
            Rumi Saffron, Dried Fruits &amp; Nuts Company ®, Rumi Saffron ™,
            Rumi Dry Fruits ™ and Mawlana Saffron ™ is trading and exporting
            dried fruits (Raisins, Dried Apricot, Dried Figs), Nuts (Almonds,
            Walnut, Pistachio and Pine Nuts) and Saffron including investment in
            growing Saffron in more than 15 acres of land in Karokh district of
            Herat Province, the amount of land being cultivated is planned to
            grow 20 acres each other so by 2020 the total cultivated land is
            expected to be more than 50 acres.
          </Paragraph>
        </Col>
        <Col span={24} sm={10} md={8} className={styles.figure}>
          <Img
            fluid={almonds.sharp.fluid}
            alt="Rumi Almonds"
            className={styles.image}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} sm={14} md={16} className={styles.paragraph}>
          <Paragraph>
            The Company is buying its dried fruits and Nuts directly from
            growers/farmers connected through Afghan ministry of agriculture.
            The Company is connected with farmers/land owners that are visited,
            verified and their fields are checked to ensure safety and quality
            of dried fruits purchased. Our main buyers are supermarkets and
            retailers in Kabul and importers from India, Dubai, Turkey and other
            potential destinations. We are currently distributing directly
            through supermarkets and retailers in Kabul and selling to importers
            in destination countries, which we meet in B2B events.
          </Paragraph>
        </Col>
        <Col span={24} sm={10} md={8} className={styles.figure}>
          <Img
            fluid={raisins.sharp.fluid}
            className={styles.image}
            alt="Rumi Raisins"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} sm={14} md={16} className={styles.paragraph}>
          <Paragraph>
            Our advantage in Saffron is that we grow it ourselves, we sell it
            with a very competitive price, high and assured quality and improved
            packing, for dry fruits we are buying from farmers/growers making it
            cheaper for us and able to sell it with a cheaper price and improved
            quality.
          </Paragraph>
        </Col>
        <Col span={24} sm={10} md={8} className={styles.figure}>
          <Img
            fluid={saffron.sharp.fluid}
            className={styles.image}
            alt="Rumi Saffron"
          />
        </Col>
      </Row>
    </Layout>
  )
}
