import { Link } from "react-router-dom";
import useFetch from '../api/data'
import LoadingPage from '../pages/LoadingPage'

export default function Featured() {

    // Fetching Hot Article
    let { loading, data, error } = useFetch(`${import.meta.env.VITE_SERVER_API_URL}/api/features?populate=*`);
    if (loading) return (<LoadingPage />)

    // console.log('Features', data)

    let features = [];
    if (data) {
        let arr = data.data;
        features = arr;
        console.log('Features', features)

    } else {
        features = []
    }

    // let features = data.data[0].attributes;

    return (
        <div className="w-full bg-white py-[50px]">
            {/* container */}
            <div className="max-w-[1240px] mx-auto">
                <h1 className="lg:text-[90px] xxs:text-[50px] text-center font-bold uppercase text-gray-800">Featured</h1>
                <p className="text-center lg:w-[500px] mx-auto mb-[60px] font-semibold xxs:w-[90%] xxs:text-[15px] text-gray-700">✨🔍 Discover captivating topics, insightful analysis, and untold stories. Dive into a world of inspiration, information, and entertainment. Explore the intriguing depths of our curated collection. ✨📚🔎</p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 pb-10 text-black">

                    {features.map((feature, index) => (
                        <Link key={index} to={`/featured/${feature.id}`}>
                            <div className="bg-white rounded-sm overflow-hidden lg:h-[400px] md:h-[450px] shadow-md shadow-gray-200 hover:shadow-xl" style={{ borderBottomRightRadius: '50px', borderTopLeftRadius: '50px' }}>
                                <img src={`${import.meta.env.VITE_SERVER_API_URL}${feature.attributes.coverImg.data.attributes.url}`} className="h-56 w-full object-cover" />
                                <div className="p-3">
                                    <h3 className="font-bold text-[20px] my-[5px]">
                                        {feature.attributes.title}

                                    </h3>
                                    <p className="text-gray-600 text-[17px] my-2">
                                        {feature.attributes.desc}...
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