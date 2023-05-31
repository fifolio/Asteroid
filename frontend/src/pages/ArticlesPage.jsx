import { Footer, Navbar } from "../components"
import { Link } from 'react-router-dom'

export default function ArticlesPage({ articles }) {
    return (
        <>
            <Navbar />
            <div className="w-full bg-white py-[50px]">

                {/* container */}
                <div className="max-w-[1240px] mx-auto mt-[80px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4 text-black">

                        {articles.data.map((article) => (
                            <Link key={article.id} to={`/article/${article.id}`}>
                                <div className="bg-white rounded-sm overflow-hidden drop-shadow-md lg:h-[450px] md:h-[450px]">
                                    <img src={`http://localhost:1337${article.attributes.coverImg.data.attributes.url}`} className="h-56 w-full object-cover" />

                                    <div className="p-5">
                                        <h3 className="font-bold text-[20px] my-[5px]">
                                            {article.attributes.title}
                                        </h3>
                                        <p className="text-gray-600 text-[17px] my-2">
                                            {article.attributes.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
