import React from 'react';
import {FetchArticles, FetchCateArt, FetchCategories} from "@/lib/data";
import ArticlesList from "@/app/(dashboard)/_components/article/articlesList";


const ArticlePage = async ({searchParams}: { searchParams: { cid?: string, pageSize?: string, pageNum?: string } }) => {

    const {
        CatArt,
        itemCount
    } = await FetchCateArt(searchParams.cid || '', searchParams.pageSize || '6', searchParams.pageNum || '1')
    const {articles, itemCount2} = await FetchArticles(searchParams.pageSize || '6', searchParams.pageNum || '1')

    const categories = await FetchCategories()


    return (
        <div>
            <div className="max-w-screen-2xl mx-auto p-3">
                <ArticlesList articles={searchParams.cid ? CatArt : articles}
                              categories={categories}
                              itemCount={searchParams.cid ? itemCount : itemCount2}
                              pageSize={parseInt(searchParams.pageSize || '6')}
                              pageNum={parseInt(searchParams.pageNum || '1')}
                />
            </div>
        </div>
    );
};

export default ArticlePage;
