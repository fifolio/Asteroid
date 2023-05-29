import { Blogs, Footer, Navbar } from "../components"

export default function ArticlesPage({articles}) {
    return (
        <>
            <Navbar />
            <Blogs articles={articles}/>
            <Footer />
        </>
    )
}
