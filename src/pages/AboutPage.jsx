import { Link } from 'react-router-dom'
import { ArrowRight, Award, Globe, Heart, Lightbulb, Target, Users } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BRAND, STATS } from '../data/content'

const VALUES = [
  { icon: Target, title: 'Excellence', desc: 'We pursue the highest standards in everything we do, from analysis to delivery.' },
  { icon: Heart, title: 'Integrity', desc: 'We tell our clients what they need to hear, not what they want to hear.' },
  { icon: Users, title: 'Partnership', desc: 'We work alongside your team as true collaborators, not outside advisors.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We continuously evolve our methods to stay ahead of industry trends.' },
  { icon: Globe, title: 'Impact', desc: 'We measure our success by the tangible outcomes we create for our clients.' },
  { icon: Award, title: 'Accountability', desc: 'We take ownership of our recommendations and stand behind our work.' },
]

const MILESTONES = [
  { year: '2014', event: 'Founded in New York by Alexandra Foster with a vision for a different kind of consulting.' },
  { year: '2016', event: 'Expanded to 25 consultants. Launched operational excellence and digital transformation practices.' },
  { year: '2018', event: 'Opened offices in London and Singapore. Surpassed 200 client engagements.' },
  { year: '2020', event: 'Led 40+ organizations through COVID-era digital acceleration and strategic pivots.' },
  { year: '2022', event: 'Launched AI advisory practice. Recognized as a top boutique consulting firm by Forbes.' },
  { year: '2024', event: 'Reached 500+ projects delivered. Expanded team to 60+ consultants across 4 offices.' },
]

export default function AboutPage() {
  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Built on the belief that <span className="text-gold-400">great strategy</span> changes everything.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Ascend Consulting Group was founded with a single purpose: to help ambitious organizations overcome their biggest challenges and unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl font-bold font-[var(--font-heading)] mt-3 mb-5">
                Empowering organizations to achieve extraordinary outcomes.
              </h2>
              <p className="text-slate-400 leading-relaxed">
                We combine analytical rigor with creative problem-solving to deliver strategies that are both brilliant and practical. Our mission is to be the catalyst that helps organizations move from where they are to where they aspire to be.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Our Vision</span>
              <h2 className="text-3xl font-bold font-[var(--font-heading)] mt-3 mb-5">
                The most trusted strategic partner for ambitious leaders.
              </h2>
              <p className="text-slate-400 leading-relaxed">
                We envision a world where every organization, regardless of size, has access to world-class strategic counsel. We are building a consulting firm that leads with empathy, delivers with precision, and creates lasting impact.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {STATS.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-400 font-[var(--font-heading)] mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mt-3 mb-5">
                The Principles That Guide Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, i) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-2xl border border-slate-200 hover:border-gold-200 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{value.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mt-3">
                Key Milestones
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {MILESTONES.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center text-sm font-bold shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < MILESTONES.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 mt-2" />
                    )}
                  </div>
                  <div className="pt-2.5">
                    <span className="text-sm font-bold text-gold-500">{m.year}</span>
                    <p className="text-slate-600 mt-1">{m.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] text-navy-900 mb-5">
              Want to learn more about how we can help?
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              We'd love to hear about your challenges and discuss how Ascend can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
