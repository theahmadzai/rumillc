import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  Row,
  Col,
  Typography,
  Rate,
  Tag,
  Divider,
  Input,
  Button,
  List,
  Avatar,
  Form,
} from 'antd'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../../components/layout'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

export const query = graphql`
  query($id: String!) {
    product: contentfulProduct(id: { eq: $id }) {
      title
      slug
      image {
        title
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP]
        )
      }
      status
      description {
        raw
      }
      category {
        title
      }
    }
  }
`

export default function ProductPage({
  data: { product },
  pageContext: { slug },
}) {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(5)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch(`/.netlify/functions/get-reviews?slug=${slug}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setReviews(res))
      .catch(console.error)
  }, [slug])

  const submitReview = ({ name, description }) => {
    setSubmitting(true)

    fetch('/.netlify/functions/create-review', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug, rating, name, description }),
    })
      .then(res => res.json())
      .then(() => {
        setRating(5)
        window.alert('Thankyou for your feedback!')
        window.history.go()
      })
      .catch(() => {
        window.alert('Please try again later!')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const calculatedRating =
    (Math.ceil(0.1 + reviews.reduce((t, r) => t + r.rating, 0)) /
      (reviews.length * 5)) *
    5

  return (
    <Layout className="spaceRow">
      <Row gutter={[48, 48]}>
        <Col span={24} md={12}>
          <GatsbyImage
            alt={product.image.title}
            image={product.image.gatsbyImageData}
          />
          <Divider type="vertical" dashed />
          <Form
            size="large"
            onFinish={submitReview}
            scrollToFirstError
            noValidate
          >
            <Form.Item>
              <Rate
                allowHalf
                defaultValue={5}
                value={rating}
                onChange={setRating}
                required
              />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item name="description" rules={[{ required: true }]}>
              <TextArea placeholder="Description..." required />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={submitting}>
              Rate
            </Button>
          </Form>
        </Col>
        <Col span={24} md={12}>
          <Title>{product.title}</Title>
          <Rate defaultValue={5} value={calculatedRating} disabled />
          &nbsp; (5.0) {reviews.length} review(s)
          <Paragraph type="secondary">{product.category.title}</Paragraph>
          <Tag color="green">Top Rated</Tag>
          <Divider />
          <Paragraph>{renderRichText(product.description)}</Paragraph>
          <Divider orientation="left">Feedbacks</Divider>
          <List
            dataSource={reviews}
            renderItem={review => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{review.name.slice(0, 1)}</Avatar>}
                  title={review.name}
                  description={
                    <>
                      <Rate
                        allowHalf
                        value={review.rating}
                        defaultValue={5}
                        disabled
                      />
                      <Paragraph>{review.description}</Paragraph>
                      <Text type="secondary">
                        {new Date(review.date).toDateString()}
                      </Text>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Layout>
  )
}
