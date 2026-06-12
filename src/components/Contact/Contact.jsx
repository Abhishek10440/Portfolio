import { useState } from 'react'
import contactImg from '../../assets/contact.png'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/ajax/abhishekshah15137@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio enquiry from ${form.name}`,
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Message could not be sent')
      }

      setForm({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Work Together</h2>
      <p className="contact-intro">Have a role, project, or collaboration in mind? Send a message or reach out directly.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <img src={contactImg} alt="" aria-hidden="true" />
          <div className="contact-details">
            <h3>Based in Mumbai, India</h3>
            <p>Open to frontend development opportunities and collaborative projects.</p>
            <a href="mailto:abhishekshah15137@gmail.com">abhishekshah15137@gmail.com</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your opportunity or project"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
          />

          <div className="contact-actions">
            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            <a href="mailto:abhishekshah15137@gmail.com" className="btn btn-ghost">Email Me</a>
            <a href="tel:+919833497153" className="btn btn-ghost">Call Me</a>
          </div>

          <div className="contact-status" role="status" aria-live="polite">
            {status === 'success' && <div className="success">Message sent successfully. Thank you!</div>}
            {status === 'error' && <div className="error">Message could not be sent. Please try again or email me directly.</div>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
