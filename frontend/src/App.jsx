import { BlogContentPage, Homepage } from "./pages/index"
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/article/:id' element={<BlogContentPage />} />
      </Routes>
    </>
  )
} 