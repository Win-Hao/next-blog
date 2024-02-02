import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {category} from "@/types";
import {useRouter, useSearchParams} from "next/navigation";

interface filterProps {
    categories?: category[]
}

const ArticlesCateFilter = ({categories}: filterProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()//初始化这个方法
    return (
        <div className='mt-5'>
            <Select
                defaultValue={searchParams.get('cid') || " "}
                onValueChange={(cid) => {
                    const params = new URLSearchParams()
                    if (cid) params.append('cid', cid)
                    if (searchParams.get('pageSize'))
                        params.append('pageSize', searchParams.get('pageSize')!)
                    const query = cid !== ' ' ? '?' + params.toString() : `${searchParams.get('pageSize') ? `?pageSize=${searchParams.get('pageSize')}` : ' '}`
                    router.push('/article' + query)
                }}>
                <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='All'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={" "}>All</SelectItem>
                        {categories?.map((category) =>
                            <SelectItem key={category.id}
                                        value={category.id.toString()}>
                                {category.title}
                            </SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default ArticlesCateFilter;
