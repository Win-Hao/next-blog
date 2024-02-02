'use server'

import axiosInstance from "../../axiosConfig";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

interface CreateArticleFormState {
    error: {
        status?: number,
        message?: string
    }
}


export async function CreateArticle(cid: number, formState: CreateArticleFormState, formData: FormData): Promise<CreateArticleFormState> {
    const {description, title, content} = Object.fromEntries(formData)
    const category_id = cid
    const newArticle = {
        title,
        description,
        content,
        category_id
    }
    const res = await axiosInstance.post('/api/v1/article/add', newArticle)
    if (res.data.status !== 200) {
        return {
            error: {
                status: res.data.status,
                message: res.data.message
            }
        }
    }
    revalidatePath('/')
    redirect('/article')
}
