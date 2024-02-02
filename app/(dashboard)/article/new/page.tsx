import React from 'react';
import axiosInstance from "../../../../axiosConfig";
import CreateArticleForm from "@/app/(dashboard)/_components/article/createArticleForm";

const NewArticlePage = async () => {
    const res = await axiosInstance.get('/api/v1/category/detail')
    const categoryList = res.data.data
    return (
        <div>
            <CreateArticleForm categories={categoryList}/>
        </div>
    );
};

export default NewArticlePage;
