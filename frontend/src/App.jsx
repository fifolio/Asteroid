import { BlogContentPage, Homepage, NewsPage, AboutPage, ArticlesPage, AuthorPage } from "./pages/index"
import { Routes, Route } from 'react-router-dom'
import useFetch from './api/data'
import LoadingPage from "./pages/LoadingPage";

export default function App() {

  let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*');
  if (loading) return (<LoadingPage />)
  // if (error) return <p>Error!</p>

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage articles={data ? data : ""} />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/articles" element={<ArticlesPage articles={data ? data : ""} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path='/article/:id' element={<BlogContentPage articles={data ? data : ""} />} />
      </Routes>
    </>
  )
} 