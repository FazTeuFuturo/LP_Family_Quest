import { Header } from '../components/landing/Header'
import { Hero } from '../components/landing/Hero'
import { PainSection } from '../components/landing/PainSection'
import { HowItWorks } from '../components/landing/HowItWorks'
import { Features } from '../components/landing/Features'
import { Pricing } from '../components/landing/Pricing'
import { Testimonials } from '../components/landing/Testimonials'
import { FAQ } from '../components/landing/FAQ'
import { FinalCTA } from '../components/landing/FinalCTA'
import { Footer } from '../components/landing/Footer'
import { WhatsAppButton } from '../components/landing/WhatsAppButton'

export function LandingPage() {
  return (
    <main style={{ backgroundColor: '#0D0D0D' }} className="overflow-x-hidden pt-0 m-0 w-full min-h-screen selection:bg-gold selection:text-black">
      <Header />
      <Hero />
      <PainSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
