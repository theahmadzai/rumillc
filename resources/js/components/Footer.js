import React, { Fragment } from 'react'
import { copyrights } from '../data'
import { Layout, Row, Col } from 'antd'
import AboutRumi from './AboutRumi'
import ContactInfo from './ContactInfo'
import GetInTouch from './GetInTouch'

const Footer = () => {
  return (
    <Fragment>
      <Layout.Footer className="app-footer">
        <Row gutter={24}>
          <Col md={8}>
            <AboutRumi />
          </Col>
          <Col md={{ span: 7, offset: 1 }}>
            <ContactInfo />
          </Col>
          <Col md={8}>
            <GetInTouch />
          </Col>
        </Row>
      </Layout.Footer>
      <p className="app-copyrights">{copyrights}</p>
    </Fragment>
  )
}

export default Footer
