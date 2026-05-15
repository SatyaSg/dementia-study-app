export const lecture5 = {
  id: 5,
  title: 'Communication',
  colour: '#A05475',
  revision: { sections: [{ heading: 'Content coming soon', content: ['This lecture\'s study material is being prepared.'] }] },
  qa: [{ question: 'Placeholder question 1', answer: 'Placeholder answer 1' }],
  level1: [{ question: 'Placeholder MCQ', options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'], answer: 'A', explanation: 'Placeholder.' }],
  level2: [{ question: 'Placeholder MCQ', options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'], answer: 'A', explanation: 'Placeholder.' }],
  cases: [{ scenario: 'Placeholder scenario.', options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'], answer: 'A', rationale: 'Placeholder.' }],
  goldenRules: Array.from({ length: 10 }, (_, i) => ({ number: i + 1, title: `Golden Rule ${i + 1}`, detail: 'Content coming soon.' })),
}
