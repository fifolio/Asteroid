import { appwriteConfig, databases } from '../../appwrite/config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hot() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await databases.listDocuments(
                    appwriteConfig.database,
                    appwriteConfig.collection_hot,
                );
                setData(response.documents)
                console.log(response)
            } catch (error) {
                console.error('something went wrong while fetching: ', error);
            }
        }

        fetchData();
    }, []);


    const getDate = new Date();
    const getDay = getDate.getDate()
    const getMonth = getDate.getMonth()
    const getYear = getDate.getFullYear();

    // return (
    //     <div className="w-full bg-[#f9f9f9] py-[50px]">
    //         {/* container */}
    //         <div className="max-w-[1240px] mx-auto lg:mt-[85px] xxs:mt-[50px]">

    //             <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-1">

    //                 <div className='xxs:mb-1 p-3'>
    //                     <Link to={`/hot`}>
    //                         <img src={`${hot.coverImg.data.attributes.url}`} className='w-full mx-auto drop-shadow-md rounded-md' />
    //                     </Link>
    //                 </div>


    //                 <div className='p-3' style={{ paddingTop: '20px' }}>
    //                     <b className="lg:mt-5 mb-1 bg-black text-white rounded-md text-sm font-semibold p-2">{getYear}-{getMonth}-{getDay}</b>
    //                     <Link to={`/hot`}>
    //                         <h1 className='font-bold lg:text-[40px] xxs:mt-4 xxs:text-[25px] leading-[1.2] text-black hover:text-gray-600 duration-200'>{hot.title}</h1>
    //                         <p className='lg:mt-5 xs:mt-3'>{hot.desc}..</p>
    //                     </Link>

    //                     <div className="md:flex flex-row text-center mt-5 xxs:hidden" style={{ color: 'darkblue' }}>
    //                         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#space</div>
    //                         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#theGuardian</div>
    //                         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }}>#goMars</div>
    //                         <div className="bg-white mr-2 rounded-md drop-shadow-sm w-min py-1 px-4 " style={{ cursor: 'pointer', border: '1px solid #d9d9d9' }} >#evelution</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <>
        {
            data?.map((article) => (
                <div className="w-full bg-[#f9f9f9] py-[50px]">
                {/* container */}
                <div className="max-w-[1240px] mx-auto lg:mt-[85px] xxs:mt-[50px]">
    
                    <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-1">
    
                        <div className='xxs:mb-1 p-3'>
                            <Link to={`/hot`}>
                                <img src={`${article.coverImg}`} className='w-full mx-auto drop-shadow-md rounded-md' />
                            </Link>
                        </div>
    
    
                        <div className='p-3' style={{ paddingTop: '20px' }}>
                            <b className="lg:mt-5 mb-1 bg-black text-white rounded-md text-sm font-semibold p-2">{getYear}-{getMonth}-{getDay}</b>
                            <Link to={`/hot`}>
                                <h1 className='font-bold lg:text-[40px] xxs:mt-4 xxs:text-[25px] leading-[1.2] text-black hover:text-gray-600 duration-200'>{article.title}</h1>
                                <p className='lg:mt-5 xs:mt-3'>{article.desc}..</p>
                            </Link>
    
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
            ))
        }
        </>
    )
}