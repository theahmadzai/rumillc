import React from 'react'
import { Layout, Row, Col } from 'antd'
import ContactForm from './ContactForm'
import Map from './Map'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <Layout.Content>
      <Row>
        <Col span={24} md={12} className="app-contact">
          <ContactInfo />
        </Col>
        <Col span={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
      <Map />
    </Layout.Content>
  )
}

export default Contact
