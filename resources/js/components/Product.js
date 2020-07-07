import React, { useState, useEffect, useReducer } from 'react'
import { Layout, Spin, PageHeader, Row, Col, List, Statistic, Input, Form, Button, Badge, Descriptions, Tag, Rate, Divider } from 'antd'
import axios from 'axios'
import { Link } from '@reach/router'
import NotFound from './NotFound'
import useRating from './useRating'
import { requestStatus } from '../global'

const initialProduct = {
  loading: true,
  details: {},
  error: null
}

const productReducer = (state, action) => {
  switch (action.status) {
    case requestStatus.LOADING:
      return { ...state, loading: true }

    case requestStatus.SUCCESS:
      return { ...state, loading: false, details: action.payload }

    case requestStatus.ERROR:
      return { ...state, loading: false, error: action.error }

    default:
      return state
  }
}

const Product = ({ slug }) => {
  const [product, dispatchProduct] = useReducer(productReducer, initialProduct)
  const [rating, dispatchRating] = useRating([])
  const [customerRating, setCustomerRating] = useState(5)

  useEffect(() => {
    axios.get('/api/products/' + slug)
      .then(res => {
        dispatchProduct({
          status: requestStatus.SUCCESS,
          payload: res.data.data
        })
        dispatchRating(res.data.data.feedbacks.map(f => Number.parseFloat(f.rating)))
      }).catch(err => {
        dispatchProduct({
          status: requestStatus.ERROR,
          error: `Requested product does't exist, ${err.message}`
        })
      })
  }, [slug, dispatchRating])

  const { loading, error, details } = product
  const { id, name, image, category, feedbacks, content } = details

  const handleSubmit = async values => {
    const res = await axios.post('/api/feedbacks', Object.assign({
      product_id: id,
      rating: customerRating
    }, values))

    window.alert(res.data.status)
    window.location.reload()
  }

  if (loading) return <Spin />

  if (error) return <NotFound message={error} />

  return (
    <Layout.Content style={{
      background: '#fff',
      padding: '2rem'
    }}>
      <PageHeader
        onBack={() => window.history.back()}
        title={name}
        subTitle={category.name}
        avatar={{ src: image }}
        tags={<Tag color="red">Top Rated</Tag>}/>

      <Row gutter={[24, 24]}>
        <Col span={24} md={10}>
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              border: '1px solid #eee'
            }}
          />
        </Col>

        <Col span={24} md={14}>
          <Descriptions bordered layout="horizontal" column={1}>
            <Descriptions.Item label="Name">
              {name}
            </Descriptions.Item>
            <Descriptions.Item label="Category">
              {category.name}
            </Descriptions.Item>
            <Descriptions.Item label="Price">
              <Link to="/contact">Contact for price</Link>
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Badge status="success" text="Available"/>
            </Descriptions.Item>
            <Descriptions.Item label="Total Feedbacks">
              {rating.totalRating}
            </Descriptions.Item>
            <Descriptions.Item label="Rating">
              <span style={{ marginRight: '1rem' }}>{rating.overallRating}</span>
              <Rate disabled allowHalf defaultValue={5} value={rating.overallRating} />
            </Descriptions.Item>
            <Descriptions.Item label="Description" style={{
              textAlign: 'justify',
              fontSize: '1rem'
            }}>
              {content}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col span={24} md={10} style={{ padding: '3rem 1rem' }}>
          <List
            dataSource={[1, 2, 3, 4, 5]}
            renderItem={item => (
              <Statistic
                value={rating.starsCount[item - 1]}
                suffix={<Rate disabled value={item} style={{ marginLeft: '1rem' }} />} />
            )}/>
        </Col>

        <Col span={24} md={14}>
          <Divider orientation="left">Write us a Review</Divider>
          <Form onFinish={handleSubmit}>
            <Form.Item>
              <Rate
                defaultValue={5}
                value={customerRating}
                onChange={ r => setCustomerRating(r)} />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item name="title" rules={[{ required: true }]}>
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="message" rules={[{ required: true }]}>
              <Input.TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <List
        header={`${feedbacks.length} feedbacks`}
        itemLayout="vertical"
        dataSource={feedbacks}
        renderItem={item => (
          <List.Item extra={item.name}>
            <List.Item.Meta
              title={item.title}
              description={item.message}/>
            <Rate disabled value={item.rating}/>
          </List.Item>
        )}/>

    </Layout.Content>
  )
}

export default Product
