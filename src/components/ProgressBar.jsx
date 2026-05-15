export default function ProgressBar({ score, total, colour }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>Progress</span>
        <span>{score} / {total} ({pct}%)</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: colour }}
        />
      </div>
    </div>
  )
}
