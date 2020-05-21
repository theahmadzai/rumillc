import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Statistic, Row, Col, Rate } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { SITE_URL } from '../global'

const Product = ({ info }) => {
  const { id, name, image } = info

  const [rating, setRating] = useState(null)

  useEffect(() => {
    axios.get(SITE_URL + '/api/feedbacks/', {
      params: {
        product: id
      }
    }).then(res => {
      if (res.data.data.length >= 1) {
        setRating(res.data.data
          .map(f => Number.parseFloat(f.rating))
          .reduce((t, f) => t + f))
      }
    })
  }, [id])

  return (
    <Card
      hoverable
      loading={!rating}
      cover={<img alt={name} src={image} style={{ width: '100%' }} />}>
      <Card.Meta title={name} />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Feedback" value={rating} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Available" value={100} suffix="/100" />
        </Col>
      </Row>
      <Rate disabled allowHalf defaultValue={5} value={rating} />
    </Card>
  )
}

export default Product
