import { useEffect, useState } from 'react';
import { appwriteConfig, databases } from '../../appwrite/config';
import { Link } from "react-router-dom";

export default function Featured() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await databases.listDocuments(
                    appwriteConfig.database,
                    appwriteConfig.collection_feature,
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
                <h1 className="lg:text-[90px] xxs:text-[50px] text-center font-bold uppercase text-gray-800">Featured</h1>
                <p className="text-center lg:w-[500px] mx-auto mb-[60px] font-semibold xxs:w-[90%] xxs:text-[15px] text-gray-700">✨🔍 Discover captivating topics, insightful analysis, and untold stories. Dive into a world of inspiration, information, and entertainment. Explore the intriguing depths of our curated collection. ✨📚🔎</p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 pb-10 text-black">

                    {data.map((feature, index) => (
                        <Link key={index} to={`/featured/${feature.$id}`} onClick={() => handleLinkClick()}>
                            <div className="bg-white rounded-sm overflow-hidden lg:h-[400px] md:h-[450px] shadow-md shadow-gray-200 hover:shadow-xl" style={{ borderBottomRightRadius: '50px', borderTopLeftRadius: '50px' }}>
                                <img src={`${feature.coverImg}`} className="h-56 w-full object-cover" />
                                <div className="p-3">
                                    <h3 className="font-bold text-[20px] my-[5px]">
                                        {feature.title}

                                    </h3>
                                    <p className="text-gray-600 text-[17px] my-2">
                                        {feature.desc}...
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