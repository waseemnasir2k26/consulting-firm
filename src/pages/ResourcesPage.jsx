import { Link } from 'react-router-dom'
import { ArrowRight, Download, FileText } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { RESOURCES } from '../data/content'

export default function ResourcesPage() {
  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Resources</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Insights & <span className="text-gold-400">tools</span> for leaders.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Access our library of frameworks, templates, whitepapers, and assessment tools. The same resources we use with our Fortune 500 clients, available to you.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES.map((resource, i) => {
              const Icon = resource.icon
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-gold-200 transition-all h-full flex flex-col group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center group-hover:bg-gold-400 transition-colors">
                        <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                      </div>
                      <span className="px-3 py-1 bg-gold-50 text-gold-600 rounded-full text-xs font-semibold">
                        {resource.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-3">{resource.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{resource.description}</p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors group-hover:text-gold-600">
                      <Download className="w-4 h-4" />
                      Download Resource
                    </button>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <FileText className="w-12 h-12 text-gold-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-[var(--font-heading)] mb-5">
                Get Fresh Insights Delivered
              </h2>
              <p className="text-slate-400 mb-8">
                Join 5,000+ executives who receive our monthly newsletter with the latest frameworks, case studies, and strategic insights.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-gold-400 text-navy-900 rounded-xl font-semibold hover:bg-gold-300 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-slate-500 text-xs mt-4">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
