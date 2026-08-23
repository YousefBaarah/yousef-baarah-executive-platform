import React, { useState, useEffect, useCallback } from 'react';
import {
  initAuth,
  googleSignIn,
  logout,
  fetchDriveFiles,
  DriveFileItem,
  getAccessToken,
} from '../lib/driveAuth';
import { useLanguage } from '../context/LanguageContext';
import {
  HardDrive,
  FileText,
  FileSpreadsheet,
  Presentation,
  ExternalLink,
  Search,
  RefreshCw,
  LogOut,
  Sparkles,
  Lock,
  Copy,
  Check,
  Globe,
  Eye,
  AlertCircle,
} from 'lucide-react';

export const ExecutiveDriveExplorer: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [needsAuth, setNeedsAuth] = useState<boolean>(true);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [files, setFiles] = useState<DriveFileItem[]>([]);
  const [loadingFiles, setLoadingFiles] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pdf' | 'doc' | 'slides' | 'sheet'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewFile, setPreviewFile] = useState<DriveFileItem | null>(null);

  const loadFiles = useCallback(
    async (query?: string, filter?: 'all' | 'pdf' | 'doc' | 'slides' | 'sheet') => {
      setLoadingFiles(true);
      setError(null);
      try {
        const fileList = await fetchDriveFiles(query, filter);
        setFiles(fileList);
      } catch (err: any) {
        console.error('Error fetching drive files:', err);
        setError(err.message || 'Unable to retrieve Google Drive files.');
      } finally {
        setLoadingFiles(false);
      }
    },
    []
  );

  useEffect(() => {
    const unsubscribe = initAuth(
      (authUser, authToken) => {
        setUser(authUser);
        setToken(authToken);
        setNeedsAuth(false);
        loadFiles(searchQuery, selectedFilter);
      },
      () => {
        setUser(null);
        setToken(null);
        setNeedsAuth(true);
      }
    );

    // Initial check for cached token
    getAccessToken().then((cached) => {
      if (cached) {
        setToken(cached);
        setNeedsAuth(false);
        loadFiles(searchQuery, selectedFilter);
      }
    });

    return () => unsubscribe();
  }, [loadFiles]);

  const handleSignIn = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        setNeedsAuth(false);
        loadFiles(searchQuery, selectedFilter);
      }
    } catch (err: any) {
      console.error('Sign in failed:', err);
      setError(err.message || 'Google sign-in could not be completed.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
      setToken(null);
      setNeedsAuth(true);
      setFiles([]);
    } catch (err: any) {
      console.error('Sign out error:', err);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!needsAuth) {
      loadFiles(searchQuery, selectedFilter);
    }
  };

  const handleFilterChange = (filter: 'all' | 'pdf' | 'doc' | 'slides' | 'sheet') => {
    setSelectedFilter(filter);
    if (!needsAuth) {
      loadFiles(searchQuery, filter);
    }
  };

  const handleCopyLink = (file: DriveFileItem) => {
    const link = file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`;
    navigator.clipboard.writeText(link).then(() => {
      setCopiedId(file.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const formatFileSize = (bytes?: string) => {
    if (!bytes) return '';
    const num = parseInt(bytes, 10);
    if (isNaN(num)) return '';
    if (num < 1024) return `${num} B`;
    if (num < 1024 * 1024) return `${(num / 1024).toFixed(1)} KB`;
    return `${(num / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.includes('pdf')) {
      return <FileText className="w-5 h-5 text-rose-500" />;
    }
    if (mimeType.includes('presentation')) {
      return <Presentation className="w-5 h-5 text-amber-500" />;
    }
    if (mimeType.includes('spreadsheet')) {
      return <FileSpreadsheet className="w-5 h-5 text-emerald-500" />;
    }
    if (mimeType.includes('document')) {
      return <FileText className="w-5 h-5 text-blue-500" />;
    }
    return <HardDrive className="w-5 h-5 text-[#B8964A]" />;
  };

  return (
    <div className="w-full mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-[#0D2B4E]/15 shadow-xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0D2B4E]/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#0D2B4E] text-[#E6D2A8]">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8964A]">
                {t('Verified Cloud Integration', 'الربط السحابي الموثق')}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Lock className="w-3 h-3" />
                <span>{t('Read-Only Access', 'صلاحية قراءة آمنة')}</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0D2B4E]">
              {t('Google Drive Executive Resource Vault', 'مستودع الموارد والوثائق التنفيذية عبر Google Drive')}
            </h3>
          </div>
        </div>

        {/* User Account / Sign In State */}
        {user && !needsAuth && (
          <div className="flex items-center gap-3 bg-[#F6F3ED] p-2 pr-3.5 rtl:pr-2 rtl:pl-3.5 rounded-xl border border-[#0D2B4E]/10 self-start sm:self-auto">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'Google User'}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border border-[#0D2B4E]/20"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-[#0D2B4E] text-white flex items-center justify-center text-xs font-bold">
                {user.displayName ? user.displayName.charAt(0) : 'U'}
              </div>
            )}
            <div className="text-left rtl:text-right">
              <div className="text-xs font-bold text-[#0D2B4E] leading-tight line-clamp-1">
                {user.displayName || 'Connected Account'}
              </div>
              <div className="text-[10px] text-[#4B5563] line-clamp-1 font-mono">
                {user.email}
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="p-1.5 rounded-lg text-[#4B5563] hover:text-rose-600 hover:bg-rose-50 transition-colors ml-1 rtl:ml-0 rtl:mr-1"
              title={t('Disconnect Drive', 'فصل الحساب')}
              aria-label="Disconnect Google Drive"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* When Needs Auth: Official Google Sign In Presentation */}
      {needsAuth ? (
        <div className="py-8 px-4 text-center max-w-xl mx-auto space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[#B8964A]/10 text-[#B8964A] flex items-center justify-center mx-auto border border-[#B8964A]/30">
            <Sparkles className="w-8 h-8" />
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-serif font-medium text-[#0D2B4E]">
              {t(
                'Connect your Google Drive to browse strategic documents',
                'اربط حسابك على Google Drive لتصفح الوثائق والملفات الاستراتيجية'
              )}
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] mt-2 font-light leading-relaxed">
              {t(
                'Securely authenticate to preview verified case study attachments, board presentations, and corporate publishing assets stored in your Google Drive cloud archive.',
                'سجل الدخول بأمان لاستعراض وثائق الحالات الاستراتيجية، العروض التقديمية لمجالس الإدارة، ومواد النشر المؤسسي المعتمدة المخزنة على سحابة Google Drive.'
              )}
            </p>
          </div>

          {/* Official Google Material Sign-In Button */}
          <div className="flex justify-center pt-2">
            <button
              id="google-drive-signin-btn"
              onClick={handleSignIn}
              disabled={isLoggingIn}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 disabled:opacity-60 shadow-xs ring-1 ring-black/5"
            >
              {isLoggingIn ? (
                <RefreshCw className="w-5 h-5 animate-spin text-[#B8964A]" />
              ) : (
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              )}
              <span>
                {isLoggingIn
                  ? t('Connecting to Google...', 'جارٍ الاتصال بحساب Google...')
                  : t('Sign in with Google Drive', 'تسجيل الدخول باستخدام Google Drive')}
              </span>
            </button>
          </div>

          {error && (
            <div className="flex items-center justify-center gap-2 text-xs text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      ) : (
        /* Authenticated File Explorer */
        <div className="space-y-5">
          {/* Controls: Search + Type Filters */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(
                  'Search Drive for resumes, dossiers, publications...',
                  'ابحث في Drive عن السير الذاتية، التقارير، المنشورات...'
                )}
                className="w-full pl-9 pr-24 rtl:pr-9 rtl:pl-24 py-2 bg-[#F6F3ED] border border-[#0D2B4E]/15 rounded-lg text-xs text-[#0D2B4E] focus:outline-none focus:ring-1 focus:ring-[#B8964A]"
              />
              <button
                type="submit"
                className="absolute right-1.5 rtl:right-auto rtl:left-1.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#0D2B4E] text-white text-[11px] font-semibold rounded hover:bg-[#0A2540] transition-colors"
              >
                {t('Search', 'بحث')}
              </button>
            </form>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  { id: 'all', label: t('All Files', 'كافة الملفات') },
                  { id: 'pdf', label: 'PDFs' },
                  { id: 'doc', label: 'Docs' },
                  { id: 'slides', label: 'Decks' },
                  { id: 'sheet', label: 'Sheets' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedFilter === tab.id
                      ? 'bg-[#B8964A] text-[#060F1A] font-bold shadow-xs'
                      : 'bg-[#F6F3ED] text-[#4B5563] hover:bg-[#EAE4D7]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              <button
                onClick={() => loadFiles(searchQuery, selectedFilter)}
                className="p-1.5 rounded-md bg-[#F6F3ED] text-[#0D2B4E] hover:bg-[#EAE4D7] border border-[#0D2B4E]/10"
                title={t('Refresh Files', 'تحديث القائمة')}
                aria-label="Refresh files list"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingFiles ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Files Grid / State */}
          {loadingFiles ? (
            <div className="py-12 text-center text-xs text-[#4B5563] space-y-2">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#B8964A]" />
              <div>{t('Loading Google Drive files...', 'جارٍ تحميل ملفات Google Drive...')}</div>
            </div>
          ) : error ? (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <div className="flex-1">{error}</div>
              <button
                onClick={() => handleSignIn()}
                className="px-3 py-1 bg-rose-600 text-white rounded font-semibold hover:bg-rose-700"
              >
                {t('Re-authenticate', 'إعادة تسجيل الدخول')}
              </button>
            </div>
          ) : files.length === 0 ? (
            <div className="py-12 text-center bg-[#F6F3ED]/60 rounded-xl border border-dashed border-[#0D2B4E]/15 space-y-2">
              <FileText className="w-8 h-8 mx-auto text-[#B8964A]/60" />
              <div className="text-sm font-medium text-[#0D2B4E]">
                {t('No matching Google Drive files found', 'لم يتم العثور على ملفات متطابقة')}
              </div>
              <p className="text-xs text-[#4B5563] font-light max-w-sm mx-auto">
                {t(
                  'Upload or ensure your executive case studies or PDF briefs are saved to your Drive, or adjust your search filter.',
                  'تأكد من وجود وثائق أو ملفات PDF في حسابك، أو قم بتغيير عبارة البحث.'
                )}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {files.map((file) => {
                const isCopied = copiedId === file.id;
                return (
                  <div
                    key={file.id}
                    className="p-4 rounded-xl bg-[#F6F3ED] border border-[#0D2B4E]/10 hover:border-[#B8964A]/40 transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white shadow-xs shrink-0 mt-0.5">
                        {getFileIcon(file.mimeType)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5
                          className="text-xs font-semibold text-[#0D2B4E] leading-snug line-clamp-2 group-hover:text-[#B8964A] transition-colors"
                          title={file.name}
                        >
                          {file.name}
                        </h5>
                        <div className="text-[10px] text-[#4B5563] mt-1 flex items-center gap-2 font-mono">
                          {file.size && <span>{formatFileSize(file.size)}</span>}
                          {file.modifiedTime && (
                            <span>
                              {new Date(file.modifiedTime).toLocaleDateString(
                                isArabic ? 'ar-JO' : 'en-US',
                                { month: 'short', year: 'numeric' }
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2.5 border-t border-[#0D2B4E]/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleCopyLink(file)}
                        className="inline-flex items-center gap-1 text-[11px] text-[#4B5563] hover:text-[#0D2B4E] transition-colors"
                        title={t('Copy Drive Link', 'نسخ الرابط')}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">
                              {t('Copied', 'تم النسخ')}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{t('Copy Link', 'نسخ')}</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-1.5">
                        {file.webViewLink && (
                          <a
                            href={file.webViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#0D2B4E] text-white rounded text-[11px] font-semibold hover:bg-[#0A2540] transition-colors"
                          >
                            <span>{t('Open in Drive', 'فتح في Drive')}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
