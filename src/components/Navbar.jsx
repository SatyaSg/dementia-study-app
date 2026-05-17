import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0f172a] sticky top-0 z-50 w-full overflow-hidden">
      {/* Announcement bar */}
      <div className="bg-[#0d9488] px-4 py-1.5 flex items-center justify-center gap-2 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 h-3.5 text-[#ccfbf1] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p className="text-[#ccfbf1] text-[11px] sm:text-xs font-medium text-center leading-snug">
          Study tool for exam preparation only &nbsp;·&nbsp; Not for clinical
          use
        </p>
      </div>

      {/* Main navbar row */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-14 w-full">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg bg-[#134e4a] border border-[#0f766e] flex items-center justify-center shrink-0">
            {/* Brain icon (inline SVG — no external dependency) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#5eead4]"
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
          <div>
            <p className="text-[#f1f5f9] text-sm font-semibold leading-none">
              Dementia Care
            </p>
            <p className="text-[#475569] text-[11px] leading-none mt-0.5">
              Certificate in Healthcare
            </p>
          </div>
        </Link>

        {/* Right badge */}
        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#134e4a] text-[#5eead4] border border-[#0f766e] rounded-md px-2.5 py-1 hidden sm:inline-block">
          Healthcare — Certificate
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#134e4a] text-[#5eead4] border border-[#0f766e] rounded-md px-2.5 py-1 sm:hidden">
          Basic
        </span>
      </div>
    </nav>
  );
}
