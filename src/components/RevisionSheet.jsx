import { useState } from 'react'

function AccordionSection({ section }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800">{section.heading}</span>
        <span className="text-gray-500 text-lg">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-white">
          {Array.isArray(section.content) ? (
            <ul className="space-y-1">
              {section.content.map((item, i) => (
                <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 text-sm leading-relaxed">{section.content}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default function RevisionSheet({ data }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-4">Revision Sheet</h2>
      {data.sections.map((section, i) => (
        <AccordionSection key={i} section={section} />
      ))}
    </div>
  )
}
