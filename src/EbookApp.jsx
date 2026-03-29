import { useEffect } from 'react'
import EbookHero from './ebook/EbookHero'
import PainSection from './ebook/PainSection'
import PromiseSection from './ebook/PromiseSection'
import TopicsSection from './ebook/TopicsSection'
import BenefitsSection from './ebook/BenefitsSection'
import ContentPreview from './ebook/ContentPreview'
import AudienceSection from './ebook/AudienceSection'
import OfferSection from './ebook/OfferSection'
import EbookFAQ from './ebook/EbookFAQ'
import FinalCTA from './ebook/FinalCTA'
import EbookFooter from './ebook/EbookFooter'
import EbookWhatsApp from './ebook/EbookWhatsApp'
import EbookNotifications from './ebook/EbookNotifications'
import { initMetaPixel, trackPageView } from './lib/metaTracking'

export default function EbookApp() {
  useEffect(() => {
    initMetaPixel()
    if (!window.__ebookPageViewTracked) {
      trackPageView()
      window.__ebookPageViewTracked = true
    }
  }, [])
  return (
    <div className="overflow-x-hidden">
      <main className="overflow-x-hidden">
        <EbookHero />
        <PainSection />
        <PromiseSection />
        <TopicsSection />
        <BenefitsSection />
        <ContentPreview />
        <AudienceSection />
        <OfferSection />
        <EbookFAQ />
        <FinalCTA />
      </main>
      <EbookFooter />
      <EbookWhatsApp />
      <EbookNotifications />
    </div>
  )
}
