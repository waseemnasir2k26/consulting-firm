import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { SERVICES } from '../data/content'

export default function ServicesPage() {
  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Comprehensive solutions for <span className="text-gold-400">complex challenges</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Our six core practice areas cover every dimension of strategic and operational consulting, giving you a single partner for end-to-end transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              const isReversed = i % 2 !== 0
              return (
                <ScrollReveal key={i}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                    <div className={isReversed ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-gold-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gold-500 font-medium">0{i + 1}</span>
                          <h2 className="text-2xl lg:text-3xl font-bold font-[var(--font-heading)] text-navy-900">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors"
                      >
                        Discuss This Service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                      <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-12 flex items-center justify-center aspect-[4/3]">
                        <Icon className="w-32 h-32 text-gold-400/20" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Engagement Models</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mt-3 mb-5">
                Flexible Ways to Work Together
              </h2>
              <p className="text-slate-500">
                We tailor our engagement model to your needs, timeline, and budget.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Advisory',
                desc: 'Ongoing access to senior partners for strategic guidance and board-level counsel.',
                features: ['Monthly strategy sessions', 'Direct partner access', 'Board presentation support'],
              },
              {
                title: 'Project-Based',
                desc: 'Focused engagement to tackle a specific challenge with defined deliverables and timeline.',
                features: ['Clear scope & milestones', 'Dedicated team', 'Fixed fee or time & materials'],
                featured: true,
              },
              {
                title: 'Transformation Program',
                desc: 'End-to-end support for large-scale organizational transformation over 6-18 months.',
                features: ['Multi-workstream delivery', 'Change management', 'Capability building'],
              },
            ].map((model, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`p-8 rounded-2xl h-full flex flex-col ${
                  model.featured
                    ? 'bg-navy-900 text-white ring-2 ring-gold-400'
                    : 'bg-slate-50 border border-slate-200'
                }`}>
                  <h3 className={`text-xl font-bold mb-3 ${model.featured ? 'text-white' : 'text-navy-900'}`}>
                    {model.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${model.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                    {model.desc}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {model.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${model.featured ? 'text-gold-400' : 'text-gold-500'}`} />
                        <span className={`text-sm ${model.featured ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                      model.featured
                        ? 'bg-gold-400 text-navy-900 hover:bg-gold-300'
                        : 'bg-navy-900 text-white hover:bg-navy-800'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
