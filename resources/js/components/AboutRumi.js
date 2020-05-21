import React, { Fragment } from 'react'
import { Typography } from 'antd'
import { aboutRumi } from '../data'

const { Paragraph, Title } = Typography

const AboutRumi = () => {
  return (
    <Fragment>
      <Title level={3}>About Rumi</Title>
      <Paragraph ellipsis={{ rows: 2, expandable: true }}>
        {aboutRumi}
      </Paragraph>
    </Fragment>
  )
}

export default AboutRumi
