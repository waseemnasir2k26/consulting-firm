import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Linkedin } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { TEAM } from '../data/content'

export default function TeamPage() {
  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Our Team</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Led by <span className="text-gold-400">exceptional</span> minds.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Our partners bring decades of experience from the world's top consulting firms, corporations, and academic institutions. Every engagement is led by a senior partner, not delegated to juniors.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center text-2xl font-bold text-gold-400 font-[var(--font-heading)] shrink-0">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy-900">{member.name}</h2>
                      <p className="text-gold-500 font-medium text-sm">{member.role}</p>
                      <a href="#" className="inline-flex items-center gap-1 mt-2 text-slate-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-4 h-4" />
                        <span className="text-xs">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    {member.credentials.map((cred, j) => {
                      const icons = [GraduationCap, Briefcase, Award]
                      const Icon = icons[j] || Award
                      return (
                        <div key={j} className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-gold-500 shrink-0" />
                          <span className="text-sm text-slate-500">{cred}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Credentials */}
      <section className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Credentials</span>
              <h2 className="text-3xl lg:text-4xl font-bold font-[var(--font-heading)] mt-3 mb-5">
                Collective Expertise
              </h2>
              <p className="text-slate-400">
                Our team's combined experience spans the world's most respected institutions and organizations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '80+', label: 'Years Combined Experience' },
              { value: '4', label: 'Global Offices' },
              { value: '15+', label: 'Industries Served' },
              { value: '60+', label: 'Consultants Worldwide' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-3xl font-bold text-gold-400 font-[var(--font-heading)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold font-[var(--font-heading)] text-navy-900 mb-4">
                Where Our Team Trained
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Harvard Business School',
              'MIT Sloan',
              'Stanford University',
              'Wharton School',
              'McKinsey & Company',
              'Bain & Company',
              'Goldman Sachs',
              'Google',
            ].map((name, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-medium text-sm hover:border-gold-300 hover:text-navy-900 transition-colors">
                  {name}
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
              Want to work with our team?
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Schedule a consultation to discuss your challenges with one of our senior partners.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
