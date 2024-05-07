import { Blogs, Footer, Navbar, Hot, Featured, News } from "../components"

export default function Homepage() {

  // console.log(articles)

  return (
    <>
      {/* <Navbar /> */}
      <Hot />
      <Featured />
      <News />
      <Blogs />
      {/* <Footer /> */}
    </>
  )
}
