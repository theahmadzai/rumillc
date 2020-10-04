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

  const handleFinish = values => {
    console.log(values)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...values,
      }).toString(),
    })
      .then(() => {
        window.alert('Thankyou, your message has been sent!')
        window.history.go()
      })
      .catch(() => {
        window.alert('Please try again later!')
      })
  }

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
            onFinish={handleFinish}
          >
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
              <Button type="submit" htmlType="submit">
                Send
              </Button>
            </Item>
          </Form>
        </Col>
      </Row>
      <Map />
    </Layout>
  )
}
