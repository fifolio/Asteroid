import { Footer, Navbar, BlogContent } from "../components"

export default function BlogContentPage({ articles }) {


    return (
        <>
            <Navbar />
            <BlogContent articles={articles} />
            <Footer />
        </>
    )
}
