import React from 'react';
import {redirect} from "next/navigation";
import axiosInstance from "../../../../axiosConfig";


const CreateCatePage = () => {
    async function CreateCateAction(formData: FormData) {
        'use server'
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const data = {
            title,
            description
        }
        const res = await axiosInstance.post('/api/v1/category/add', data)
        redirect('/category')
    }


    return (
        <form action={CreateCateAction}>
            <h3 className='font-bold text-xl m-3'>Create a Category</h3>
            <div className='flex flex-col m-10 gap-4'>
                <div className='flex space-x-7 gap-4'>
                    <label className='w-12' htmlFor='title'>
                        Title:
                    </label>
                    <input
                        name='title'
                        className='border rounded p-2 w-full'
                        id='title'/>
                </div>
                <div className='flex space-x-7 gap-4'>
                    <label className='w-12' htmlFor='description'>
                        Description:
                    </label>
                    <textarea
                        name='description'
                        className='border rounded p-2 w-full'
                        id='description'/>
                </div>
                <button type='submit' className='border rounded p-2 bg-blue-200'>
                    Create
                </button>
            </div>

        </form>
    );
};

export default CreateCatePage;
