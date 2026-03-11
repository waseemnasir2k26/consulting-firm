import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage1 from './pages/LandingPage1'
import LandingPage2 from './pages/LandingPage2'
import LandingPage3 from './pages/LandingPage3'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TeamPage from './pages/TeamPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ResourcesPage from './pages/ResourcesPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage1 />} />
        <Route path="/landing-2" element={<LandingPage2 />} />
        <Route path="/landing-3" element={<LandingPage3 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}
