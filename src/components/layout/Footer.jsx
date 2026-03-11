import { Link } from 'react-router-dom'
import { ArrowUpRight, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] mb-3">
                Ready to <span className="text-gold-400">elevate</span> your business?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Let's discuss how Ascend can help you achieve your strategic objectives and unlock new growth.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-xl font-semibold text-lg hover:bg-gold-300 transition-all hover:shadow-lg hover:shadow-gold-400/25 whitespace-nowrap"
            >
              Schedule a Consultation
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xl font-[var(--font-heading)]">A</span>
              </div>
              <span className="text-xl font-bold">{BRAND.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {BRAND.description}
            </p>
            <div className="flex gap-3">
              <a href={BRAND.social.linkedin} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-slate-400" />
              </a>
              <a href={BRAND.social.twitter} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-slate-400" />
              </a>
              <a href={BRAND.social.facebook} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {['Strategic Planning', 'Operational Excellence', 'Digital Transformation', 'Organizational Design', 'Financial Advisory', 'Market Entry'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-slate-300 hover:text-gold-400 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-slate-300 hover:text-gold-400 transition-colors text-sm">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="text-slate-300 hover:text-gold-400 transition-colors text-sm">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
