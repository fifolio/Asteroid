import { appwriteConfig, databases } from '../../appwrite/config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function Blogs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await databases.listDocuments(
                    appwriteConfig.database,
                    appwriteConfig.collection_blog,
                );
                setData(response.documents)
            } catch (error) {
                console.error('something went wrong while fetching: ', error);
            }
        }

        fetchData();
    }, []);

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="w-full bg-white py-[50px]">

            {/* container */}
            <div className="max-w-[1240px] mx-auto">
                <h1 className="lg:text-[90px] xxs:text-[50px] text-center font-bold uppercase text-gray-800">Discover 🚀</h1>
                <p className="text-center lg:w-[600px] mx-auto mb-[60px] font-semibold xxs:w-[90%] xxs:text-[15px] text-gray-700">📚✨ Unleash Your Curiosity: Enter our Articles Section, where knowledge comes alive through captivating narratives, insightful perspectives, and engaging storytelling. Join us on this enlightening journey through the written word. 🌍🔍✍️</p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4 text-black">

                    {data.map((article) => (
                        <Link key={article.$id} to={`/article/${article.$id}`} onClick={() => handleLinkClick()}>
                            <div className="bg-white rounded-sm overflow-hidden drop-shadow-md lg:h-[450px] md:h-[450px]">
                                <img src={`${article.coverImg}`} className="h-56 w-full object-cover" />

                                <div className="p-5">
                                    <h3 className="font-bold text-[20px] my-[5px]">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-[17px] my-2">
                                        {article.desc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>

        </div>
    )
}
