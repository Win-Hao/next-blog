'use server'

import axiosInstance from "@/axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function CreateManager(formData: FormData) {
    const {
        username,
        password,
        mobile,
        email,
        role_id,
        status,
        is_super
    } = Object.fromEntries(formData)
    const data = {
        username,
        password,
        mobile: parseInt(mobile.toString()),
        email,
        role_id: parseInt(role_id.toString()),
        status: JSON.parse(status.toString()),
        is_super: parseInt(is_super.toString()),
    }
    const res = await axiosInstance.post('/api/v1/manager', data)
    revalidatePath('/manager')
    redirect('/manager')
}
