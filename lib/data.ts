import axiosInstance from "../axiosConfig";
import {article, CateArtCount, category, Manager, Module, Role} from "@/types";

interface ApiResponse<T> {
    data: T;
}

export async function FetchArticles(pageSize: string, pageNum: string): Promise<{
    articles: article[],
    itemCount2: number
}> {
    try {
        const res2 = await axiosInstance.get('/api/v1/article/detail')//用来统计总数据数量
        const res = await axiosInstance.get(`/api/v1/article/detail?pageSize=${pageSize}&pageNum=${pageNum}`)//用来获取单页数据
        const articles: article[] = res.data.data
        const itemCount2: number = res2.data.data.length
        return {articles, itemCount2}
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch articles')

    }
}

export async function FetchCateArt(cid: string, pageSize: string, pageNum: string): Promise<{
    CatArt: article[],
    itemCount: number
}> {
    try {
        const query = cid ? `?cid=${cid}&pageSize=${pageSize}&pageNum=${pageNum}` : ''
        const query2 = cid ? `?cid=${cid}` : ''
        const res2 = await axiosInstance.get(`/api/v1/article/cateArt${query2}`)
        const res = await axiosInstance.get(`/api/v1/article/cateArt${query}`)
        const CatArt = res.data.data
        const itemCount = res2.data.data.length
        return {CatArt, itemCount}

    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch articles')
    }
}

export async function FetchCategories(): Promise<category[]> {
    try {
        const res = await axiosInstance.get('/api/v1/category/detail')
        return res.data.data
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch categories')
    }
}

export async function FetchCateArtCount(): Promise<CateArtCount[]> {
    try {
        const res = await axiosInstance.get('/api/v1/category/cateArtCount')
        return res.data.data
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch CateArtCount')
    }
}


export async function FetchRoles(): Promise<Role[]> {
    try {
        const res = await axiosInstance.get<ApiResponse<Role[]>>('/api/v1/role')
        return res.data.data
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch Roles')
    }
}

export async function FetchManagers() {
    try {
        const res = await axiosInstance.get<ApiResponse<Manager[]>>('/api/v1/manager')
        return res.data.data
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch Managers')
    }
}

export async function FetchManager(id: string) {
    try {
        const res = await axiosInstance.get<ApiResponse<Manager>>(`/api/v1/manager/${id}`)
        return res.data.data
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch Manager')
    }
}

export async function FetchModule() {
    try {
        const res = await axiosInstance.get<ApiResponse<Module[]>>('/api/v1/access/module')
        return res.data.data
    } catch (error) {
        console.log(error)
        throw new Error('fail to fetch Module')
    }
}
