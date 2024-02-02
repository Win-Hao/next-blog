import React from 'react';
import axiosInstance from "../../../../../axiosConfig";
import EditArticleForm from "@/app/(dashboard)/_components/article/editArticleForm";

interface EditArticlePageProps {
    params: {
        aid: string
    }
}

const EditArticlePage = async ({params}: EditArticlePageProps) => {
    const res1 = await axiosInstance.get('/api/v1/category/detail')
    const categories = res1.data.data
    const res2 = await axiosInstance.get(`/api/v1/article/oneArt/${params.aid}`)
    const article = res2.data.data
    return (
        <div className='max-w-screen-2xl mx-auto px-3'>
            <EditArticleForm aid={params.aid} categories={categories} article={article}/>
        </div>
    );
};

export default EditArticlePage;
