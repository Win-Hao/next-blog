import React from 'react';
import LoginForm from "@/app/(auth)/_components/loginForm";
import {cookies} from "next/headers";
import {redirect, usePathname} from "next/navigation";

const LoginPage = () => {
const token=cookies().get('token')?.value as string
    if (token){
        redirect('/')
    }
    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
