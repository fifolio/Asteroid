import { Blogs, Footer, Navbar, Hot } from "../components"

export default function Homepage({ articles }) {

  console.log(articles)

  return (
    <>
      <Navbar />
      <Hot />
      <Blogs articles={articles ? articles : ""} />
      <Footer />
    </>
  )
}
