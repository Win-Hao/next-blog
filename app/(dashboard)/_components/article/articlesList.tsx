'use client'
import React from 'react';
import {MdArticle} from "react-icons/md";
import {IoMdAddCircle} from "react-icons/io";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {article, category} from "@/types";
import {Button} from "@/components/ui/button";
import PageNav from "@/components/common/pageNav";
import ArticlesCateFilter from "@/app/(dashboard)/_components/article/articleCateFilter";


interface ArticlesListProps {
    articles: article[]
    categories: category[]
    itemCount: number
    pageSize: number
    pageNum: number
}

const ArticlesList = ({articles, categories, itemCount, pageSize, pageNum}: ArticlesListProps) => {
    const router = useRouter()
    return (
        <div>
            <div className=" sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className='text-base font-semibold leading-6 text-gray-900'>Articles</h2>
                    <p className='mt-2 text-sm text-gray-700'>
                        A list of all the articles in your account
                    </p>
                    <ArticlesCateFilter categories={categories}/>
                </div>
                <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
                    {categories.length ? <Button onClick={() => {
                        router.push('/article/new')
                    }}>Add article
                        <div className='text-2xl'><IoMdAddCircle/></div>
                    </Button> : <Button onClick={() => {
                        router.push('/category/new')
                    }}>请添加分类</Button>}
                </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {articles.map((article) =>
                    <div
                        key={article.ID}
                        className="flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm
                         focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                        <div className="flex-shrink-0 text-blue-500">
                            <MdArticle/>
                        </div>
                        <div className="min-w-0 flex-1">
                            <Link href={`/article/${article.ID}`} className='focus:outline-none '>
                                <span className='text-xl font-bold text-gray-900'>{article.title}</span>
                                <span className='ml-2'>类型:{article.category.title}</span>
                                <p className='truncate mt-2 text-sm text-gray-500'>{article.description}</p>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            {itemCount && <PageNav itemCount={itemCount} pageNum={pageNum} pageSize={pageSize}/>}
        </div>
    );
};

export default ArticlesList;
