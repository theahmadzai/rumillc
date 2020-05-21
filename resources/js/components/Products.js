import React, { useEffect, useReducer, useState, Fragment } from 'react'
import axios from 'axios'
import { Layout, Row, Col, Pagination, Spin } from 'antd'
import Product from './Product'
import { SITE_URL, requestStatus } from '../global'

const initialProducts = {
  status: requestStatus.LOADING,
  loading: true,
  productsList: [],
  error: null
}

const productsReducer = (state, action) => {
  switch (action.status) {
    case requestStatus.LOADING:
      return { loading: true }

    case requestStatus.SUCCESS:
      return { loading: false, productsList: action.payload }

    case requestStatus.ERROR:
      return { error: action.error }

    default:
      return state
  }
}

const Products = ({ category }) => {
  const [products, dispatchProducts] = useReducer(productsReducer, initialProducts)
  const [paginationMeta, setPaginationMeta] = useState({
    totalItems: null,
    perPage: 8,
    currentPage: null
  })

  const { currentPage, perPage, totalItems } = paginationMeta

  useEffect(() => {
    axios.get(SITE_URL + '/api/products', {
      params: {
        category,
        offset: perPage,
        page: currentPage
      }
    }).then(res => {
      dispatchProducts({
        status: requestStatus.SUCCESS,
        payload: res.data.data
      })

      setPaginationMeta(state => ({
        ...state,
        totalItems: Number.parseInt(res.data.meta.total),
        currentPage: Number.parseInt(res.data.meta.current_page)
      }))
    }).catch(err => {
      dispatchProducts({
        status: requestStatus.ERROR,
        error: err
      })
    })
  }, [perPage, currentPage, category])

  const onPageChange = (page) => setPaginationMeta(state => ({
    ...state,
    currentPage: page
  }))

  const { loading, productsList } = products

  if (loading) return <Spin />

  return (
    <Fragment>
      <Layout.Content style={{ background: '#fff', padding: '1.5rem 1.5rem 0 1.5rem' }}>
        <Row gutter={[24, 24]}>
          {productsList.map(p => (
            <Col key={p.id} sm={12} md={8} lg={6}>
              <Product info={p} />
            </Col>
          ))}
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ display: 'flex', justifyContent: 'center', background: '#fff', borderTop: '2px solid #f9f9f9' }}>
        <Pagination
          onChange={onPageChange}
          current={currentPage}
          total={totalItems}
          pageSize={perPage}
          responsive={true}
          showQuickJumper={true}
          showTotal={totalItems => `Total ${totalItems} products`} />
      </Layout.Footer>
    </Fragment>
  )
}

export default Products