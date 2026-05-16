import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LecturePage from './pages/LecturePage'
import PracticeSetsPage from './pages/PracticeSetsPage'
import PracticeSetPage from './pages/PracticeSetPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
        <Route path="/practice" element={<PracticeSetsPage />} />
        <Route path="/practice/:id" element={<PracticeSetPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
