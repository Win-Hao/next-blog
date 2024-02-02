'use server'
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function SignOut() {
    cookies().delete('token')
    revalidatePath('/login')
    redirect('/login')
}
