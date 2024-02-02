'use server'

import axiosInstance from "../../axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

interface EditArticleFormState {
    error: {
        code?: number,
        message?: string
    }
}

export async function EditArticle(aid: string, cid: number, formState: EditArticleFormState, formData: FormData): Promise<EditArticleFormState> {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const content = formData.get('content') as string
    const data = {
        title,
        description,
        content,
        category_id: cid
    }
    const res = await axiosInstance.put(`/api/v1/article/edit/${aid}`, data)
    if (res.data.code !== 200) {
        return {
            error: {
                code: res.data.code,
                message: res.data.message
            }
        }
    }
    revalidatePath('/article')
    redirect('/article')
}
