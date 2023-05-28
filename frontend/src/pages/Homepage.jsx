import { Blogs, Footer, Navbar } from "../components"

export default function Homepage({ articles }) {


  return (
    <>
      <Navbar />
      <Blogs articles={articles ? articles : ""} />
      <Footer />
    </>
  )
}
