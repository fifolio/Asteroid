import { BlogContentPage, Homepage, AboutPage, ArticlesPage, AuthorPage, HotPage, FeaturedPage } from "./pages/index"
import { Routes, Route } from 'react-router-dom';
// import LoadingPage from "./pages/LoadingPage";
import { Footer, Navbar } from "./components";
import ErrorPage from "./pages/ErrorPage";

export default function App() {

  // Fetching Articles
  // let { loading, data, error } = useFetch();
  // if (loading) return (<LoadingPage />, <Countdown />)
  // if (error) return <p>Error!</p>

 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path='/featured/:id' element={<FeaturedPage />} />
        <Route path='/hot' element={<HotPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path='/article/:id' element={<BlogContentPage />} />
      </Routes>
      <Footer />
    </>
  )
} 