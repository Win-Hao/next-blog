'use server'
import axiosInstance from "../../axiosConfig";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

interface SignInFormState {
    error: {
        code?: number,
        message?: string
        _form?: string[]

    }
}

export async function SignIn(formState: SignInFormState, formData: FormData): Promise<SignInFormState> {
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const data = {
        username,
        password
    }
    try {
        const res = await axiosInstance.post('/login', data)
        console.log(data)
        if (res.data.code !== 200) {
            return {
                error: {
                    code: res.data.code,
                    message: res.data.message
                }
            }
        }
        const token = res.data.token
        cookies().set('token', token)

    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                error: {
                    _form: [error.message]
                }
            }
        } else {
            return {
                error: {
                    _form: ['something went wrong']
                }
            }
        }
    }
    redirect('/article')

}
