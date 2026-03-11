import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Star } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { TESTIMONIALS, STATS } from '../data/content'

export default function TestimonialsPage() {
  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Testimonials</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              What our <span className="text-gold-400">clients</span> say about us.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Don't just take our word for it. Here's what leaders from some of the world's most innovative organizations have to say about working with Ascend.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-gold-400 font-[var(--font-heading)]">{stat.value}</div>
                <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 lg:p-16 border border-slate-200 shadow-sm">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-4xl font-[var(--font-heading)] text-navy-900 leading-snug mb-10 font-medium italic">
                "{TESTIMONIALS[0].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center text-gold-400 font-bold text-lg">
                  {TESTIMONIALS[0].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-lg">{TESTIMONIALS[0].author}</p>
                  <p className="text-slate-500">{TESTIMONIALS[0].title}, {TESTIMONIALS[0].company}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow border border-slate-100">
                  <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                  <p className="text-slate-600 leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center text-white text-xs font-bold">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 text-sm">{t.author}</p>
                      <p className="text-slate-400 text-xs">{t.title}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mb-5">
              Ready to write your success story?
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Join the growing list of organizations that have transformed with Ascend.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
