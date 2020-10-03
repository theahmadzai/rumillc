import React from 'react'
import { Row, Col, Typography } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons'
import useSiteMetadata from '../../../hooks/use-sitemetadata'
import styles from './Footer.module.css'

const { Paragraph, Title } = Typography

const Footer = () => {
  const {
    name,
    description,
    address,
    contacts,
    social,
    copyrights,
  } = useSiteMetadata()

  return (
    <footer className={styles.footer}>
      <Row className={styles.footerItems}>
        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerHeading}>
            About {name}
          </Title>
          <Paragraph ellipsis={{ rows: 2, expandable: true }}>
            {description}
          </Paragraph>
        </Col>

        <Col
          span={24}
          md={{ span: 7, offset: 1 }}
          className={styles.footerItem}
        >
          <Title level={3} className={styles.footerHeading}>
            Contact Info
          </Title>
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

        <Col span={24} md={8} className={styles.footerItem}>
          <Title level={3} className={styles.footerHeading}>
            Get in Touch
          </Title>
          <Paragraph>
            Subscribe to our RSS feed or follow us on Facebook and Twitter for
            the latest content
          </Paragraph>
          <div className={styles.icons}>
            <a href={social.facebook} rel="noreferrer" target="_blank">
              <FacebookOutlined title={`${name} Facebook`} />
            </a>
            <a href={social.twitter} rel="noreferrer" target="_blank">
              <TwitterOutlined title={`${name} Twitter`} />
            </a>
            <a href={social.instagram} rel="noreferrer" target="_blank">
              <InstagramOutlined title={`${name} Instagram`} />
            </a>
          </div>
        </Col>
      </Row>

      <div className={styles.copyrights}>
        <span>&copy; {copyrights}</span>
      </div>
    </footer>
  )
}

export default Footer
