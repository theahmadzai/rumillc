import React, { Fragment } from 'react'
import { Typography } from 'antd'
import {
  CompassOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  MailOutlined
} from '@ant-design/icons'
import { contactInfo } from '../data'

const { Paragraph, Title } = Typography

const ContactInfo = () => {
  return (
    <Fragment>
      <Title level={3}>Contact Info</Title>
      <Paragraph>
        <CompassOutlined title="Office Address" /> {contactInfo.office}
      </Paragraph>
      <Paragraph>
        <PhoneOutlined title="Contact" /> {contactInfo.contact}
      </Paragraph>
      <Paragraph>
        <WhatsAppOutlined title="WhatsApp/Telegram" /> {contactInfo.contact}
      </Paragraph>
      <Paragraph>
        <MailOutlined title="Email" /> {contactInfo.email}
      </Paragraph>
    </Fragment>
  )
}

export default ContactInfo
