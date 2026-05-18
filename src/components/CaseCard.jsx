import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import LoginPrompt from './LoginPrompt'

const FREE_LIMIT = 10
const LETTERS = ['A', 'B', 'C', 'D']

function SingleCase({ item }) {
  const [selected, setSelected] = useState(null)

  function choose(letter) {
    if (selected) return
    setSelected(letter)
  }

  function getStyle(letter) {
    if (!selected) {
      return 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
    }
    if (letter === item.answer) return 'bg-green-100 border border-green-500 text-green-800'
    if (letter === selected) return 'bg-red-100 border border-red-400 text-red-800'
    return 'bg-white border border-gray-200 text-gray-400 opacity-60'
  }

  return (
    <div>
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium text-purple-700 mb-1">Clinical Scenario:</p>
        <p className="text-gray-800 leading-relaxed">{item.scenario}</p>
      </div>

      <div className="space-y-2 mb-4">
        {item.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => choose(LETTERS[i])}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${getStyle(LETTERS[i])}`}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected && (
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
          <p className="text-sm font-medium text-teal-700 mb-1">Rationale:</p>
          <p className="text-gray-700 text-sm leading-relaxed">{item.rationale}</p>
        </div>
      )}
    </div>
  )
}

export default function CaseCard({ items }) {
  const [current, setCurrent] = useState(0)
  const [key, setKey] = useState(0)
  const { user, sessionExpired } = useAuth()

  const isLocked = sessionExpired || (!user && current >= FREE_LIMIT)

  function reset() {
    setCurrent(0)
    setKey(k => k + 1)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Clinical Cases</h2>
        <span className="text-sm text-gray-500">
          Case {current + 1} of {items.length}
        </span>
      </div>

      {isLocked ? (
        <LoginPrompt total={items.length} sessionExpired={sessionExpired} />
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
          <SingleCase key={`${key}-${current}`} item={items[current]} />
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setCurrent(c => c - 1)}
          disabled={current === 0}
          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg disabled:opacity-40 hover:bg-gray-200 transition-colors"
        >
          ← Previous
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reset
        </button>

        <button
          onClick={() => setCurrent(c => c + 1)}
          disabled={current === items.length - 1 || isLocked}
          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg disabled:opacity-40 hover:bg-gray-200 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
