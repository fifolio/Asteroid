import useFetch from '../api/data'
import LoadingPage from '../pages/LoadingPage';
import { Link } from 'react-router-dom';

export default function Hot() {

    // Fetching Hot Article
    let { loading, data, error } = useFetch('http://localhost:1337/api/hots?populate=*');
    if (loading) return (<LoadingPage />)
    let hot = data.data[0].attributes;

    const getDate = new Date();
    const getDay = getDate.getDate()
    const getMonth = getDate.getMonth()
    const getYear = getDate.getFullYear();

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            {/* container */}
            <div className="max-w-[1240px] mx-auto lg:mt-[85px] xxs:mt-[50px]">

                <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-1">

                    <div className='xxs:mb-1 p-3'>
                        <img src={`http://localhost:1337${hot.coverImg.data.attributes.url}`} className='w-full mx-auto drop-shadow-md rounded-md' />
                    </div>


                    <div className='p-3'>
                        <p className="lg:mt-5 mb-1 bg-black text-white rounded-md text-sm w-[83px] font-semibold p-2">{getYear}-{getMonth}-{getDay}</p>
                        <h1 className='font-bold lg:text-[40px] xxs:mt-4 xxs:text-[25px] leading-[1.2]'>{hot.title}</h1>
                        <p className='lg:mt-5 xs:mt-3'>{hot.desc}..</p>

                        <div className="md:flex flex-row text-center mt-5 xxs:hidden" style={{ color: 'darkblue' }}>
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