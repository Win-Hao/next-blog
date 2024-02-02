'use client'
import React from 'react';
import * as actions from '@/actions/auth/signIn'
import {useFormState} from "react-dom";

const LoginForm = () => {
    const [formState, action] = useFormState(actions.SignIn, {
        error: {}
    })
    return (
        <div className='select-none'>
            <div className='flex flex-col
                 justify-center
                 items-center h-screen
                 '>
                <form action={action}
                      className='flex flex-col
                     p-10 border
                     border-b-zinc-400
                     shadow-2xl
                     w-80
                     h-90
                     space-y-8
                     rounded-2xl'>
                    <h1 className='text-black text-center text-5xl font-bold'>Login</h1>
                    <input
                        id='username'
                        type='text'
                        placeholder='username'
                        name='username'
                        className='p-3 bg-white border border-b-zinc-400 rounded-3xl
                     placeholder:text-zinc-500 placeholder:text-center text-center focus:placeholder:opacity-0
                    '/>
                    <input
                        id='password'
                        type='password'
                        placeholder='Password'
                        name='password'
                        className='p-3 bg-white border border-b-zinc-400 rounded-3xl
                    placeholder:text-zinc-500 placeholder:text-center text-center focus:placeholder:opacity-0'/>
                    {formState.error.code &&
                        <p className='text-center  rounded-2xl  p-3 bg-red-100'>
                            {formState.error.message}
                        </p>}
                    {formState.error._form?.join(', ')}
                    <button
                        type='submit'
                        className='bg-blue-200 p-3 rounded-2xl text-white font-bold
                        hover:opacity-40 hover:text-black transition duration-300'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
