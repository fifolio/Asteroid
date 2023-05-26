

export default function Blogs() {

    const blogs = [
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        },
        {
            "id": 1,
            "title": 'blog post one',
            "desc": "lorem Lorem ipsum dolor sit amet adipisicing elit. Molestias, reprehenderit.",
            "coverImg": 'https://ux-news.com/content/images/2023/02/covtrnd2.png',
        }
    ]

    return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">

            {/* container */}
            <div className="max-w-[1240px] mx-auto mt-[80px]">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 text-black">

                    {blogs.map((post, index) => (
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md" key={index}>
                            <img src={post.coverImg} className="h-56 w-full object-cover" />

                            <div className="p-5">
                                <h3 className="font-bold text-[20px] my-[5px]">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-[17px] my-2">
                                    {post.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
