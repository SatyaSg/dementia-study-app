const TABS = [
  { id: 0, label: 'Revision Sheet' },
  { id: 1, label: 'Q&A' },
  { id: 2, label: 'Level 1 MCQ' },
  { id: 3, label: 'Level 2 MCQ' },
  { id: 4, label: 'Clinical Cases' },
  { id: 5, label: 'Golden Rules' },
]

export default function TabNav({ activeTab, onChange, colour }) {
  return (
    <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-3 py-2 text-sm font-medium rounded-t transition-colors ${
            activeTab === tab.id
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
          style={activeTab === tab.id ? { backgroundColor: colour } : {}}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
