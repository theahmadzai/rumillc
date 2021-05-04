import React from 'react'
import { Link } from 'gatsby'
import { Card, Typography } from 'antd'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StarTwoTone } from '@ant-design/icons'

const { Text } = Typography

export default function ProductPreview({ title, category, slug, image }) {
  return (
    <Link to={'/products/' + slug}>
      <Card
        type="inner"
        size="small"
        cover={
          <GatsbyImage
            alt={title}
            image={image.gatsbyImageData}
            imgStyle={{ borderRadius: '12px', border: '1px solid #eee' }}
          />
        }
        bordered={false}
      >
        <Card.Meta
          title={
            <Text>
              <StarTwoTone />
              &nbsp; 5.0 (0)
            </Text>
          }
          description={category.title}
        />
        <Text>{title}</Text>
      </Card>
    </Link>
  )
}
