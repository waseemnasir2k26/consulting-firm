import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BRAND, SERVICES, STATS, TESTIMONIALS, CLIENT_LOGOS } from '../data/content'

/* ========================================
   LANDING PAGE 2 — "MODERN"
   Light/white with blue gradient hero, bold typography,
   geometric accents, vibrant and energetic
   ======================================== */

function HeroModern() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-bl from-blue-50 via-indigo-50/50 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-gold-400 rounded-full opacity-60" />
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40" />
        <div className="absolute bottom-40 right-1/4 w-6 h-6 border-2 border-gold-400/30 rounded-lg rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">
              New: 2026 Market Outlook Report Available
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-navy-900 leading-[1.05] mb-6 tracking-tight"
          >
            Transform Your
            <br />
            Business{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Trajectory</span>
              <span className="absolute bottom-2 left-0 right-0 h-4 bg-gold-400/30 -z-0" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl"
          >
            We help forward-thinking leaders solve their biggest challenges through strategic insight, operational excellence, and digital innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-2xl font-semibold text-lg hover:bg-navy-800 transition-all hover:shadow-xl hover:shadow-navy-900/20 hover:-translate-y-0.5"
            >
              Start Your Journey
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 text-slate-700 font-semibold text-lg hover:text-navy-900 transition-colors group">
              <span className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-gold-400/30">
                <Play className="w-5 h-5 text-navy-900 ml-0.5" />
              </span>
              Watch Our Story
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-8 lg:gap-12"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-2xl font-bold text-navy-900">{stat.value}</div>
                <div className="text-sm text-slate-400 leading-tight max-w-[80px]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LogoBar() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {CLIENT_LOGOS.map((name, i) => (
            <div
              key={i}
              className="text-slate-300 font-bold text-base tracking-wide hover:text-slate-500 transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesModern() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Services</span>
            <h2 className="text-3xl lg:text-5xl font-black text-navy-900 mt-3 mb-5 tracking-tight">
              What We Do Best
            </h2>
            <p className="text-slate-500 text-lg">
              Six core practices designed to deliver maximum impact across every dimension of your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const colors = [
              'from-blue-500 to-blue-600',
              'from-indigo-500 to-indigo-600',
              'from-violet-500 to-violet-600',
              'from-emerald-500 to-emerald-600',
              'from-amber-500 to-amber-600',
              'from-rose-500 to-rose-600',
            ]
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 h-full border border-transparent hover:border-slate-200">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ResultsBanner() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-5">
              Real Results. Real Impact.
            </h2>
            <p className="text-slate-400 text-lg">
              Numbers speak louder than words. Here is what we have achieved for our clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-gold-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsModern() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl lg:text-5xl font-black text-navy-900 mt-3 mb-5 tracking-tight">
              Loved by Leaders
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured testimonial */}
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-10 lg:p-14 border border-slate-200 shadow-sm mb-8">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-medium text-navy-900 leading-relaxed mb-8 font-[var(--font-heading)]">
              "{TESTIMONIALS[0].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                {TESTIMONIALS[0].author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-navy-900">{TESTIMONIALS[0].author}</p>
                <p className="text-slate-500 text-sm">
                  {TESTIMONIALS[0].title}, {TESTIMONIALS[0].company}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.slice(1, 3).map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 h-full">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-xs font-bold">
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
  )
}

function CTAModern() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-12 lg:p-20 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-5">
                Ready to Transform Your Business?
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
                Join 500+ organizations that have partnered with Ascend to achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-2xl font-bold text-lg hover:bg-gold-300 transition-all hover:shadow-lg hover:shadow-gold-400/25"
                >
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default function LandingPage2() {
  return (
    <div>
      <Navbar variant="light" />
      <HeroModern />
      <LogoBar />
      <ServicesModern />
      <ResultsBanner />
      <TestimonialsModern />
      <CTAModern />
      <Footer />
    </div>
  )
}
