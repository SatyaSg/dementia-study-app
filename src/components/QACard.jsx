import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import LoginPrompt from './LoginPrompt'

const FREE_LIMIT = 10

export default function QACard({ items }) {
  const [current, setCurrent] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const { user, sessionExpired } = useAuth()

  const isLocked = sessionExpired || (!user && current >= FREE_LIMIT)

  function goTo(index) {
    setCurrent(index)
    setRevealed(false)
  }

  function reset() {
    setCurrent(0)
    setRevealed(false)
  }

  const item = items[current]

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Q&amp;A Short Answer</h2>
        <span className="text-sm text-gray-500">
          Question {current + 1} of {items.length}
        </span>
      </div>

      {isLocked ? (
        <LoginPrompt total={items.length} sessionExpired={sessionExpired} />
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
          <p className="font-semibold text-gray-800 mb-4 leading-relaxed">{item.question}</p>

          {revealed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm font-medium text-green-700 mb-1">Answer:</p>
              <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ) : (
            <button
              onClick={() => setRevealed(true)}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reveal Answer
            </button>
          )}
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => goTo(current - 1)}
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
          onClick={() => goTo(current + 1)}
          disabled={current === items.length - 1 || isLocked}
          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg disabled:opacity-40 hover:bg-gray-200 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
