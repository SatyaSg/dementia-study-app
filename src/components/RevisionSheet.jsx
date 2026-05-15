import { useState } from "react";

// ── Block renderers ────────────────────────────────────────────────────────────

function KeyDefinitionBlock({ section }) {
  return (
    <div className="border border-teal-400 rounded-lg bg-teal-50 px-4 py-3 mb-4">
      <p className="text-teal-700 font-bold text-xs uppercase tracking-wide flex items-center gap-1 mb-1">
        <span>🔑</span> {section.label}
      </p>
      <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
    </div>
  );
}

function ExamTipBlock({ section }) {
  return (
    <div className="border border-red-300 rounded-lg bg-red-50 px-4 py-3 mb-4">
      <p className="text-red-700 font-bold text-xs uppercase tracking-wide flex items-center gap-1 mb-1">
        <span>⚠️</span> {section.label}
      </p>
      <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
    </div>
  );
}

function StatTableBlock({ section }) {
  return (
    <div className="mb-1">
      <table className="w-full border-collapse text-sm">
        <tbody>
          {section.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-200 px-3 py-2 font-semibold text-blue-700 w-2/5 align-top">
                {row.label}
              </td>
              <td className="border border-gray-200 px-3 py-2 text-gray-700 align-top">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletListBlock({ section }) {
  return (
    <div className="mb-1">
      <ul className="space-y-1">
        {section.items.map((item, i) => (
          <li
            key={i}
            className="text-gray-700 text-sm leading-relaxed flex items-start gap-2"
          >
            <span className="text-gray-400 mt-1 shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonTableBlock({ section }) {
  const colKeys = section.rows.length > 0 ? Object.keys(section.rows[0]) : [];

  return (
    <div className="mb-1 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-blue-700 text-white">
            {section.columns.map((col, i) => (
              <th
                key={i}
                className="border border-blue-600 px-3 py-2 text-left font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {colKeys.map((key, j) => (
                <td
                  key={j}
                  className={`border border-gray-200 px-3 py-2 align-top text-sm
                    ${j === 0 ? "font-semibold text-blue-700" : "text-gray-700"}`}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TwoColumnListBlock({ section }) {
  return (
    <div className="mb-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {section.columns.map((col, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-3 bg-gray-50"
          >
            <p className="font-semibold text-blue-700 text-sm mb-2">
              {col.title}
            </p>
            <ul className="space-y-1">
              {col.items.map((item, j) => (
                <li
                  key={j}
                  className="text-gray-700 text-sm flex items-start gap-2"
                >
                  <span className="text-gray-400 mt-1 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {section.note && (
        <p className="text-xs text-gray-500 italic mt-2">{section.note}</p>
      )}
    </div>
  );
}

// ── Accordion wrapper ──────────────────────────────────────────────────────────

function getHeading(section) {
  // keyDefinition and examTip use label; everything else uses heading
  if (section.type === "keyDefinition" || section.type === "examTip") {
    return section.label;
  }
  return section.heading || "";
}

function SectionContent({ section }) {
  switch (section.type) {
    case "keyDefinition":
      return <KeyDefinitionBlock section={section} />;
    case "examTip":
      return <ExamTipBlock section={section} />;
    case "statTable":
      return <StatTableBlock section={section} />;
    case "bulletList":
      return <BulletListBlock section={section} />;
    case "comparisonTable":
      return <ComparisonTableBlock section={section} />;
    case "twoColumnList":
      return <TwoColumnListBlock section={section} />;
    default:
      // Fallback for old-style sections with heading/content
      return Array.isArray(section.content) ? (
        <ul className="space-y-1">
          {section.content.map((item, i) => (
            <li
              key={i}
              className="text-gray-700 text-sm leading-relaxed flex items-start gap-2"
            >
              <span className="text-gray-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 text-sm leading-relaxed">
          {section.content}
        </p>
      );
  }
}

function AccordionSection({ section }) {
  const [open, setOpen] = useState(false);
  const heading = getHeading(section);

  // keyDefinition and examTip: always render inline, no accordion needed
  if (section.type === "keyDefinition" || section.type === "examTip") {
    return <SectionContent section={section} />;
  }

  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-semibold text-gray-800">{heading}</span>
        <span className="text-gray-500 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-white">
          <SectionContent section={section} />
        </div>
      )}
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────

export default function RevisionSheet({ data }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-4">Revision Sheet</h2>
      {data.sections.map((section, i) => (
        <AccordionSection key={i} section={section} />
      ))}
    </div>
  );
}
