import useFetch from '../api/data'
import LoadingPage from '../pages/LoadingPage';
import { Link } from 'react-router-dom';

export default function Hot() {

    // Fetching Hot Article
    let { loading, data, error } = useFetch('http://localhost:1337/api/hots?populate=*');
    if (loading) return (<LoadingPage />)
    let hot = data.data[0].attributes;

    //  <div className='lg:h-[350px] md:h-full sm-h-full xxs:h-[320px] sm:w-full md:p-10 xxs:p-3 md:mx-auto sm:mx-auto xxs:mx-auto lg:mb-[] md:mb-[150px] sm:mb-[150px] xs:mb-[120px]'>
    //                         <img src={`http://localhost:1337${hot.coverImg.data.attributes.url}`} className='lg:w-full md:w-[full] sm:w-full mx-auto drop-shadow-md rounded-md' />
    //                     </div> 

    // <div className='lg:p-3 md:p-10 sm:p-10 xxs:p-3 lg:mt-[55px] md:mt-[-85px] lg:w-full md:w-full sm:w-full xxs:w-[320px] mx-auto'>
    //     <p className="md:mt-2 sm:mt-2 xxs:mt-[-30px] mb-1 bg-black text-white rounded-md text-sm w-[83px] font-semibold p-2">{getYear}-{getMonth}-{getDay}</p>
    //     <h1 className='font-bold lg:text-[50px] xxs:mt-2 xxs:text-[20px] leading-[1.2]'>{hot.title}</h1>
    //     <p className='mt-[20px] xxs:mt-[10px]'>{hot.desc}...</p>

    //     <div className="md:flex flex-row text-center mt-5 xxs:hidden" style={{ color: 'darkblue' }}>
    //         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#space</div>
    //         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#theGuardian</div>
    //         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#goMars</div>
    //         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }} >#evelution</div>
    //     </div>
    // </div>

    const getDate = new Date();
    const getDay = getDate.getDate()
    const getMonth = getDate.getMonth()
    const getYear = getDate.getFullYear();

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            {/* container */}
            <div className="max-w-[1240px] mx-auto xxs:mt-[50px]">

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