import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BRAND } from '../data/content'

const INQUIRY_TYPES = [
  'Strategic Planning',
  'Operational Excellence',
  'Digital Transformation',
  'Organizational Design',
  'Financial Advisory',
  'Market Entry & Expansion',
  'General Inquiry',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    type: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Contact</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Let's start a <span className="text-gold-400">conversation</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Whether you have a specific challenge in mind or just want to explore how we might work together, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-navy-900 mb-3">Thank You!</h3>
                      <p className="text-slate-500 max-w-md mx-auto">
                        We've received your inquiry. A member of our team will reach out within 24 hours to schedule your consultation.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setForm({ name: '', email: '', company: '', phone: '', type: '', message: '' })
                        }}
                        className="mt-6 text-gold-600 font-semibold hover:text-gold-700"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-navy-900 mb-2">Send an Inquiry</h2>
                      <p className="text-slate-500 text-sm mb-8">
                        Fill out the form below and we'll get back to you within one business day.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-1.5">
                              Full Name <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              placeholder="John Smith"
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-1.5">
                              Email Address <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              placeholder="john@company.com"
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-1.5">
                              Company
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your Company"
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy-900 mb-1.5">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 000-0000"
                              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">
                            Service of Interest
                          </label>
                          <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-navy-900 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all bg-white"
                          >
                            <option value="">Select a service...</option>
                            {INQUIRY_TYPES.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your challenge or how we can help..."
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all hover:shadow-lg text-lg"
                        >
                          <Send className="w-5 h-5" />
                          Send Inquiry
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">Email</p>
                          <a href={`mailto:${BRAND.email}`} className="text-navy-900 font-medium hover:text-gold-600 transition-colors">
                            {BRAND.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">Phone</p>
                          <a href={`tel:${BRAND.phone}`} className="text-navy-900 font-medium hover:text-gold-600 transition-colors">
                            {BRAND.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">Office</p>
                          <p className="text-navy-900 font-medium">{BRAND.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">Office Hours</p>
                          <p className="text-navy-900 font-medium">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-gold-400 mx-auto mb-3" />
                      <p className="text-slate-400 text-sm">New York, NY</p>
                    </div>
                  </div>

                  {/* Quick response */}
                  <div className="bg-gold-50 rounded-xl p-6 border border-gold-100">
                    <h4 className="font-semibold text-navy-900 mb-2">Quick Response Guarantee</h4>
                    <p className="text-slate-600 text-sm">
                      We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
