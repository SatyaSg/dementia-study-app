import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TabNav from '../components/TabNav'
import RevisionSheet from '../components/RevisionSheet'
import QACard from '../components/QACard'
import MCQCard from '../components/MCQCard'
import CaseCard from '../components/CaseCard'
import GoldenRule from '../components/GoldenRule'

// Lecture metadata for nav and colour
const LECTURE_META = [
  { id: 1,  title: 'Introduction & Need for Dementia Care', colour: '#1F3864', prev: null, next: 3  },
  { id: 3,  title: 'Person-Centred Care',                  colour: '#4A7C6F', prev: 1,    next: 4  },
  { id: 4,  title: 'Management of Dementia',               colour: '#C07A1A', prev: 3,    next: 5  },
  { id: 5,  title: 'Communication',                        colour: '#A05475', prev: 4,    next: 6  },
  { id: 6,  title: 'Challenging Behaviours (BPSD)',        colour: '#8B0000', prev: 5,    next: 7  },
  { id: 7,  title: 'Psychosocial Therapy',                 colour: '#5C2D6E', prev: 6,    next: 8  },
  { id: 8,  title: 'Caregiver Support',                    colour: '#3D6B4A', prev: 7,    next: 9  },
  { id: 9,  title: 'Dementia-Friendly Community',          colour: '#1A6B7C', prev: 8,    next: 10 },
  { id: 10, title: 'Palliative and EOL Care',              colour: '#2D3748', prev: 9,    next: null },
]

// Dynamic data imports keyed by lecture id
const DATA_MODULES = {
  1:  () => import('../data/lecture1_2.js').then(m => Object.values(m)[0]),
  3:  () => import('../data/lecture3.js').then(m => Object.values(m)[0]),
  4:  () => import('../data/lecture4.js').then(m => Object.values(m)[0]),
  5:  () => import('../data/lecture5.js').then(m => Object.values(m)[0]),
  6:  () => import('../data/lecture6.js').then(m => Object.values(m)[0]),
  7:  () => import('../data/lecture7.js').then(m => Object.values(m)[0]),
  8:  () => import('../data/lecture8.js').then(m => Object.values(m)[0]),
  9:  () => import('../data/lecture9.js').then(m => Object.values(m)[0]),
  10: () => import('../data/lecture10.js').then(m => Object.values(m)[0]),
}

import { useEffect } from 'react'

export default function LecturePage() {
  const { id } = useParams()
  const numId = parseInt(id, 10)
  const meta = LECTURE_META.find(l => l.id === numId)
  const [tab, setTab] = useState(0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setTab(0)
    const loader = DATA_MODULES[numId]
    if (!loader) { setLoading(false); return }
    loader().then(d => { setData(d); setLoading(false) })
  }, [numId])

  if (!meta) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Lecture not found.</p>
            <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>{meta.title} | Dementia Care (Basic)</title>
        <meta name="description" content={`Study ${meta.title} — revision sheets, Q&A, MCQs, clinical cases, and golden rules for the Dementia Care (Basic) certificate.`} />
      </Helmet>
      <Navbar />

      {/* Lecture header */}
      <header className="text-white py-8 px-4" style={{ backgroundColor: meta.colour }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm opacity-75 mb-1 uppercase tracking-wide font-semibold">
            Lecture {numId === 1 ? '1 & 2' : numId}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold">{meta.title}</h1>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-gray-400">Loading content…</div>
          </div>
        ) : !data ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
            <p className="text-yellow-800 font-semibold mb-2">Content coming soon</p>
            <p className="text-yellow-600 text-sm">
              This lecture's study material is being prepared. Check back soon.
            </p>
          </div>
        ) : (
          <>
            <TabNav activeTab={tab} onChange={setTab} colour={meta.colour} />

            {tab === 0 && <RevisionSheet data={data.revision} />}
            {tab === 1 && <QACard items={data.qa} />}
            {tab === 2 && <MCQCard items={data.level1} level={1} />}
            {tab === 3 && <MCQCard items={data.level2} level={2} />}
            {tab === 4 && <CaseCard items={data.cases} />}
            {tab === 5 && <GoldenRule rules={data.goldenRules} />}
          </>
        )}

        {/* Prev / Next lecture navigation */}
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
          {meta.prev ? (
            <Link
              to={`/lecture/${meta.prev}`}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Previous Lecture
            </Link>
          ) : (
            <Link
              to="/"
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
            >
              ← Home
            </Link>
          )}

          {meta.next ? (
            <Link
              to={`/lecture/${meta.next}`}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
            >
              Next Lecture →
            </Link>
          ) : (
            <Link
              to="/"
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
            >
              Home →
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
