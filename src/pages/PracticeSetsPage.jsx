import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PRACTICE_SETS = [
  {
    id: 1,
    title: "Practice Set 1",
    description: "Mixed questions covering all lecture topics",
    colour: "#B45309",
    questions: 50,
  },
  {
    id: 2,
    title: "Practice Set 2",
    description: "Mixed questions covering all lecture topics",
    colour: "#065F46",
    questions: 50,
  },
  {
    id: 3,
    title: "Practice Set 3",
    description: "Mixed questions covering all lecture topics",
    colour: "#1E3A5F",
    questions: 50,
  },
  {
    id: 4,
    title: "Practice Set 4",
    description: "Mixed questions covering all lecture topics",
    colour: "#6B21A8",
    questions: 50,
  },
  {
    id: 5,
    title: "Practice Set 5",
    description: "Mixed questions covering all lecture topics",
    colour: "#9B1C1C",
    questions: 50,
  },
];

export default function PracticeSetsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <header className="bg-gray-900 text-white py-12 px-4 text-center">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
          Dementia Care (Basic)
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          MCQ Practice Sets
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Test your knowledge with these timed practice sets. Each set contains
          mixed questions drawn from all lecture topics.
        </p>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Choose a Practice Set
          </h2>
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRACTICE_SETS.map((set) => (
            <div
              key={set.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-2" style={{ backgroundColor: set.colour }} />
              <div className="p-5 flex flex-col flex-1">
                <span
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: set.colour }}
                >
                  {set.questions} Questions
                </span>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-1 flex-1">
                  {set.title}
                </h3>
                <p className="text-gray-500 text-xs mb-4">{set.description}</p>
                <Link
                  to={`/practice/${set.id}`}
                  className="inline-block text-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: set.colour }}
                >
                  Start Practice
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
