'use client'
import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {useFormState} from "react-dom";
import * as actions from '@/actions/role/addRole'

const AddRoleForm = () => {
    const [formState, action] = useFormState(actions.AddRole, {
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
                        <Input id='title' name='title' placeholder='title' className='col-span-3'/>
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4 '>
                        <Label htmlFor='description' className='text-right'>
                            description
                        </Label>
                        <Input id='description' name='description' placeholder='description'
                               className='col-span-3'/>
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4 '>
                        <Label htmlFor='status' className='text-right'>
                            status
                        </Label>
                        <Select name='status' defaultValue='true'>
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
                    <div className='flex justify-end'>
                        <Button type='submit' className=''>Save</Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddRoleForm;
