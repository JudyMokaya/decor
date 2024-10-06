// components/ContactForm.js

import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here, e.g., sending data to your backend or an email service
  }

  return (
    <div className='page-container'>
      <div className='contact-form-container'>
        <form
          onSubmit={handleSubmit}
          className='contact-form'
        >
          <h2>Contact Form</h2>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='Full name*'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Active email*'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='tel'
              name='phone'
              placeholder='Phone number*'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='subject'
              placeholder='Subject*'
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              placeholder='Message*'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type='submit' className='btn-submit'>
            Send Request
          </button>
        </form>
      </div>
      <Link href='/' className='back-button'>
        Back to Home
      </Link>
    </div>
  )
}
