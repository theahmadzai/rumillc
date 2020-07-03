import React, { useEffect, useReducer } from 'react'
import { Spin } from 'antd'
import axios from 'axios'
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
          error: err.message
        })
      })
  }, [slug])

  const { loading, error, details: { name, image } } = product

  if (loading) return <Spin />

  if (error) return <div>{error}</div>

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name}/>
    </div>
  )
}

export default ProductView
