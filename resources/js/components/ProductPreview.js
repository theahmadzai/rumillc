import React, { useState } from 'react'
import { Card, Statistic, Row, Col, Rate } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { Link } from '@reach/router'
import useRating from './useRating'

const ProductPreview = ({ slug, name, thumbnail, feedbacks }) => {
  const [loading, setLoading] = useState(true)
  const [rating] = useRating(feedbacks.map(f => Number.parseFloat(f.rating)))

  return (
    <Link to={'/products/' + slug}>
      <Card
        loading={loading || loading === undefined}
        hoverable
        cover={
          <img
            src={thumbnail}
            alt={name}
            style={{ width: '100%' }}
            onLoad={() => setLoading(false)}/>}>
        <Card.Meta title={name} />
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Feedback" value={rating.totalRating} prefix={<LikeOutlined />} />
          </Col>
          <Col span={12}>
            <Statistic title="Available" value={100} suffix="/100" />
          </Col>
        </Row>
        <Rate disabled allowHalf defaultValue={5} value={rating.overallRating} />
      </Card>
    </Link>
  )
}

export default ProductPreview
