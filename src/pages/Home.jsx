import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LECTURES = [
  {
    id: 1,
    title: "Introduction & Need for Dementia Care",
    colour: "#1F3864",
    subtitle: "Lectures 1 & 2",
  },
  {
    id: 3,
    title: "Person-Centred Care",
    colour: "#4A7C6F",
    subtitle: "Lecture 3",
  },
  {
    id: 4,
    title: "Management of Dementia",
    colour: "#C07A1A",
    subtitle: "Lecture 4",
  },
  { id: 5, title: "Communication", colour: "#A05475", subtitle: "Lecture 5" },
  {
    id: 6,
    title: "Challenging Behaviours (BPSD)",
    colour: "#8B0000",
    subtitle: "Lecture 6",
  },
  {
    id: 7,
    title: "Psychosocial Therapy",
    colour: "#5C2D6E",
    subtitle: "Lecture 7",
  },
  {
    id: 8,
    title: "Caregiver Support",
    colour: "#3D6B4A",
    subtitle: "Lecture 8",
  },
  {
    id: 9,
    title: "Dementia-Friendly Community",
    colour: "#1A6B7C",
    subtitle: "Lecture 9",
  },
  {
    id: 10,
    title: "Palliative and EOL Care",
    colour: "#2D3748",
    subtitle: "Lecture 10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <header className="bg-[#0f172a] text-white py-10 sm:py-14 px-5 sm:px-6 text-center border-b border-[#1e293b]">
        {/* Colourful 10-segment bar — one per lecture */}
        <div className="flex justify-center gap-1 mb-6 flex-wrap">
          {[
            "#1F3864",
            "#4A7C6F",
            "#C07A1A",
            "#A05475",
            "#8B0000",
            "#5C2D6E",
            "#3D6B4A",
            "#1A6B7C",
            "#2D3748",
            "#92400E",
          ].map((colour, i) => (
            <div
              key={i}
              className="h-1 w-6 sm:w-8 rounded-full"
              style={{ backgroundColor: colour }}
            />
          ))}
        </div>

        <p className="text-[#0d9488] text-xs font-semibold uppercase tracking-widest mb-3">
          Certificate in Healthcare
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-3 leading-tight">
          Dementia Care <span className="text-[#5eead4]">(Basic)</span>
        </h1>
        <p className="text-[#94a3b8] max-w-lg mx-auto text-sm leading-relaxed mb-6">
          Revise lecture content, test yourself on MCQs, work through clinical
          cases, and review golden rules — all in one place.
        </p>

        {/* Info chips */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#134e4a] text-[#5eead4] border border-[#0f766e] rounded-full px-3 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            10 Lectures
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#451a03] text-[#fdba74] border border-[#92400e] rounded-full px-3 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            5 Practice Sets
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#0c2340] text-[#93c5fd] border border-[#1e3a5f] rounded-full px-3 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            250 MCQs
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Select a Lecture to Study
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LECTURES.map((lec) => (
            <div
              key={lec.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-2" style={{ backgroundColor: lec.colour }} />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {lec.subtitle}
                </span>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-4 flex-1">
                  {lec.title}
                </h3>
                <Link
                  to={`/lecture/${lec.id}`}
                  className="inline-block text-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: lec.colour }}
                >
                  Study Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* MCQ Practice Sets */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Test Your Knowledge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-2" style={{ backgroundColor: "#92400E" }} />
              <div className="p-5 flex flex-col flex-1">
                <span
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#92400E" }}
                >
                  5 Practice Sets · 50 Questions Each
                </span>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-2 flex-1">
                  MCQ Practice Sets
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  Mixed questions from all lectures to test your overall
                  understanding.
                </p>
                <Link
                  to="/practice"
                  className="inline-block text-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#92400E" }}
                >
                  Start Practising
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
