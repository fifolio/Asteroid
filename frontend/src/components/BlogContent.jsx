import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogContent() {

    const { id } = useParams();

    const blog = [
        {
            "id": 1,
            "title": 'This is my title here',
            "desc": "ipsum dolor sit amet consectetur adipisicing elit. Dolor, ametipsum dolor sit amet consectetur adipisicing elit. Dolor, amet",
            'coverImg': 'https://placeholder.co/300',
            "content": 'With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube. Also.',
            'authorName': 'Firas Dabbabi',
            'authorImg': 'https://avatars.githubusercontent.com/u/97522852?v=4',
            'authorDesc': 'Software Engineer'
        },
        {
            "id": 2,
            "title": 'This is my title here',
            "desc": "ipsum dolor sit amet consectetur adipisicing elit. Dolor, ametipsum dolor sit amet consectetur adipisicing elit. Dolor, amet",
            'coverImg': 'https://placeholder.co/300',
            "content": 'With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube. Also.',
            'authorName': 'Firas Dabbabi',
            'authorImg': 'https://avatars.githubusercontent.com/u/97522852?v=4',
            'authorDesc': 'Software Engineer'
        },
        {
            "id": 3,
            "title": 'This is my title here',
            "desc": "ipsum dolor sit amet consectetur adipisicing elit. Dolor, ametipsum dolor sit amet consectetur adipisicing elit. Dolor, amet",
            'coverImg': 'https://placeholder.co/300',
            "content": 'With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube. Also.',
            'authorName': 'Firas Dabbabi',
            'authorImg': 'https://avatars.githubusercontent.com/u/97522852?v=4',
            'authorDesc': 'Software Engineer'
        },
        {
            "id": 4,
            "title": 'This is my title here',
            "desc": "ipsum dolor sit amet consectetur adipisicing elit. Dolor, ametipsum dolor sit amet consectetur adipisicing elit. Dolor, amet",
            'coverImg': 'https://placeholder.co/300',
            "content": 'With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube. Also.',
            'authorName': 'Firas Dabbabi',
            'authorImg': 'https://avatars.githubusercontent.com/u/97522852?v=4',
            'authorDesc': 'Software Engineer'
        },
        {
            "id": 5,
            "title": 'This is my title here',
            "desc": "ipsum dolor sit amet consectetur adipisicing elit. Dolor, ametipsum dolor sit amet consectetur adipisicing elit. Dolor, amet",
            'coverImg': 'https://placeholder.co/300',
            "content": 'With full markdown articles, author information, and much more, this fully responsive #HeadlessCMS Blog Wesbite is the best Strapi.io Blog Application that you can currently find on YouTube. Also.',
            'authorName': 'Firas Dabbabi',
            'authorImg': 'https://avatars.githubusercontent.com/u/97522852?v=4',
            'authorDesc': 'Software Engineer'
        },
    ]

    let article = blog.filter(blog => blog.id == id);
    article = article[0]

    return (
        <div className="w-full pb-10 bg-[#f9f9f9] py-[50px] max-sm:py-[150px]">
            <div className="max-w-[1240px] mx-auto">

                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

                    <div className="col-span-2 bg-white p-4 rounded-xl drop-shadow-md">
                        <img src={article.coverImg} alt="" className='h-56 w-full object-cover' />
                        <h1 className="font-bold text-2xl my-1 pt-5">{article.title}</h1>
                        <div className="pt-5">
                            {article.desc}
                        </div>
                    </div>

                    <div className="bg-white w-full drop-shadow-md rounded-xl py-5 max-sm:col-span-2 max-sm:mt-8">
                        <img src={article.authorImg} alt="" className='p-2 w-32 hh-32 rounded-full mx-auto' />
                        <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{article.authorName}</h1>
                        <p className="text-center text-gray-900 font-medium">{article.authorDesc}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
