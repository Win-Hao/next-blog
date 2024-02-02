'use client'
import React from 'react';
import {useFormState} from "react-dom";
import * as actions from "@/actions/role/editRole";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";

interface EditPageProps {
    params: {
        rid: string
    },
    searchParams: {
        title: string,
        description: string,
        status: string
    }
}

const EditRoleForm = ({params, searchParams}: EditPageProps) => {
    const [formState, action] = useFormState(actions.EditRole, {
        error: {}
    })
    return (
        <>
            <h1></h1>
            <form action={action}>
                <div className='sm:max-w-2xl grid gap-4'>

                    <div className='grid grid-cols-4 items-center gap-4 '>
                        <Label htmlFor='title' className='text-right'>
                            Title
                        </Label>
                        <Input id='title' name='title' defaultValue={searchParams.title} className='col-span-3'/>
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4 '>
                        <Label htmlFor='description' className='text-right'>
                            description
                        </Label>
                        <Input id='description' name='description' defaultValue={searchParams.description}
                               className='col-span-3'/>
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4 '>
                        <Label htmlFor='status' className='text-right'>
                            status
                        </Label>
                        <Select defaultValue={searchParams.status} name='status'>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="true"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value='true'>true</SelectItem>
                                    <SelectItem value='false'>false</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <input type='hidden' name='rid' value={params.rid}/>
                    <div className='flex justify-end'>
                        <Button type='submit' className=''>Save</Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EditRoleForm;
