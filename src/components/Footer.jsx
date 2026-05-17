export default function Footer() {
  return (
    <footer className="bg-[#111827] mt-auto w-full overflow-hidden">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 py-8 text-center">
        {/* Brand row */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-md bg-[#134e4a] flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-[#5eead4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5" />
              <path d="M12 2.5C8.5 2.5 6 5 6 8c0 1.5.5 2.8 1.3 3.8A4 4 0 0 0 6 15a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4 4 4 0 0 0-1.3-3.2C17.5 10.8 18 9.5 18 8c0-3-2.5-5.5-6-5.5z" />
              <line x1="12" y1="12" x2="12" y2="19" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
          <span className="text-[#f9fafb] text-sm font-semibold">
            Dementia Care
          </span>
        </div>

        {/* Description */}
        <p className="text-[#6b7280] text-xs leading-relaxed mb-4">
          Certificate in Healthcare — Dementia Care (Basic). A study tool for
          exam preparation only.
        </p>

        {/* Module chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          <span className="text-[10px] font-medium bg-[#134e4a] text-[#5eead4] border border-[#065f46] rounded-full px-2.5 py-0.5">
            10 Lectures
          </span>
          <span className="text-[10px] font-medium bg-[#451a03] text-[#fdba74] border border-[#92400e] rounded-full px-2.5 py-0.5">
            5 Practice Sets
          </span>
          <span className="text-[10px] font-medium bg-[#0c2340] text-[#93c5fd] border border-[#1e3a5f] rounded-full px-2.5 py-0.5">
            250 MCQs
          </span>
        </div>

        {/* Contact */}
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-2">
          Feedback &amp; Suggestions
        </p>
        <a
          href="mailto:dementia.study.app@gmail.com"
          className="inline-flex items-center gap-2 bg-[#052e16] text-[#34d399] border border-[#065f46] rounded-lg px-4 py-2 text-xs font-medium transition-colors hover:bg-[#065f46]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          dementia.study.app@gmail.com
        </a>

        {/* Divider */}
        <div className="border-t border-[#1f2937] mt-6 mb-4" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-[11px] text-[#4b5563]">
          <span>© 2025 Dementia Care Study App</span>
          <span className="hidden sm:inline text-[#374151]">·</span>
          <span>Not for clinical use</span>
        </div>
      </div>
    </footer>
  );
}
