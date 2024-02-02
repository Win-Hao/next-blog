'use server'

import axiosInstance from "@/axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function DeleteRole(rid: number) {
    const res = await axiosInstance.delete(`/api/v1/role/${rid}`)
    console.log(res)
    revalidatePath('/manager/role')
    redirect('/admin/role')
}
