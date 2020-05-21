import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Menu, Spin } from 'antd'
import {
  ShoppingOutlined
} from '@ant-design/icons'
import { SITE_URL, requestStatus } from '../global'

const initialCategories = {
  status: requestStatus.LOADING,
  loading: true,
  branches: [],
  error: null
}

const categoriesReducer = (state, action) => {
  switch (action.status) {
    case requestStatus.LOADING:
      return { loading: true }

    case requestStatus.SUCCESS:
      return { loading: false, branches: action.payload }

    case requestStatus.ERROR:
      return { error: action.error }

    default:
      return state
  }
}

const Categories = ({ onCategoryChange }) => {
  const [categories, dispatchCategories] = useReducer(categoriesReducer, initialCategories)

  useEffect(() => {
    axios.get(SITE_URL + '/api/branches').then(res => {
      dispatchCategories({
        status: requestStatus.SUCCESS,
        payload: res.data.data
      })
    }).catch(err => {
      dispatchCategories({
        status: requestStatus.ERROR,
        error: err
      })
    })
  }, [])

  const { loading, branches } = categories

  if (loading) return <Spin />

  return (
    <Menu
      style={{ height: '100%' }}
      onClick={({ key }) => onCategoryChange(key)}
      mode={'inline'}>
      {branches.map(b => (
        <Menu.SubMenu
          key={b.id}
          title={
            <span>
              <ShoppingOutlined />
              <span>{b.name}</span>
            </span>
          }>
          {b.categories.map(c => (
            <Menu.Item key={c.id}>
              {c.name}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}

export default Categories
