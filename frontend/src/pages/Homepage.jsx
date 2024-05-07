import { Blogs, Footer, Navbar, Hot, Featured, News } from "../components"

export default function Homepage({ articles }) {

  // console.log(articles)

  return (
    <>
      {/* <Navbar /> */}
      <Hot />
      <Featured />
      <News />
      <Blogs articles={articles} />
      {/* <Footer /> */}
    </>
  )
}
