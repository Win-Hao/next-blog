import React from 'react';
import Link from "next/link";

const CategoryPage = () => {
    return (
        <div>
            <Link href={'/category/new'} className='border-2 border-red-400 p-3 rounded'>创建分类</Link>
        </div>
    );
};

export default CategoryPage;
