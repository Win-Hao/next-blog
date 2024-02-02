'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {LiaAngleLeftSolid, LiaAngleRightSolid} from "react-icons/lia";
import {LiaAngleDoubleLeftSolid, LiaAngleDoubleRightSolid} from "react-icons/lia";
import {useRouter, useSearchParams} from "next/navigation";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface PageNavProps {
    itemCount: number,
    pageSize: number,
    pageNum: number
}

const PageNav = ({itemCount, pageSize, pageNum}: PageNavProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pageCount = Math.ceil(itemCount / pageSize)
    const changePage = (pageNum: number) => {
        const params = new URLSearchParams(searchParams)//初始化params方法
        params.set('pageNum', pageNum.toString())
        router.push(params.size ? '?' + params.toString() : '')
    }
    return (
        <div className='flex gap-2 items-center'>
            <p className='tracking-wide'>共{itemCount}条数据,第{pageNum}页</p>
            <Select
                defaultValue={searchParams.get('pageSize') || "6"}
                onValueChange={(pageSize) => {
                    const params = new URLSearchParams()
                    if (searchParams.get('cid'))
                        params.append('cid', searchParams.get('cid')!)
                    if (pageSize) params.append('pageSize', pageSize)
                    const query = '?' + params.toString() //如果cid为空的话即显示全部数据时，query为空
                    router.push('/article' + query)
                }}>
                <SelectTrigger className="w-[90px]">
                    <SelectValue placeholder='6'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="18">18</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button variant='secondary'
                    size='icon'
                    disabled={pageNum === 1}
                    onClick={() => {
                        changePage(1)
                    }}
            >
                <LiaAngleDoubleLeftSolid className='w-6 h-6'/>
            </Button>
            <Button variant='secondary'
                    size='icon'
                    disabled={pageNum === 1}
                    onClick={() => {
                        changePage(pageNum - 1)
                    }}
            >
                <LiaAngleLeftSolid className='w-6 h-6'/>
            </Button>
            <Button variant='secondary'
                    size='icon'
                    disabled={pageNum === pageCount}
                    onClick={() => {
                        changePage(pageNum + 1)
                    }}
            >
                <LiaAngleRightSolid className='w-6 h-6'/>
            </Button>
            <Button variant='secondary'
                    size='icon'
                    disabled={pageNum === pageCount}
                    onClick={() => {
                        changePage(pageCount)
                    }}
            >
                <LiaAngleDoubleRightSolid className='w-6 h-6'/>
            </Button>
        </div>
    );
};

export default PageNav;
