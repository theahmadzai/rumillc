import React, { useReducer } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Row, Col } from 'antd'
import useTestimonials from '../hooks/use-testimonials'
import * as styles from './testimonials.module.css'

let totalTestimonials = 0

const fixTestimonialIndex = i =>
  i < 0 ? totalTestimonials - 1 : i > totalTestimonials - 1 ? 0 : i

const selectedTestimonialReducer = ({ prev, curr, next }, action) => {
  return {
    prev: fixTestimonialIndex(prev + action),
    curr: fixTestimonialIndex(curr + action),
    next: fixTestimonialIndex(next + action),
  }
}

export default function Testimonials() {
  const testimonials = useTestimonials()
  totalTestimonials = testimonials.length

  const [selectedTestimonial, dispatchSelectedTestimonial] = useReducer(
    selectedTestimonialReducer,
    {
      prev: 0,
      curr: 1,
      next: 2,
    }
  )

  const handlePrevTestimonial = () => dispatchSelectedTestimonial(-1)
  const handleNextTestimonial = () => dispatchSelectedTestimonial(1)

  const prev = testimonials[selectedTestimonial.prev]
  const curr = testimonials[selectedTestimonial.curr]
  const next = testimonials[selectedTestimonial.next]

  return (
    <div className={styles.testimonials}>
      <Row gutter={[24, 24]} justify="space-between" align="middle">
        <Col span={24} md={6}>
          <GatsbyImage
            className={styles.control}
            onClick={handlePrevTestimonial}
            image={prev.image.gatsbyImageData}
            alt={prev.name}
          />
        </Col>
        <Col span={24} md={12}>
          <figure className={styles.testimonial}>
            <GatsbyImage
              className={styles.image}
              image={curr.image.gatsbyImageData}
              alt={curr.name}
            />
            <blockquote>{curr.message.message}</blockquote>
            <p>
              <strong>- {curr.name} -</strong>
            </p>
          </figure>
        </Col>
        <Col span={24} md={6}>
          <GatsbyImage
            className={styles.control}
            onClick={handleNextTestimonial}
            image={next.image.gatsbyImageData}
            alt={next.name}
          />
        </Col>
      </Row>
    </div>
  )
}
