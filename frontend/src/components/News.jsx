import { appwriteConfig, databases } from "../../appwrite/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function News() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await databases.listDocuments(
                    appwriteConfig.database,
                    appwriteConfig.collection_new,
                );
                setData(response.documents)
            } catch (error) {
                console.error('something went wrong while fetching: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            {/* container */}
            <div className="max-w-[1240px] mx-auto">
                <h1 className="lg:text-[90px] xxs:text-[50px] text-left font-bold uppercase text-red-800" style={{ marginLeft: '15px' }}>Breaking News,</h1>
                <p className="text-left lg:w-[500px] mb-[60px] font-semibold xxs:w-[90%] xxs:text-[15px] text-gray-700" style={{ marginLeft: '19px' }}>Our News Section delivers the latest updates, breaking stories, and captivating headlines. Stay connected and explore the world with us. 🌐</p>



                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1 px-4 pb-10 text-black">

                    {data.map((theNews, index) => (
                        <Link key={index} to={theNews.url} target="_blank">
                            <div className="bg-white overflow-hidden lg:h-[400px] md:h-[450px] rounded-sm shadow-md">
                                <p style={{
                                    position: 'absolute',
                                    margin: '20px 0 0 25px',
                                    backgroundColor: '#f1f2f6',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    color: 'black',
                                    fontWeight: 500,
                                    border: '0.5px dotted #ced6e0',
                                    fontSize: '13px',
                                    zIndex: 1,
                                }}>
                                    {theNews.sourceName}
                                </p>
                                <img src={`${theNews.coverImg}`} className="w-full h-full object-cover" style={{
                                    '-webkit-mask-image': 'linear-gradient(to top, transparent 15%, black 70%)',
                                    'mask-image': 'linear-gradient(to top, transparent 15%, black 70%)',
                                }} />
                                <div>
                                    <p style={{
                                        position: 'absolute',
                                        margin: '-30px 0px 0px 5px',
                                        /* background-color: rgb(241, 242, 246); */
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        color: 'black',
                                        fontWeight: 500,
                                        fontSize: '15px',
                                        textTransform: 'uppercase'
                                    }}>
                                        {theNews.category}
                                    </p>
                                    <h3 className="font-bold text-[17px] mt-[-80px] m-4">
                                        {theNews.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}


                </div>
            </div>
        </div>
    )
}