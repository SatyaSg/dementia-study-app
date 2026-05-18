import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import LoginPrompt from './LoginPrompt'

const FREE_LIMIT = 10

const LETTERS = ['A', 'B', 'C', 'D']

function SingleMCQ({ item, onAnswer, answered }) {
  const [selected, setSelected] = useState(null)

  function choose(letter) {
    if (selected) return
    setSelected(letter)
    if (letter === item.answer) {
      onAnswer(true)
    } else {
      onAnswer(false)
    }
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
      <p className="font-semibold text-gray-800 mb-4 leading-relaxed">{item.question}</p>
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
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-700 mb-1">Explanation:</p>
          <p className="text-gray-700 text-sm leading-relaxed">{item.explanation}</p>
        </div>
      )}
    </div>
  )
}

export default function MCQCard({ items, level }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState({})
  const [key, setKey] = useState(0)
  const { user, sessionExpired } = useAuth()

  const isLocked = sessionExpired || (!user && current >= FREE_LIMIT)

  function handleAnswer(isCorrect, index) {
    if (answers[index] !== undefined) return
    setAnswers(prev => ({ ...prev, [index]: isCorrect }))
    if (isCorrect) setScore(s => s + 1)
  }

  function reset() {
    setCurrent(0)
    setScore(0)
    setAnswers({})
    setKey(k => k + 1)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-800">
            {level === 2 ? 'Level 2 MCQ' : 'Level 1 MCQ'}
          </h2>
          {level === 2 && (
            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-bold rounded uppercase tracking-wide">
              Hard
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            Q {current + 1} / {items.length}
          </span>
          <span className="text-sm font-semibold text-green-700">
            Score: {score} / {items.length}
          </span>
        </div>
      </div>

      {isLocked ? (
        <LoginPrompt total={items.length} sessionExpired={sessionExpired} />
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-4">
          <SingleMCQ
            key={`${key}-${current}`}
            item={items[current]}
            onAnswer={(correct) => handleAnswer(correct, current)}
            answered={answers[current] !== undefined}
          />
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
