import React from 'react';
import {FetchCateArtCount} from "@/lib/data";
import ArticleSummary from "@/app/(dashboard)/_components/article/articleSummary";
import ArticleChart from "@/app/(dashboard)/_components/article/articleChart";


const Page = async () => {
    const CateArtCount = await FetchCateArtCount()
    return (
        <>
            <div className='flex flex-col max-w-screen-2xl mx-auto p-3 gap-4'>
                <ArticleSummary CateArtCount={CateArtCount}/>
                <div className='grid  gap-4'>
                    <ArticleChart CateArtCount={CateArtCount}/>
                </div>

            </div>

        </>
    );
};

export default Page;
