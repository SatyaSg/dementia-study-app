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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <header className="bg-gray-900 text-white py-12 px-4 text-center">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
          Certificate in Healthcare
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Dementia Care (Basic)
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Revise lecture content, test yourself on MCQs, work through clinical
          cases, and review golden rules — all in one place.
        </p>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
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
      </main>

      <Footer />
    </div>
  );
}
