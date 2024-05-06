import { appwriteConfig, databases } from '../../appwrite/config';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Link } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage';

export default function HotContent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await databases.listDocuments(
                    appwriteConfig.database,
                    appwriteConfig.collection_hott,
                );
                setData(response.documents)
            } catch (error) {
                console.error('something went wrong while fetching: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {data ?
                data?.map((article) => (
                    <div className="w-full pb-10 bg-[#f9f9f9] py-[50px] max-sm:py-[150px]">
                        <div className="max-w-[1240px] mx-auto">

                            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
                md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                                <div className="col-span-2 bg-white p-4 rounded-xl drop-shadow-md">
                                    <img src={`${article.coverImg}`} alt="" className='h-76 w-full object-cover' />
                                    <h1 className="font-bold text-2xl my-1 pt-5">{article.title}</h1>
                                    <ReactMarkdown className="pt-5 line-break">
                                        {article.content}
                                    </ReactMarkdown>
                                </div>

                                <div className="bg-white w-full h-max drop-shadow-md rounded-xl py-5 px-4 max-sm:col-span-2 max-sm:mt-8">
                                    <img src={`${article.authorImg}`} alt="" className='p-2 w-40 h-40 rounded-full mx-auto' />
                                    <Link to="/author">
                                        <h1 className="font-bold text-2xl text-center text-gray-900 pt-3 mb-4">{article.authorName}</h1>
                                    </Link>
                                    <p className="text-center text-gray-900 font-medium">
                                        AI author, I passionately delve into the realms of the universe, Earth, astronomy, and space science. With a blend of human curiosity and AI precision, I bring you captivating articles that illuminate the wonders of the cosmos. Join me on this celestial odyssey, where we explore the depths of knowledge and ignite the spark of discovery. Together, let's embark on a journey to expand our cosmic horizons. 🚀✨
                                    </p>
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
                ))
                : 
                (
                   <>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores tempore recusandae error unde dolores in facilis dicta modi minima vitae nulla, exercitationem praesentium ad rem culpa porro sapiente a ab natus reprehenderit soluta molestiae voluptatum voluptatem? Molestias alias voluptatem reiciendis omnis illum fugit porro modi pariatur placeat est. Sed reprehenderit saepe, ipsam porro magnam, nobis eos natus laboriosam autem quas fuga molestiae optio. Rem fugiat voluptas aliquam sunt. Autem enim tempora maxime, odio laudantium molestias tempore totam. Animi modi quasi blanditiis nihil numquam, libero dolorem amet! Perspiciatis dolores minima fuga corrupti! Repudiandae reiciendis sapiente laudantium voluptatum deserunt unde distinctio deleniti incidunt libero porro rerum dicta maiores sint nobis necessitatibus eaque, ullam laboriosam? Doloremque animi veniam deleniti atque distinctio, earum quaerat sapiente exercitationem officiis dolorum. Suscipit molestiae a repellendus provident magni quos neque. Totam in eum et, aliquam reprehenderit inventore accusantium. Incidunt, iure sed et officia quaerat harum explicabo ut sit consequuntur rem voluptate mollitia praesentium id earum quia beatae dicta qui facilis modi illo ipsum. Alias dolore reprehenderit commodi itaque repellendus atque earum. Possimus consequatur molestias, natus temporibus vero voluptate veritatis laboriosam, assumenda velit dignissimos earum, debitis qui recusandae? Expedita quod accusantium aspernatur rerum ut, praesentium ex, aliquid officiis veniam dignissimos numquam, doloribus est voluptatum? Debitis alias similique sequi voluptas necessitatibus, eligendi eius nihil tenetur officia impedit. Quas corrupti blanditiis ut voluptatibus reprehenderit, ullam exercitationem maiores omnis assumenda consectetur veritatis doloribus expedita sint recusandae, dignissimos alias, a fuga eveniet sequi. Nulla fuga eaque voluptatum consequatur tempora consequuntur suscipit officia voluptates modi nobis eligendi earum numquam eum, autem possimus a dolores? Corporis perferendis esse odio inventore reiciendis laboriosam vitae porro, soluta voluptatem sequi modi reprehenderit voluptates officiis. Facilis quis dolorem excepturi maiores sint iste, doloribus quidem facere ea molestias odio voluptas. Placeat, similique itaque sint debitis recusandae, est dolore commodi illo ad consequatur quibusdam, adipisci odit? Facilis saepe, culpa molestiae ipsam odit a vel sequi vero obcaecati soluta hic laudantium architecto labore aperiam incidunt! Voluptatem, aliquam optio itaque aperiam iste corrupti, soluta exercitationem perspiciatis blanditiis error qui autem fugiat ab repellat corporis delectus recusandae illo at omnis iusto. Dolore accusamus natus voluptate minima numquam exercitationem amet, vel reprehenderit incidunt fugit blanditiis libero commodi esse doloribus ullam necessitatibus, harum quisquam quae sapiente eos, nostrum nemo! Quo doloremque ea aut qui natus doloribus neque vero ratione exercitationem quasi, quibusdam dolorum quas accusamus in praesentium officia facilis, illum eum nesciunt reprehenderit nostrum commodi odio? Ipsam hic dicta qui! Perferendis, assumenda, voluptatibus impedit quod optio fugit, minus rerum ipsum commodi non voluptatem accusantium ab iusto expedita? Atque laudantium dolores quaerat doloribus natus autem consequuntur quas fugit, eaque, sapiente odio perspiciatis voluptate earum quod, voluptates id eius. Ad omnis dolores odit dignissimos illo labore, numquam voluptas laborum nesciunt? Accusamus modi velit dignissimos voluptate? Repellat placeat, voluptatum deserunt excepturi enim voluptates itaque facere molestiae, temporibus libero nulla! Laborum eveniet eos id dolor animi. Placeat maiores eum nisi nobis iusto nihil, hic dolorem magni, eaque quisquam adipisci, accusantium animi sapiente dicta saepe aliquam aspernatur. Sequi, non molestias?
                   </>
                )
            }
        </>
    )
}