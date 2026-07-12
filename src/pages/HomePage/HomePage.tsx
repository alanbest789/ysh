import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from './sections/HeroSection'
import ScriptSection from './sections/ScriptSection'
import ProductionSection from './sections/ProductionSection'
import EducationSection from './sections/EducationSection'
import WorksSection from './sections/WorksSection'
import SamplesSection from './sections/SamplesSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0304] text-amber-100">
      <Header />
      <main>
        <HeroSection />
        <ScriptSection />
        <ProductionSection />
        <EducationSection />
        <WorksSection />
        <SamplesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
