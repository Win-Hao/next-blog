'use server'

import axiosInstance from "@/axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function EditManager(formData: FormData) {
    const {
        id,
        mobile,
        email,
        role_id,
        is_super,
        status
    } = Object.fromEntries(formData)
    const data = {
        mobile: parseInt(mobile.toString()),
        email,
        role_id: parseInt(role_id.toString()),
        is_super: parseInt(is_super.toString()),
        status: JSON.parse(status.toString())
    }
    const res = await axiosInstance.put(`/api/v1/manager/${id}`, data)
    if (res.data.code !== 200) {
        return {}
    }
    revalidatePath('/manager')
    redirect('/manager')
}
