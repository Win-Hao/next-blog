'use client'
import React, {ChangeEvent, useState} from 'react';
import {useFormState} from "react-dom";
import * as actions from '@/actions/article/createArticle'
import {useRouter} from "next/navigation";
import {FaSave} from "react-icons/fa";
import {category} from "@/types";
import {Button} from "@/components/ui/button";


interface CreateArticleFormProps {
    categories: category[]
}

const CreateArticleForm = ({categories}: CreateArticleFormProps) => {

    const [cid, setCid] = useState(categories[0].id)
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setCid(parseInt(event.target.value))
    }
    const [formState, action] = useFormState(actions.CreateArticle.bind(null, cid),
        {
            error: {}
        })
    const router = useRouter()
    return (
        <>
            <form action={action}>
                <div className='max-w-xl mx-auto select-none'>
                    <div className='space-y-1'>
                        <h1 className='font-bold text-xl text-gray-900'>Article</h1>
                        <p className='text-gray-700 text-sm font-medium'>You can add a new article</p>
                    </div>

                    <div className="flex flex-col space-y-10 mt-14">
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="title" className='block text-lg font-medium leading-6 text-gray-900'>
                                title
                            </label>
                            <div
                                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    autoComplete="title"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="title"
                                />
                            </div>
                        </div>

                        <select onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            {categories.map((category) =>
                                <option key={category.id}
                                        value={category.id}>
                                    {category.title}
                                </option>)}

                        </select>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="description"
                                   className='block text-lg font-medium leading-6 text-gray-900'>
                                description
                            </label>
                            <textarea
                                id='description'
                                name='description'
                                className='  h-24 w-full sm:max-w-md placeholder:text-left'
                                rows={3}
                                placeholder='description'
                                defaultValue={''}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="content"
                                   className='block text-lg font-medium leading-6 text-gray-900'>content
                            </label>

                            <textarea
                                id='content'
                                name='content'
                                className='  h-60 w-full sm:max-w-lg placeholder:text-left'
                                rows={3}
                                placeholder='content'
                                defaultValue={''}
                            />

                        </div>
                    </div>
                    <div className=" flex sm:max-w-lg items-center justify-end ">

                        <Button type='submit' className='mt-5 flex  space-x-1'>
                            <FaSave/>
                            <p>Save</p>
                        </Button>
                    </div>
                </div>
            </form>
        </>

    );
};

export default CreateArticleForm;
