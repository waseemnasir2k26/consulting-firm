import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BLOG_POSTS } from '../data/content'

const CATEGORIES = ['All', 'Strategy', 'Digital', 'Operations', 'Leadership', 'Growth']

export default function BlogPage() {
  return (
    <div>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-navy-900" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Blog</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-[var(--font-heading)] text-navy-900 mb-6">
              Perspectives & <span className="text-gold-400">insights</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Thought leadership from our team on strategy, operations, digital transformation, and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? 'bg-navy-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-gold-400/20 text-6xl font-bold font-[var(--font-heading)]">01</span>
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-gold-50 text-gold-600 rounded-full text-xs font-semibold mb-4">
                  {BLOG_POSTS[0].category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold font-[var(--font-heading)] text-navy-900 mb-4">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                  <span>{BLOG_POSTS[0].date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {BLOG_POSTS[0].readTime}
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-600 transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow h-full flex flex-col group">
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 aspect-[16/9] flex items-center justify-center">
                    <span className="text-gold-400/20 text-5xl font-bold font-[var(--font-heading)]">
                      0{i + 2}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 bg-gold-50 text-gold-600 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <button className="text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors flex items-center gap-1">
                        Read
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
