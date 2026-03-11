import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Minus,
  Quote,
  Star,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BRAND, SERVICES, STATS, TESTIMONIALS } from '../data/content'

/* ========================================
   LANDING PAGE 3 — "MINIMAL"
   Black/white with gold accent, lots of whitespace,
   sophisticated, editorial, premium feel
   ======================================== */

function HeroMinimal() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                Strategic Consulting
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-[var(--font-heading)] text-navy-900 leading-[0.95] mb-8 tracking-tight"
            >
              Clarity.
              <br />
              <span className="text-gold-400">Strategy.</span>
              <br />
              Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-slate-500 leading-relaxed max-w-md mb-10"
            >
              We cut through complexity to deliver elegant, actionable strategies that drive measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-navy-900 text-white rounded-full font-semibold hover:bg-navy-800 transition-all group"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="text-navy-900 font-semibold hover:text-gold-600 transition-colors underline underline-offset-4 decoration-gold-400"
              >
                Our Philosophy
              </Link>
            </motion.div>
          </div>

          {/* Right — Minimal stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="space-y-0 border-t border-slate-200">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-center justify-between py-8 border-b border-slate-200 group hover:bg-slate-50 px-4 -mx-4 transition-colors">
                  <span className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-4xl font-bold font-[var(--font-heading)] text-navy-900 group-hover:text-gold-500 transition-colors">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gold-400" />
              <span className="text-sm font-medium text-gold-400 uppercase tracking-widest">
                Philosophy
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold font-[var(--font-heading)] leading-tight mb-6">
              Less noise.
              <br />
              More signal.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              In a world of overloaded consultancies and cookie-cutter solutions, we believe in depth over breadth. Every engagement starts with listening, proceeds with rigor, and ends with transformation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Deep Analysis', desc: 'Not surface-level advice' },
                { label: 'Bespoke Solutions', desc: 'Tailored to your reality' },
                { label: 'Senior Expertise', desc: 'Partners on every project' },
                { label: 'Real Accountability', desc: 'We share in your outcomes' },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-xl hover:border-gold-400/30 transition-colors">
                  <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ServicesMinimal() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-navy-900" />
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">
              Services
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-[var(--font-heading)] text-navy-900 mb-16">
            Our Practice Areas
          </h2>
        </ScrollReveal>

        <div className="space-y-0 border-t border-slate-200">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 py-8 border-b border-slate-200 hover:bg-slate-50 px-4 -mx-4 transition-colors"
                >
                  <div className="flex items-center gap-4 lg:w-1/3">
                    <span className="text-sm text-slate-300 font-medium w-8">0{i + 1}</span>
                    <Icon className="w-5 h-5 text-gold-500" />
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm lg:flex-1">{service.description}</p>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-gold-500 transition-colors shrink-0 hidden lg:block" />
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TestimonialsMinimal() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-navy-900" />
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">
              Client Voices
            </span>
          </div>
        </ScrollReveal>

        {/* Large featured quote */}
        <ScrollReveal>
          <div className="max-w-4xl mb-16">
            <Quote className="w-10 h-10 text-gold-400 mb-6" />
            <blockquote className="text-3xl lg:text-4xl font-[var(--font-heading)] text-navy-900 leading-snug mb-8 font-medium italic">
              "{TESTIMONIALS[0].quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <Minus className="w-8 h-px text-gold-400" />
              <span className="font-semibold text-navy-900">{TESTIMONIALS[0].author}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500 text-sm">{TESTIMONIALS[0].title}, {TESTIMONIALS[0].company}</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.slice(1, 3).map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="border-l-2 border-gold-400 pl-6 py-2">
                <p className="text-slate-600 leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{t.author}</p>
                  <p className="text-slate-400 text-xs">{t.title}, {t.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors underline underline-offset-4 decoration-gold-400"
            >
              All Client Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CTAMinimal() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Let's build something{' '}
              <span className="italic text-gold-400">exceptional</span>.
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
              Every great transformation begins with a single conversation. We'd love to hear about your ambitions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-navy-900 text-white rounded-full font-semibold text-lg hover:bg-navy-800 transition-all group"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default function LandingPage3() {
  return (
    <div>
      <Navbar variant="light" />
      <HeroMinimal />
      <PhilosophySection />
      <ServicesMinimal />
      <TestimonialsMinimal />
      <CTAMinimal />
      <Footer />
    </div>
  )
}
