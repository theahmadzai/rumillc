import React, { useState } from 'react'
import { Link } from '@reach/router'
import { Row, Col, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { title, logoPath, menuLinks } from '../data'

const Header = () => {
  const [visible, setVisible] = useState(false)

  const links = menuLinks.map(({ name, path }, index) => (
    <Link
      getProps={({ isCurrent }) => ({ className: isCurrent && 'app-navbar-active' })}
      key={index}
      to={path}>{name}</Link>
  ))

  return (
    <header className="app-header">
      <Row>
        <Col span={20} md={6}>
          <Link
            to="/"
            className="app-logo">
            <img src={logoPath} alt={title} /> <span>RumiLLC</span>
          </Link>
        </Col>

        <Col md={18} className="app-navbar">{links}</Col>

        <MenuOutlined
          span={4}
          className="app-menu-icon"
          onClick={() => setVisible(true)}/>

        <Drawer
          title="RumiLLC"
          visible={visible}
          closeable={false}
          onClose={() => setVisible(false)}>
          <nav className="app-navbar app-navbar-vertical">{links}</nav>
        </Drawer>
      </Row>
    </header>
  )
}

export default Header
