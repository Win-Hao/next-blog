import {cookies} from "next/headers";
import {jwtDecode} from "jwt-decode";

interface parseToken {
    username: string
    exp: number
}

export function GetParseToken(): { username: string } {
    const token = cookies().get('token')?.value as string
    const {username}: parseToken = jwtDecode(token)
    return {username}
}
