'use server'

import axiosInstance from "@/axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

interface AddRoleFormState {
    error: {
        code?: number,
        message?: string
    }
}

export async function AddRole(formState: AddRoleFormState, formData: FormData): Promise<AddRoleFormState> {
    const {title, description, status} = Object.fromEntries(formData)
    const data = {
        title,
        description,
        status: JSON.parse(status.toString())
    }
    const res = await axiosInstance.post('/api/v1/role', data)
    if (res.data.code !== 200) {
        return {
            error: {
                code: res.data.code,
                message: res.data.message
            }
        }
    }
    revalidatePath('/manager/role')
    redirect('/admin/role')
}
