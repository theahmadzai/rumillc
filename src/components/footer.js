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
import useSiteMetadata from '../hooks/use-sitemetadata'
import * as styles from './footer.module.css'

const { Paragraph, Title } = Typography

export default function Footer() {
  const {
    name,
    title,
    description,
    address,
    contacts,
    social,
  } = useSiteMetadata()

  return (
    <>
      <footer className={styles.footer}>
        <Row gutter={[24, 24]}>
          <Col span={24} md={8}>
            <Title level={3} className={styles.heading}>
              About {name}
            </Title>
            <Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {description}
            </Paragraph>
          </Col>

          <Col span={24} md={8}>
            <Title level={3} className={styles.heading}>
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

          <Col span={24} md={8}>
            <Title level={3} className={styles.heading}>
              Get in Touch
            </Title>
            <Paragraph>
              Subscribe to our RSS feed or follow us on Facebook and Twitter for
              the latest content
            </Paragraph>
            <div className={styles.icons}>
              <a
                href={social.facebook}
                rel="noreferrer"
                target="_blank"
                className={styles.icon}
              >
                <FacebookOutlined title={`${name} Facebook`} />
              </a>
              <a
                href={social.twitter}
                rel="noreferrer"
                target="_blank"
                className={styles.icon}
              >
                <TwitterOutlined title={`${name} Twitter`} />
              </a>
              <a
                href={social.instagram}
                rel="noreferrer"
                target="_blank"
                className={styles.icon}
              >
                <InstagramOutlined title={`${name} Instagram`} />
              </a>
            </div>
          </Col>
        </Row>
      </footer>
      <div className={styles.copyrights}>
        <span>
          &copy; Copyright 2017-{new Date().getFullYear()} - {title}
        </span>
      </div>
    </>
  )
}
