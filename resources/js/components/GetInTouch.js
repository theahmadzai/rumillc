import React, { Fragment } from 'react'
import { Typography } from 'antd'
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined
} from '@ant-design/icons'

const { Paragraph, Title } = Typography

const GetInTouch = () => {
  return (
    <Fragment>
      <Title level={3}>Get in Touch</Title>
      <Paragraph>Subscribe to our RSS feed or follow us on Facebook and Twitter for the latest content</Paragraph>
      <div style={{ fontSize: '2rem' }}>
        <FacebookOutlined title="Rumi Facebook" style={{ marginRight: '1rem' }} />
        <TwitterOutlined title="Rumi Twitter" style={{ marginRight: '1rem' }}/>
        <InstagramOutlined title="Rumi Instagram" />
      </div>
    </Fragment>
  )
}

export default GetInTouch
