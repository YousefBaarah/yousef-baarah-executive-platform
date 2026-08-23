import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<string>('Executive Role / Leadership Mandate');
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inquiryTypes = [
    'Executive Role / Leadership Mandate',
    'Board Advisory / Communications Counsel',
    'Brand & Digital Transformation',
    'Sovereign / Public-Private Partnership',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Strategic Alignment: ${inquiryType} - ${senderOrg || senderName || 'Executive Inquiry'}`);
    const body = encodeURIComponent(
      `Hello Yousef,\n\nI am reaching out regarding a ${inquiryType}.\n\nFrom: ${senderName || '[Name]'}\nOrganization: ${senderOrg || '[Organization]'}\n\nNote / Context:\n${message || 'We would like to discuss strategic communications and leadership alignment.'}\n\nBest regards,\n${senderName || ''}`
    );
    window.location.href = `mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#EFE9DE] via-[#F6F3ED] to-[#EAE3D5] text-[#0D2B4E] relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Decorative Gold Rings */}
      <div
        className="absolute -right-24 -top-24 w-96 h-96 border border-[#B8964A]/25 rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 w-80 h-80 border border-[#0D2B4E]/5 rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Alignment Thesis */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B8964A] font-bold flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#B8964A]" />
                <span>07 / Where Strategy Aligns</span>
              </div>
              <h2
                id="contact-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium leading-[1.05] text-[#0D2B4E]"
              >
                Open to meaningful strategic alignment.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-light">
              Available for executive leadership roles, institutional advisory, and strategic opportunities where corporate communications, brand authority, reputation and growth intersect across Jordan, Saudi Arabia, the UAE, and the wider GCC.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white border border-[#0D2B4E]/10 flex items-center justify-between shadow-sm hover:border-[#B8964A]/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F6F3ED] text-[#B8964A]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#4B5563] font-semibold">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${PROFILE_INFO.email}?subject=Strategic%20Alignment`}
                      className="text-sm font-medium text-[#0D2B4E] hover:text-[#B8964A] transition-colors"
                    >
                      {PROFILE_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-[#4B5563] hover:text-[#0D2B4E] rounded hover:bg-[#F6F3ED]"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-white border border-[#0D2B4E]/10 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#F6F3ED] text-[#B8964A]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#4B5563] font-semibold">
                      Telephone &amp; WhatsApp
                    </div>
                    <a
                      href={`tel:${PROFILE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-[#0D2B4E] hover:text-[#B8964A] transition-colors"
                    >
                      {PROFILE_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn & Location Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white border border-[#0D2B4E]/10 flex items-center justify-between shadow-sm hover:border-[#B8964A] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-[#0D2B4E]">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B8964A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-xl bg-white border border-[#0D2B4E]/10 flex items-center gap-2.5 shadow-sm">
                  <MapPin className="w-4 h-4 text-[#B8964A] shrink-0" />
                  <span className="text-xs text-[#0D2B4E] font-medium truncate">
                    Amman · MENA / GCC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#0D2B4E]/15 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0D2B4E] mb-2">
                Initiate Strategic Dialogue
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] mb-6 font-light">
                Select your focus area and prepare a direct conversation brief.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                {/* Inquiry Type Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0D2B4E] mb-2">
                    Scope of Strategic Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`text-left p-3 rounded-lg border text-xs font-medium transition-all ${
                          inquiryType === type
                            ? 'border-[#B8964A] bg-[#B8964A]/10 text-[#0D2B4E] font-semibold'
                            : 'border-[#0D2B4E]/10 bg-[#F6F3ED] text-[#4B5563] hover:border-[#0D2B4E]/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0D2B4E] mb-1">
                      Your Name / Title
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Managing Partner / CEO"
                      className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded text-sm text-[#0D2B4E] focus:outline-none focus:ring-2 focus:ring-[#B8964A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0D2B4E] mb-1">
                      Organisation / Enterprise
                    </label>
                    <input
                      type="text"
                      value={senderOrg}
                      onChange={(e) => setSenderOrg(e.target.value)}
                      placeholder="e.g. Sovereign Fund / Media Group"
                      className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded text-sm text-[#0D2B4E] focus:outline-none focus:ring-2 focus:ring-[#B8964A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0D2B4E] mb-1">
                    Context or Strategic Objective
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide a brief overview of the executive mandate, communications challenge, or partnership vision..."
                    className="w-full px-3.5 py-2.5 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded text-sm text-[#0D2B4E] focus:outline-none focus:ring-2 focus:ring-[#B8964A]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-[#4B5563]">
                    Dispatches directly to <span className="font-medium text-[#0D2B4E]">{PROFILE_INFO.email}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D2B4E] text-white hover:bg-[#0A2540] font-bold text-xs uppercase tracking-widest rounded transition-all shadow-md hover:shadow-lg"
                  >
                    <span>Dispatch Message</span>
                    <Send className="w-3.5 h-3.5 text-[#B8964A]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
