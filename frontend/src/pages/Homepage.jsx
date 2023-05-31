import { Blogs, Footer, Navbar, Hot, Featured } from "../components"

export default function Homepage({ articles }) {

  // console.log(articles)

  return (
    <>
      <Navbar />
      <Hot />
      <Featured />
      <Blogs articles={articles ? articles : ""} />
      <Footer />
    </>
  )
}
