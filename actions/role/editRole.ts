'use server'

import axiosInstance from "@/axiosConfig";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

interface EditRoleFormState {
    error: {
        code?: number,
        message?: string
    }
}

export async function EditRole(formState: EditRoleFormState, formData: FormData): Promise<EditRoleFormState> {
    const {
        rid,
        title,
        description,
        status
    } = Object.fromEntries(formData)
    const boolStatus = JSON.parse(status.toString())
    const data = {
        id: parseInt(rid.toString()),
        title,
        description,
        status: boolStatus
    }
    const res = await axiosInstance.put('/api/v1/role', data)
    if (res.data.code !== 200) {
        return {
            error: {
                code: res.data.code,
                message: res.data.message
            }
        }
    }

    revalidatePath('/role')
    redirect('/role')

}
