import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Spin } from 'antd'
import { requestStatus, movement } from '../global'

let totalTestimonials = 0

const fixTestimonialIndex = i => i < 0 ? totalTestimonials - 1 : i > totalTestimonials - 1 ? 0 : i

const initialTestimonials = {
  loading: true,
  testimonialsList: [],
  error: null
}

const testimonialsReducer = (state, action) => {
  const { status, payload } = action

  switch (status) {
    case requestStatus.LOADING:
      return { ...state, loading: true }

    case requestStatus.SUCCESS:
      if (payload.length < 3) return state
      totalTestimonials = payload.length

      return { ...state, loading: false, testimonialsList: payload }

    case requestStatus.ERROR:
      return { ...state, error: action.error }

    default:
      return state
  }
}

const initialSelectedTestimonial = {
  prev: 0,
  curr: 1,
  next: 2
}

const selectedTestimonialReducer = (state, action) => {
  const { prev, curr, next } = state

  let pos = null

  switch (action) {
    case movement.NEXT:
      pos = 1
      break

    case movement.PREV:
      pos = -1
      break

    default:
      pos = 0
  }

  return {
    prev: fixTestimonialIndex(prev + pos),
    curr: fixTestimonialIndex(curr + pos),
    next: fixTestimonialIndex(next + pos)
  }
}

const Testimonials = () => {
  const [testimonials, dispatchTestimonials] = useReducer(testimonialsReducer, initialTestimonials)
  const [selectedTestimonial, dispatchSelectedTestimonial] = useReducer(selectedTestimonialReducer, initialSelectedTestimonial)

  const handlePrevTestimonial = () => dispatchSelectedTestimonial(movement.PREV)
  const handleNextTestimonial = () => dispatchSelectedTestimonial(movement.NEXT)

  useEffect(() => {
    axios.get('/api/testimonials').then(res => {
      dispatchTestimonials({
        status: requestStatus.SUCCESS,
        payload: res.data.data
      })
    }).catch(err => {
      dispatchTestimonials({
        status: requestStatus.ERROR,
        error: err
      })
    })
  }, [])

  const { loading, testimonialsList } = testimonials

  if (loading) return <Spin />

  const prev = testimonialsList[selectedTestimonial.prev]
  const curr = testimonialsList[selectedTestimonial.curr]
  const next = testimonialsList[selectedTestimonial.next]

  return (
    <div className="app-testimonials">
      <img className="next"
        src={prev.image}
        alt={prev.title}
        onClick={handlePrevTestimonial} />

      <div className="testimonial">
        <img
          src={curr.image}
          alt={curr.name} />
        <p>
          {curr.message}
        </p>
        <h3>- {curr.name} -</h3>
      </div>

      <img className="prev"
        src={next.image}
        alt={next.title}
        onClick={handleNextTestimonial} />
    </div>
  )
}

export default Testimonials
