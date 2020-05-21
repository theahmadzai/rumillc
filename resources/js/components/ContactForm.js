import React, { useState } from 'react'
import { SITE_URL } from '../global'
import axios from 'axios'

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.target)

    axios.post(SITE_URL + '/api/contact', formData).then(res => {
      window.alert(res.data.status)
    }).catch(err => {
      const errors = err.response.data.errors

      for (const k in errors) errors[k] = errors[k][0]

      setErrors(errors)
    }).finally(() => setLoading(false))
  }

  const handleClear = (e) => {
    delete errors[e.target.name]

    setErrors(errors)
  }

  const { name, email, subject, message } = errors
  const hasErrors = Object.keys(errors).length > 0

  return (
    <form noValidate
      className="app-contact-form"
      onSubmit={handleSubmit}
      onKeyDown={handleClear}>

      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" />
      <span>{name}</span>

      <label htmlFor="email">Your Email</label>
      <input type="email" name="email" />
      <span>{email}</span>

      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" />
      <span>{subject}</span>

      <label htmlFor="message">Your Message</label>
      <textarea name="message" />
      <span>{message}</span>

      {loading
        ? <div className="process-button">
          <div className="loading left"></div>
        </div>
        : <input type="submit" value="Send" disabled={hasErrors} />}
    </form >
  )
}

export default ContactForm
