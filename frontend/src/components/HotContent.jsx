import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import useFetch from '../api/data'
import LoadingPage from '../pages/LoadingPage';
import { Link } from 'react-router-dom'

export default function HotContent() {

    // Fetching Hot hot
    let { loading, data, error } = useFetch('http://localhost:1337/api/hots?populate=*');
    if (loading) return (<LoadingPage />)
    let hot = data.data[0].attributes;


    // const getDate = new Date();
    // const getDay = getDate.getDate()
    // const getMonth = getDate.getMonth()
    // const getYear = getDate.getFullYear();

    return (
        <div className="w-full pb-10 bg-[#f9f9f9] py-[50px] max-sm:py-[150px]">
            <div className="max-w-[1240px] mx-auto">

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                    <div className="col-span-2 bg-white p-4 rounded-xl drop-shadow-md">
                        <img src={`http://localhost:1337${hot.coverImg.data.attributes.url}`} alt="" className='h-76 w-full object-cover' />
                        <h1 className="font-bold text-2xl my-1 pt-5">{hot.title}</h1>
                        <ReactMarkdown className="pt-5 line-break">
                            {hot.content}
                        </ReactMarkdown>
                    </div>

                    <div className="bg-white w-full h-max drop-shadow-md rounded-xl py-5 px-4 max-sm:col-span-2 max-sm:mt-8">
                        <img src={`http://localhost:1337${hot.authorImg.data.attributes.url}`} alt="" className='p-2 w-40 h-40 rounded-full mx-auto' />
                        <Link to="/author">
                            <h1 className="font-bold text-2xl text-center text-gray-900 pt-3 mb-4">{hot.authorName}</h1>
                        </Link>
                        <p className="text-center text-gray-900 font-medium">{hot.authorDesc}</p>
                    </div>

                    <div className="bg-white col-span-2 h-max drop-shadow-md rounded-xl py-5 px-4 max-sm:col-span-2 max-sm:mt-8 sm:flex  xxs:hidden">
                        <div className="flex flex-row text-center" style={{ color: 'darkblue' }}>
                            <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#space</div>
                            <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#theGuardian</div>
                            <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#goMars</div>
                            <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }} >#evelution</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}