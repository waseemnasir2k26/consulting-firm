import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Quote,
  Star,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BRAND, SERVICES, STATS, TESTIMONIALS, CLIENT_LOGOS } from '../data/content'

/* ========================================
   LANDING PAGE 1 — "EXECUTIVE"
   Dark navy hero, gold accents, corporate elegance
   ======================================== */

function HeroExecutive() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 border border-gold-400/20 rounded-full text-gold-400 text-sm font-medium mb-8">
                <Star className="w-3.5 h-3.5 fill-gold-400" />
                Trusted by 500+ Organizations Worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white leading-tight mb-6"
            >
              Strategic Counsel for{' '}
              <span className="text-gold-400">Ambitious</span>{' '}
              Organizations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg"
            >
              {BRAND.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-400 text-navy-900 rounded-xl font-semibold hover:bg-gold-300 transition-all hover:shadow-lg hover:shadow-gold-400/25 text-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-navy-900 flex items-center justify-center text-xs text-white font-medium"
                  >
                    {['SC', 'JR', 'EW', 'MP'][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-slate-400 text-sm mt-1">Rated 4.9/5 by our clients</p>
              </div>
            </motion.div>
          </div>

          {/* Right side — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/20 to-gold-400/5 rounded-3xl blur-xl" />
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map((stat, i) => (
                    <div key={i} className="text-center p-6 rounded-xl bg-white/[0.03]">
                      <div className="text-3xl font-bold text-gold-400 font-[var(--font-heading)] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                    <span>ISO 27001 Certified | SOC 2 Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function ClientsSection() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {CLIENT_LOGOS.map((name, i) => (
            <div
              key={i}
              className="text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-500 transition-colors cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mt-3 mb-5">
              Comprehensive Consulting Solutions
            </h2>
            <p className="text-slate-500 text-lg">
              From strategy to execution, we deliver end-to-end consulting services that create measurable impact for your organization.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-slate-200 hover:border-gold-200 hover:shadow-xl hover:shadow-gold-400/5 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-400 transition-colors">
                    <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function WhyAscend() {
  const reasons = [
    {
      title: 'Data-Driven Insights',
      desc: 'Every recommendation backed by rigorous analysis and proprietary frameworks.',
    },
    {
      title: 'Senior-Led Teams',
      desc: 'Partners directly involved in every engagement, not just the pitch.',
    },
    {
      title: 'Measurable Results',
      desc: 'Clear KPIs and accountability throughout the engagement lifecycle.',
    },
    {
      title: 'Industry Expertise',
      desc: 'Deep sector knowledge across technology, healthcare, manufacturing, and financial services.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] mt-3 mb-6">
              A Different Kind of{' '}
              <span className="text-gold-400">Consulting Firm</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We believe great consulting is about partnership, not presentations. Our approach combines analytical rigor with practical wisdom to deliver strategies that actually work.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 text-navy-900 rounded-xl font-semibold hover:bg-gold-300 transition-all"
            >
              Learn About Our Approach
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-gold-400/30 transition-colors">
                  <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Client Success
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mt-3 mb-5">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold-400 mb-4" />
                <p className="text-slate-600 leading-relaxed flex-1 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center text-white text-sm font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{testimonial.author}</p>
                    <p className="text-slate-400 text-xs">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
            >
              Read More Testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    { number: '01', title: 'Discovery', desc: 'Deep dive into your business, challenges, and objectives.' },
    { number: '02', title: 'Analysis', desc: 'Rigorous research and data-driven assessment of opportunities.' },
    { number: '03', title: 'Strategy', desc: 'Develop a tailored roadmap with clear milestones and KPIs.' },
    { number: '04', title: 'Execution', desc: 'Hands-on support to implement and drive measurable results.' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mt-3 mb-5">
              How We Work
            </h2>
            <p className="text-slate-500 text-lg">
              A proven methodology refined over 12 years and 500+ successful engagements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative text-center">
                <div className="text-6xl font-bold font-[var(--font-heading)] text-gold-400/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
                {i < 3 && (
                  <ChevronRight className="hidden lg:block absolute top-8 -right-4 w-6 h-6 text-slate-300" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function LandingPage1() {
  return (
    <div>
      <Navbar variant="dark" />
      <HeroExecutive />
      <ClientsSection />
      <ServicesPreview />
      <WhyAscend />
      <TestimonialsSection />
      <ProcessSection />
      <Footer />
    </div>
  )
}
