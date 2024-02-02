'use server'

import axiosInstance from "../../axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function deleteArticle(aid: number) {
    await axiosInstance.delete(`/api/v1/article/delete/${aid}`)
    revalidatePath('/article')
    redirect('/article')
}
