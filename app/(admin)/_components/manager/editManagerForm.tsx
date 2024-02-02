import React from 'react';
import * as actions from "@/actions/manager/editManager";
import {Card} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Manager, Role} from "@/types";

interface EditManagerFormProps {
    roles: Role[]
    manager: Manager
}

const EditManagerForm = ({roles, manager}: EditManagerFormProps) => {
    return (

        <>
            <form action={actions.EditManager}>
                <Card className='grid grid-cols-3 max-w-screen-2xl p-5'>
                    <div className='col-span-1'>
                        <h1 className='text-lg font-semibold'>更改用户信息</h1>
                        <p className='leading-6 tracking-wide'>你可以在此处更改用户信息，请正确输入你的用户信息</p>
                    </div>

                    <div className='col-span-2 grid gap-6 select-none '>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-3 grid gap-2 '>
                                <Label htmlFor='username' className='text-lg'>
                                    姓名
                                </Label>
                                <Input
                                    disabled
                                    type='text'
                                    id='username'
                                    name='username'
                                    value={manager.username}
                                    placeholder='username'
                                />
                            </div>
                            <div className='col-span-3 grid gap-2 '>
                                <Label htmlFor='password' className='text-lg'>
                                    密码
                                </Label>
                                <Input
                                    disabled
                                    type='password'
                                    id='password'
                                    name='password'
                                    placeholder='password'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-6'>
                            <div className='col-span-full grid gap-2 '>
                                <Label htmlFor='mobile' className='text-lg'>
                                    手机号码
                                </Label>
                                <Input type='number'
                                       id='mobile'
                                       name='mobile'
                                       defaultValue={manager.mobile}
                                       placeholder='mobile'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-full grid gap-2 '>
                                <Label htmlFor='email' className='text-lg'>
                                    邮箱地址
                                </Label>
                                <div
                                    className='flex border border-input rounded-md bg-white/5 ring-1 ring-inset  ring-white/10 focus-within:ring-1 focus-within:ring-inset focus-within:ring-black  p-0.5 '>
                                    <span className='pl-2 flex items-center select-none'>@qq.com/</span>
                                    <Input type='email'
                                           id='email'
                                           name='email'
                                           defaultValue={manager.email}
                                           placeholder='email'
                                           className='border-0 focus-visible:ring-0 rounded-none'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='col-span-2 grid gap-2'>
                                <Label htmlFor='role' className='text-lg'>
                                    角色
                                </Label>
                                <div>
                                    <Select name='role_id' defaultValue={manager.role_id.toString()}>
                                        <SelectTrigger>
                                            <SelectValue placeholder='请选择角色'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {roles.map((role) => (
                                                    <SelectItem key={role.id} id='role' value={role.id.toString()}>
                                                        {role.title}
                                                    </SelectItem>))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-3 grid gap-2'>
                                <Label htmlFor='role' className='text-lg'>
                                    超级管理员
                                </Label>
                                <div>
                                    <Select name='is_super' defaultValue={manager.is_super.toString()}>
                                        <SelectTrigger>
                                            <SelectValue placeholder='是否为超级管理员'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value='0'>是</SelectItem>
                                                <SelectItem value='1'>否</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className='col-span-3 grid gap-2'>
                                <Label htmlFor='status' className='text-lg'>
                                    状态
                                </Label>
                                <div>
                                    <Select name='status' defaultValue={manager.status ? 'true' : 'false'}>
                                        <SelectTrigger>
                                            <SelectValue placeholder='请选择你的状态'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value='true'>true</SelectItem>
                                                <SelectItem value='false'>false</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <input type='hidden' defaultValue={manager.id} name='id'/>
                        </div>
                        <div className='flex justify-end'>
                            <Button type='submit' className=' text-lg px-6 py-4'>Save</Button>
                        </div>
                    </div>
                </Card>
            </form>
        </>
    );
};

export default EditManagerForm;
