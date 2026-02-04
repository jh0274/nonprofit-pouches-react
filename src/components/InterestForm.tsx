import { useState, type FormEvent } from 'react'
import './InterestForm.css'

interface FormData {
  email: string
  schoolName: string
  role: string
  comments: string
}

const InterestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    schoolName: '',
    role: '',
    comments: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Web3Forms endpoint - user needs to get their own access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd1d4ea4b-6219-4628-a37a-2194d073c087',
          to_email: 'jim.hawker@folkenomics.com',
          from_name: 'Non-Profit Pouches Website',
          subject: `New Interest Form: ${formData.schoolName}`,
          email: formData.email,
          school_name: formData.schoolName,
          role: formData.role,
          comments: formData.comments,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setMessage("Thank you! We've received your interest and will be in touch soon.")
        setFormData({ email: '', schoolName: '', role: '', comments: '' })
      } else {
        setStatus('error')
        setMessage('Oops! There was a problem. Please try again or email us directly.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Oops! There was a problem. Please try again or email us directly.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="interest" className="interest-form">
      <div className="container">
        <h2>Express Your Interest</h2>
        <p className="section-subtitle">
          Join us in creating distraction-free learning spaces and funding tech education
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="schoolName">School Name *</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Your Role *</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Please select...</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
              <option value="school-leadership">School Leadership</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Additional Comments (Optional)</label>
            <textarea
              id="comments"
              name="comments"
              rows={4}
              value={formData.comments}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Submit Interest'}
          </button>
          {status !== 'idle' && (
            <div className={`form-message ${status}`}>
              {message}
            </div>
          )}
          <p className="form-note">We'll be in touch soon to discuss next steps</p>
        </form>
      </div>
    </section>
  )
}

export default InterestForm
