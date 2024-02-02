import React from 'react';
import axiosInstance from "../../../../axiosConfig";
import ArticleDetail from "@/app/(dashboard)/_components/article/articleDetail";

interface articleDetailProps {
    params: {
        aid: string
    }
}

const ArticleDetailPage = async ({params: {aid}}: articleDetailProps) => {
    const res = await axiosInstance.get(`/api/v1/article/oneArt/${aid}`)
    const articleDetail = res.data.data
    return (
        <div>
            <ArticleDetail article={articleDetail}/>
        </div>
    );
};

export default ArticleDetailPage;
