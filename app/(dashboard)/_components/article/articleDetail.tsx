'use client'
import React from 'react';
import * as actions from '@/actions/article/deleteArticle'
import {MdDelete} from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {article} from "@/types";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";


interface ArticleDetailProps {
    article: article
}

const ArticleDetail = ({article}: ArticleDetailProps) => {
    const DeleteAction = actions.deleteArticle.bind(null, article.ID)
    const router = useRouter()
    return (
        <section id='articleDetail'>
            <div className="max-w-screen-2xl mx-auto px-3">
                <div className='flex flex-col sm:grid sm:grid-cols-2 sm:space-x-4 '>
                    <div>
                        <p className='font-semibold text-gray-500'>{article.category.title}</p>
                        <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>{article.title}</h1>
                        <p className='mt-4 text-gray-500'>{article.description}</p>
                        <p className='mt-4 text-gray-500'>{article.content}</p>
                    </div>
                    <div className='flex flex-col space-y-3 sm:mt-0 mt-5 '>

                        <Button onClick={() => {
                            router.push(`/article/${article.ID}/edit`)
                        }} className=' block bg-blue-500
                                      text-white
                                     hover:bg-blue-600
                                    hover:text-black transition duration-300
                                    rounded-xl sm:w-1/2  w-full py-2 px-3'>
                            <div className='flex items-center justify-center gap-4'>
                                <div className='text-xl '><FaEdit/></div>
                                <span>EDIT ARTICLE</span></div>
                        </Button>

                        <form action={DeleteAction}>
                            <Button type='submit'
                                    className=' border-2 block bg-white
                                    border-red-400 hover:bg-red-400 text-black
                                    hover:text-white transition duration-300
                                    rounded-xl sm:w-1/2  w-full py-2 px-3 '>
                                <div className='flex items-center justify-center gap-4 '>
                                    <div className='text-xl '><MdDelete/>
                                    </div>
                                    <span>DELETE
                                ARTICLE</span></div>
                            </Button>
                        </form>


                    </div>
                </div>

            </div>
        </section>
    );
};

export default ArticleDetail;
