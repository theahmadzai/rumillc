import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post('/api/contact', new FormData(e.target))
      window.alert(res.data.status)
    } catch (err) {
      const errors = err.response.data.errors
      for (const k in errors) errors[k] = errors[k][0]
      setErrors(state => ({ ...state, ...errors }))
    } finally {
      setLoading(false)
    }
  }

  const handleClear = e => {
    errors[e.target.name] = ''
    setErrors(Object.create(errors))
  }

  console.log(errors)

  return (
    <form noValidate
      className="app-contact-form"
      onSubmit={handleSubmit}
      onKeyDown={handleClear}>

      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" />
      <span>{errors.name}</span>

      <label htmlFor="email">Your Email</label>
      <input type="email" name="email" />
      <span>{errors.email}</span>

      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" />
      <span>{errors.subject}</span>

      <label htmlFor="message">Your Message</label>
      <textarea name="message" />
      <span>{errors.message}</span>

      {loading || <input type="submit" value="Send" />}
    </form >
  )
}

export default ContactForm
