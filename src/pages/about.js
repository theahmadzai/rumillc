import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Row, Col, Typography } from 'antd'
import Layout from '../components/Layout/Layout'
import styles from '../styles/about.module.css'

const { Title, Paragraph } = Typography

export default () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about.jpeg" }) {
        sharp: childImageSharp {
          fluid(cropFocus: NORTH, maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BackgroundImage className={styles.background} fluid={image.sharp.fluid}>
        <Title className={styles.title}>
          Rumi Saffron, Dried Fruits & Nuts Company
        </Title>
      </BackgroundImage>

      <Row className="app-about-row">
        <Col sm={16} className="app-about-paragraph">
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
        <Col sm={8} className="app-about-figure">
          <img
            className="app-about-image"
            src="/badam.jpeg"
            alt="rumi almonds"
          />
        </Col>
      </Row>
      <Row className="app-about-row">
        <Col sm={16} className="app-about-paragraph">
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
        <Col sm={8} className="app-about-figure">
          <img
            className="app-about-image"
            src="/kishmish.jpeg"
            alt="rumi kishmish"
          />
        </Col>
      </Row>
      <Row className="app-about-row">
        <Col sm={16} className="app-about-paragraph">
          <Paragraph>
            Our advantage in Saffron is that we grow it ourselves, we sell it
            with a very competitive price, high and assured quality and improved
            packing, for dry fruits we are buying from farmers/growers making it
            cheaper for us and able to sell it with a cheaper price and improved
            quality.
          </Paragraph>
        </Col>
        <Col sm={8} className="app-about-figure">
          <img
            className="app-about-image"
            src="/zafran.jpeg"
            alt="rumi saffron"
          />
        </Col>
      </Row>
    </Layout>
  )
}
