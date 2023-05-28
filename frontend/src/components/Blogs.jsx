import { Link } from 'react-router-dom'

export default function Blogs() {

    const blogs = [
        {
            "id": 1,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
            'authorName': 'Firas Dabbabi',
            'authorImg': 'https://avatars.githubusercontent.com/u/97522852?v=4',
            'authorDesc': 'Software Engineer'
        },
        {
            "id": 2,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 3,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 4,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 5,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 6,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 7,
            "title": 'blog article one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        }
    ]

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">

            {/* container */}
            <div className="max-w-[1240px] mx-auto mt-[80px]">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-black">

                    {blogs.map((article, index) => (
                        <Link to={`/article/${article.id}`}>
                            <div className="bg-white rounded-xl overflow-hidden drop-shadow-md" key={index}>
                                <img src={article.coverImg} className="h-56 w-full object-cover" />

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
