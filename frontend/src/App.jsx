import { BlogContentPage, Homepage } from "./pages/index"
import { Routes, Route } from 'react-router-dom'
import useFetch from './api/data'

export default function App() {

  let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage articles={data ? data : ""} />} />
        <Route path='/article/:id' element={<BlogContentPage />} />
      </Routes>
    </>
  )
} 