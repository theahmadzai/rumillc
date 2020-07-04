import React, { useEffect, useReducer } from 'react'
import { Layout, Spin, PageHeader, Statistic, Row, Button, Tag } from 'antd'
import axios from 'axios'
import NotFound from './NotFound'
import { SITE_URL, requestStatus } from '../global'

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

const ProductView = ({ slug }) => {
  const [product, dispatchProduct] = useReducer(productReducer, initialProduct)

  useEffect(() => {
    axios.get(SITE_URL + '/api/products/' + slug)
      .then(res => {
        dispatchProduct({
          status: requestStatus.SUCCESS,
          payload: res.data.data
        })
      }).catch(err => {
        dispatchProduct({
          status: requestStatus.ERROR,
          error: `Requested product does't exist, ${err.message}`
        })
      })
  }, [slug])

  const { loading, error, details } = product
  const { name, image, category, content } = details

  if (loading) return <Spin />

  if (error) return <NotFound message={error} />

  return (
    <Layout.Content>
      <PageHeader
        onBack={() => window.history.back()}
        title={name}
        subTitle={category.name}
        avatar={{ src: image }}
        tags={<Tag color="red">Top Rated</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
          Primary
          </Button>
        ]}
      >
      </PageHeader>
      <Row>
        <Statistic title="Status" value="Pending" />
        <Statistic
          title="Price"
          prefix="$"
          value={568.08}
          style={{
            margin: '0 32px'
          }}
        />
        <Statistic title="Balance" prefix="$" value={3345.08} />
      </Row>
      <Row>
        <div style={{ flex: 1 }}>{content}</div>
        <div className="image">
          <img
            src={image}
            alt="content"
            width="100%"
          />
        </div>
      </Row>
    </Layout.Content>
  )
}

export default ProductView
