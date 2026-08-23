import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StrategicRelevance } from './components/StrategicRelevance';
import { StrategicMandateMatcher } from './components/StrategicMandateMatcher';
import { SelectedProof } from './components/SelectedProof';
import { SelectedWork } from './components/SelectedWork';
import { EditorialBylinesAndCommercialEngine } from './components/EditorialBylinesAndCommercialEngine';
import { MediaReelShowcase } from './components/MediaReelShowcase';
import { EndorsementsSection } from './components/EndorsementsSection';
import { RegionalPerspective } from './components/RegionalPerspective';
import { GovernancePlaybook } from './components/GovernancePlaybook';
import { ExecutivePerspective } from './components/ExecutivePerspective';
import { DocumentsViewer } from './components/DocumentsViewer';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { BoardBriefingGenerator } from './components/BoardBriefingGenerator';
import { CASE_STUDIES } from './data/profileData';
import { CaseStudy } from './types';

export default function App() {
  const [modalCaseStudy, setModalCaseStudy] = useState<CaseStudy | null>(null);
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState<boolean>(false);
  const [briefingMandateId, setBriefingMandateId] = useState<string | undefined>(undefined);

  const scrollToDocuments = () => {
    const el = document.getElementById('documents');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOnePage = () => {
    scrollToDocuments();
  };

  const handleOpenFullResume = () => {
    scrollToDocuments();
  };

  const handleOpenBriefingGenerator = (mandateId?: string) => {
    if (mandateId) {
      setBriefingMandateId(mandateId);
    }
    setIsBriefingModalOpen(true);
  };

  const handleOpenCaseStudyById = (caseId: string) => {
    const found = CASE_STUDIES.find((c) => c.id === caseId);
    if (found) {
      setModalCaseStudy(found);
    } else {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#F6F3ED] text-[#0D2B4E]">
        <Navbar onOpenDocuments={scrollToDocuments} />

        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          <Hero
            onOpenDocuments={scrollToDocuments}
            onOpenOnePage={handleOpenOnePage}
            onOpenFullResume={handleOpenFullResume}
            onOpenBriefingGenerator={() => handleOpenBriefingGenerator()}
          />

          <StrategicRelevance />

          <StrategicMandateMatcher
            onOpenCaseStudy={handleOpenCaseStudyById}
            onOpenBriefingGenerator={handleOpenBriefingGenerator}
          />

          <SelectedProof />

          <SelectedWork />

          <EditorialBylinesAndCommercialEngine />

          <MediaReelShowcase />

          <EndorsementsSection />

          <RegionalPerspective />

          <GovernancePlaybook />

          <ExecutivePerspective />

          <DocumentsViewer />

          <ContactSection />
        </main>

        <Footer />

        {/* Global Case Study Modal */}
        <CaseStudyModal
          caseStudy={modalCaseStudy}
          onClose={() => setModalCaseStudy(null)}
        />

        {/* Board Briefing Dossier Generator Modal */}
        <BoardBriefingGenerator
          isOpen={isBriefingModalOpen}
          onClose={() => setIsBriefingModalOpen(false)}
          initialMandateId={briefingMandateId}
        />
      </div>
    </LanguageProvider>
  );
}
