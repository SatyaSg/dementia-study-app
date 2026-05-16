import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MCQCard from "../components/MCQCard";

const DATA_MODULES = {
  1: () => import("../data/practiceSet1.js"),
  2: () => import("../data/practiceSet2.js"),
  3: () => import("../data/practiceSet3.js"),
  4: () => import("../data/practiceSet4.js"),
  5: () => import("../data/practiceSet5.js"),
};

const EXPORT_KEYS = {
  1: "practiceSet1",
  2: "practiceSet2",
  3: "practiceSet3",
  4: "practiceSet4",
  5: "practiceSet5",
};

export default function PracticeSetPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData(null);
    const loader = DATA_MODULES[id];
    if (!loader) {
      setLoading(false);
      return;
    }
    loader().then((mod) => {
      setData(mod[EXPORT_KEYS[id]]);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-sm">Loading practice set…</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <p className="text-gray-700 font-semibold">Practice set not found.</p>
        <Link to="/practice" className="text-blue-600 hover:underline text-sm">
          ← Back to Practice Sets
        </Link>
      </div>
    );
  }

  const prevId = Number(id) > 1 ? Number(id) - 1 : null;
  const nextId = Number(id) < 5 ? Number(id) + 1 : null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <header
        className="text-white py-10 px-4 text-center"
        style={{ backgroundColor: data.colour }}
      >
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
          MCQ Practice Sets
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">{data.title}</h1>
        <p className="text-white/80 text-sm">{data.description}</p>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <MCQCard items={data.questions} level={1} />

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
          {prevId ? (
            <Link
              to={`/practice/${prevId}`}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Practice Set {prevId}
            </Link>
          ) : (
            <span />
          )}

          <Link
            to="/practice"
            className="text-sm text-blue-600 hover:underline"
          >
            All Practice Sets
          </Link>

          {nextId ? (
            <Link
              to={`/practice/${nextId}`}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              Practice Set {nextId} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
