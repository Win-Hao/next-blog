import React from 'react';
import {CateArtCount} from "@/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface ArticleSummaryProps {
    CateArtCount: CateArtCount[]
}

const ArticleSummary = ({CateArtCount}: ArticleSummaryProps) => {
    return (
        <>
            <div className='flex space-x-4'>
                {CateArtCount.map((cate) =>
                    <Card key={cate.category_id} className='w-[200px] h-[200px]'>
                        <div className='flex flex-col items-center gap-4'>
                            <CardHeader>
                                <CardTitle className='text-3xl text-zinc-500'>{cate.category_title}</CardTitle>
                            </CardHeader>
                            <CardContent className='text-2xl text-zinc-900'>
                                <p className=''>{cate.articles_count}</p>
                            </CardContent>
                        </div>
                    </Card>
                )}
            </div>
        </>
    );
};

export default ArticleSummary;
