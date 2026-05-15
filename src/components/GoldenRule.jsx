const CARD_COLOURS = [
  'bg-blue-50 border-blue-200',
  'bg-green-50 border-green-200',
  'bg-purple-50 border-purple-200',
  'bg-amber-50 border-amber-200',
  'bg-rose-50 border-rose-200',
  'bg-teal-50 border-teal-200',
  'bg-indigo-50 border-indigo-200',
  'bg-orange-50 border-orange-200',
  'bg-cyan-50 border-cyan-200',
  'bg-pink-50 border-pink-200',
]

export default function GoldenRule({ rules }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-4">10 Golden Rules</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {rules.map((rule, i) => (
          <div
            key={rule.number}
            className={`border rounded-xl p-4 ${CARD_COLOURS[i % CARD_COLOURS.length]}`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl font-bold text-gray-300 leading-none mt-0.5">
                {rule.number}
              </span>
              <div>
                <p className="font-bold text-gray-800 mb-1">{rule.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{rule.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
