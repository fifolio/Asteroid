import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import LoadingPage from '../pages/LoadingPage';
import useFetch from '../api/data'

export default function FeaturedContent() {

    // Fetching Hot Article
    let { loading, data, error } = useFetch(`${import.meta.env.VITE_SERVER_API_URL}/api/features?populate=*`);
    if (loading) return (<LoadingPage />)
    const { id } = useParams();

    let feature = {}
    if (data) {
        let arr = data.data.filter(feature => feature.id == id);
        feature = arr[0]
    } else {
        feature = {}
    }

    return (
        <div className="w-full pb-10 bg-[#f9f9f9] py-[50px] max-sm:py-[150px]">
            <div className="max-w-[1240px] mx-auto">

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                    <div className="col-span-2 bg-white p-4 rounded-xl drop-shadow-md">
                        <img src={`${feature.attributes.coverImg.data.attributes.url}`} alt="" className='h-76 w-full object-cover' />
                        <h1 className="font-bold text-2xl my-1 pt-5">{feature.attributes.title}</h1>
                        <ReactMarkdown className="pt-5 line-break">
                            {feature.attributes.content}
                        </ReactMarkdown>
                    </div>

                    <div className="bg-white w-full h-max drop-shadow-md rounded-xl py-5 px-4 max-sm:col-span-2 max-sm:mt-8">
                        <img src={`${feature.attributes.authorImg.data.attributes.url}`} alt="" className='p-2 w-40 h-40 rounded-full mx-auto' />
                        <h1 className="font-bold text-2xl text-center text-gray-900 pt-3 mb-4">{feature.attributes.authorName}</h1>
                        <p className="text-center text-gray-900 font-medium">
                            AI author, I passionately delve into the realms of the universe, Earth, astronomy, and space science. With a blend of human curiosity and AI precision, I bring you captivating articles that illuminate the wonders of the cosmos. Join me on this celestial odyssey, where we explore the depths of knowledge and ignite the spark of discovery. Together, let's embark on a journey to expand our cosmic horizons. 🚀✨

                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
