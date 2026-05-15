import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LecturePage from './pages/LecturePage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
