import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../../data/content'

const LANDING_PAGES = [
  { name: 'Executive', path: '/' },
  { name: 'Modern', path: '/landing-2' },
  { name: 'Minimal', path: '/landing-3' },
]

export default function Navbar({ variant = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLandingMenu, setShowLandingMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowLandingMenu(false)
  }, [location])

  const isDark = variant === 'dark' && !scrolled
  const bgClass = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg'
    : isDark
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-md'
  const textClass = scrolled || !isDark ? 'text-navy-900' : 'text-white'
  const logoColor = scrolled || !isDark ? 'text-navy-900' : 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-navy-900 font-bold text-xl font-[var(--font-heading)]">A</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${logoColor} transition-colors`}>
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Landing Pages Dropdown */}
            <div className="relative"
              onMouseEnter={() => setShowLandingMenu(true)}
              onMouseLeave={() => setShowLandingMenu(false)}
            >
              <button className={`px-3 py-2 rounded-lg text-sm font-medium ${textClass} hover:bg-white/10 transition-all flex items-center gap-1`}>
                Landing Pages
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {showLandingMenu && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[180px]">
                  {LANDING_PAGES.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className={`block px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${
                        location.pathname === page.path
                          ? 'text-gold-500 font-semibold'
                          : 'text-slate-700'
                      }`}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.filter(l => l.path !== '/').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? isDark && !scrolled
                      ? 'text-gold-400 bg-white/10'
                      : 'text-gold-600 bg-gold-50'
                    : `${textClass} hover:bg-white/10`
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-gold-400 text-navy-900 rounded-lg text-sm font-semibold hover:bg-gold-300 transition-all hover:shadow-lg hover:shadow-gold-400/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${textClass}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Landing Pages
            </p>
            {LANDING_PAGES.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === page.path
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {page.name}
              </Link>
            ))}
            <div className="border-t border-slate-100 my-2" />
            {NAV_LINKS.filter(l => l.path !== '/').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === link.path
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 bg-gold-400 text-navy-900 rounded-lg text-sm font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
