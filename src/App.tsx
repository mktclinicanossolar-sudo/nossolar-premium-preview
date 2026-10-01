import { useState } from "react";
import { MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { VideoSection } from "./components/VideoSection";
import { GallerySection } from "./components/GallerySection";
import { FaqSection } from "./components/FaqSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ServiceDetailModal } from "./components/Modals/ServiceDetailModal";
import { CareersModal } from "./components/Modals/CareersModal";
import type { ServiceItem } from "./types";

export default function App() {
  const [careersOpen, setCareersOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header onOpenCareers={() => setCareersOpen(true)} />
      <main id="conteudo">
        <HeroSection />
        <ServicesSection onSelectService={setSelectedService} />
        <AboutSection />
        <VideoSection />
        <GallerySection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection onOpenCareers={() => setCareersOpen(true)} />
      <FloatingWhatsApp />
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
      <CareersModal
        isOpen={careersOpen}
        onClose={() => setCareersOpen(false)}
      />
    </MotionConfig>
  );
}
