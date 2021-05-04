import React from 'react'
import { Row, Col, Typography, Form, Input, Button } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from '@ant-design/icons'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Layout from '../components/layout'
import * as styles from './contact.module.css'

const { TextArea } = Input
const { Paragraph, Title } = Typography

export default function ContactPage() {
  const { address, contacts } = useSiteMetadata()

  const handleFinish = values => {
    console.log(values)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(values).toString(),
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
          <Title className={styles.title}>Where can you find us?</Title>
          <Paragraph className={styles.aboutItem}>
            <CompassOutlined title="Office Address" /> {address}
          </Paragraph>
          <Paragraph className={styles.aboutItem}>
            <PhoneOutlined title="Phone" /> {contacts.phone}
          </Paragraph>
          <Paragraph className={styles.aboutItem}>
            <WhatsAppOutlined title="WhatsApp/Telegram" /> {contacts.whatsapp}
          </Paragraph>
          <Paragraph className={styles.aboutItem}>
            <MailOutlined title="Email" /> {contacts.email}
          </Paragraph>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.953839920866!2d69.24426731454042!3d34.50405450123365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16b8ea717bc9f%3A0x7c484ae0501e67de!2sRumi%20Trading%20LLC!5e0!3m2!1sen!2s!4v1586981874220!5m2!1sen!2s"
            className={styles.map}
            title="Gogle Map"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
          />
        </Col>
        <Col span={24} md={12}>
          <Form
            netlify
            className={styles.form}
            layout="vertical"
            size="large"
            scrollToFirstError
            noValidate
            onFinish={handleFinish}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true }, { type: 'email' }]}
            >
              <Input type="email" placeholder="youremail@example.com" />
            </Form.Item>

            <Form.Item label="Subject" name="subject">
              <Input type="text" placeholder="Subject of discussion" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true }]}
            >
              <TextArea placeholder="Your message..." rows={5} />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}
