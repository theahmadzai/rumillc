import React from 'react'
import { Row, Col, Typography, Form, Input, Button } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from '@ant-design/icons'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/Layout/Layout'
import Map from '../components/Map/Map'
import styles from '../styles/contact.module.css'

const { Item } = Form
const { TextArea } = Input
const { Paragraph, Title } = Typography

export default () => {
  const { address, contacts } = useSiteMetadata()

  return (
    <Layout>
      <Row>
        <Col span={24} md={12} className={styles.contactInfo}>
          <Title>Where can you find us?</Title>
          <Paragraph>
            <CompassOutlined title="Office Address" /> {address}
          </Paragraph>
          <Paragraph>
            <PhoneOutlined title="Phone" /> {contacts.phone}
          </Paragraph>
          <Paragraph>
            <WhatsAppOutlined title="WhatsApp/Telegram" /> {contacts.whatsapp}
          </Paragraph>
          <Paragraph>
            <MailOutlined title="Email" /> {contacts.email}
          </Paragraph>
        </Col>
        <Col span={24} md={12}>
          <Form
            className={styles.form}
            layout="vertical"
            size="large"
            scrollToFirstError
            noValidate
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            <Item
              label="Full Name"
              name="name"
              rules={[{ required: true }]}
              required
            >
              <Input type="text" placeholder="Your name" />
            </Item>

            <Item
              label="Email"
              name="email"
              rules={[{ required: true }, { type: 'email' }]}
              required
            >
              <Input type="email" placeholder="youremail@example.com" />
            </Item>

            <Item label="Subject" name="subject">
              <Input type="text" placeholder="Subject of discussion" />
            </Item>

            <Item
              label="Message"
              name="message"
              rules={[{ required: true }]}
              required
            >
              <TextArea placeholder="Your message..." rows={5} />
            </Item>

            <Item>
              <button type="submit">Send</button>
            </Item>
          </Form>
        </Col>
      </Row>
      <Map />
    </Layout>
  )
}
