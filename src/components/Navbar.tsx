import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Mail, Globe } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenDocuments: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocuments }) => {
  const { language, setLanguage, isArabic, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('Relevance', 'المواءمة الاستراتيجية'), href: '#alignment' },
    { label: t('Mandate Matcher', 'محرك المواءمة'), href: '#alignment-matcher' },
    { label: t('Selected Work', 'الأعمال والمسيرة'), href: '#work' },
    { label: t('Editorial Vault', 'الأرشيف والمقالات'), href: '#editorial-vault' },
    { label: t('Media Reel', 'الإنتاج الإعلامي'), href: '#media-reel' },
    { label: t('Endorsements', 'التوصيات والشهادات'), href: '#endorsements' },
    { label: t('Regional Footprint', 'الأثر الإقليمي'), href: '#regional' },
    { label: t('Playbook', 'منهجية الحوكمة'), href: '#playbook' },
    { label: t('Documents', 'الوثائق والسيرة'), href: '#documents' },
    { label: t('Contact', 'التواصل'), href: '#contact' },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0D2B4E] focus:text-white focus:shadow-lg focus:outline-none"
      >
        {t('Skip to main content', 'الانتقال إلى المحتوى الرئيسي')}
      </a>

      <header
        id="top-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6F3ED]/95 backdrop-blur-md shadow-sm border-b border-[#0D2B4E]/10 py-3'
            : 'bg-[#F6F3ED]/80 backdrop-blur-sm border-b border-[#0D2B4E]/5 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#top"
            id="nav-brandmark"
            className="flex items-center gap-1.5 font-bold tracking-widest text-sm text-[#0D2B4E] uppercase hover:opacity-80 transition-opacity"
            aria-label="Yousef G. Baarah home"
          >
            <span className="tracking-[0.2em] font-sans">YGB</span>
            <span className="text-[#B8964A] text-base leading-none">•</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5 lg:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider text-[#4B5563] hover:text-[#0D2B4E] hover:underline decoration-[#B8964A] decoration-2 underline-offset-8 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Toggle Button */}
            <button
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0D2B4E]/20 text-[#0D2B4E] bg-white text-xs font-bold uppercase tracking-wider hover:bg-[#EAE4D7] transition-all shadow-xs"
              title={isArabic ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#B8964A]" />
              <span>{isArabic ? 'English' : 'العربية'}</span>
            </button>

            <button
              onClick={onOpenDocuments}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-[#0D2B4E]/20 text-[#0D2B4E] text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#0D2B4E]/5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#B8964A]" />
              <span>{t('Resume PDF', 'السيرة PDF')}</span>
            </button>
            <a
              href={`mailto:${PROFILE_INFO.email}?subject=Strategic%20Opportunity%20Alignment`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0D2B4E] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#0A2540] transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-[#B8964A]" />
              <span>{t('Connect', 'تواصل')}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded border border-[#0D2B4E]/20 text-xs font-bold text-[#0D2B4E] bg-white"
            >
              <Globe className="w-3 h-3 text-[#B8964A]" />
              <span>{isArabic ? 'EN' : 'عربي'}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-[#0D2B4E] rounded-md border border-[#0D2B4E]/20 hover:bg-[#0D2B4E]/5 focus:outline-none focus:ring-2 focus:ring-[#B8964A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="md:hidden bg-[#F6F3ED] border-b border-[#0D2B4E]/10 px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in slide-in-from-top duration-200"
          >
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-widest text-[#0D2B4E] font-medium hover:bg-[#0D2B4E]/5 rounded border-l-2 rtl:border-r-2 rtl:border-l-0 border-transparent hover:border-[#B8964A] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#0D2B4E]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDocuments();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-[#0D2B4E] text-[#0D2B4E] text-xs uppercase tracking-widest font-semibold rounded hover:bg-[#0D2B4E]/5"
              >
                <FileText className="w-4 h-4 text-[#B8964A]" />
                <span>{t('Open Executive Profile & Resume', 'عرض الملف التنفيذي والسيرة الذاتية')}</span>
              </button>
              <a
                href={`mailto:${PROFILE_INFO.email}?subject=Strategic%20Opportunity%20Alignment`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0D2B4E] text-white text-xs uppercase tracking-widest font-semibold rounded hover:bg-[#0A2540]"
              >
                <Mail className="w-4 h-4 text-[#B8964A]" />
                <span>{t('Email Yousef G. Baarah', 'مراسلة يوسف بعارة')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

