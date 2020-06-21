import React, { useState, useReducer, useEffect } from 'react'
import axios from 'axios'
import { Layout, Pagination, Spin } from 'antd'
import ImageGallery from 'react-image-gallery'
import { SITE_URL, requestStatus } from '../global'

const initialGallery = {
  loading: true,
  images: [],
  error: null
}

const galleryReducer = (state, action) => {
  switch (action.status) {
    case requestStatus.LOADING:
      return { ...state, loading: true }

    case requestStatus.SUCCESS:
      return { ...state, loading: false, images: action.payload }

    case requestStatus.ERROR:
      return { ...state, error: action.error }

    default:
      return state
  }
}

export default function Gallery () {
  const [gallery, dispatchGallery] = useReducer(galleryReducer, initialGallery)
  const [paginationMeta, setPaginationMeta] = useState({
    totalItems: null,
    perPage: 3,
    currentPage: null
  })

  const { currentPage, perPage, totalItems } = paginationMeta

  useEffect(() => {
    axios.get(SITE_URL + '/api/images', {
      params: {
        type: 'gallery',
        offset: perPage,
        page: currentPage
      }
    }).then(res => {
      dispatchGallery({
        status: requestStatus.SUCCESS,
        payload: res.data.data.map(x => ({
          original: x.image,
          thumbnail: x.thumbnail,
          originalTitle: x.title,
          thumbnailTitle: x.title
        }))
      })

      setPaginationMeta(state => ({
        ...state,
        totalItems: Number.parseInt(res.data.meta.total),
        currentPage: Number.parseInt(res.data.meta.current_page)
      }))
    }).catch(err => {
      dispatchGallery({
        status: requestStatus.ERROR,
        error: err
      })
    })
  }, [currentPage, perPage])

  const onPageChange = (page) => setPaginationMeta(state => ({
    ...state,
    currentPage: page
  }))

  const { loading, images } = gallery

  if (loading) return <Spin />

  return (
    <Layout>
      <Layout.Content style={{ padding: '2rem', background: '#fff' }}>
        <ImageGallery
          items={images}
          thumbnailPosition="left" />
      </Layout.Content>
      <Layout.Footer style={{ display: 'flex', justifyContent: 'center', background: '#fff', borderTop: '2px solid #f9f9f9' }}>
        <Pagination
          onChange={onPageChange}
          current={currentPage}
          total={totalItems}
          pageSize={perPage}
          responsive={true}
          showTotal={totalItems => `Total ${totalItems} images`} />
      </Layout.Footer>
    </Layout>
  )
}
