import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export function middleware(request: NextRequest) {
    const token = cookies().get('token')?.value as string
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/user/:path*', '/category/:path*', '/article/:path*'],
}

