'use client'
import React, {useState} from 'react';
import {Card} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Module} from "@/types";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import * as actions from '@/actions/access/createAccess'

interface CreateAccessFormProps {
    modules?: Module[]
}

const CreateAccessForm = ({modules}: CreateAccessFormProps) => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    };
    const action = actions.CreateAccess.bind(null, isChecked)
    return (
        <form action={action}>
            <Card className='max-w-6xl mx-auto p-5'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1'><h1>介绍</h1></div>
                    <div className='col-span-2'>
                        <div className='grid gap-3'>
                            <div className=' grid grid-cols-12 gap-2'>
                                <Label htmlFor='module_name' className='text-lg col-span-2 flex items-center'>
                                    模块名称
                                </Label>
                                <Input id='module_name' name='module_name' className='col-span-5'/>
                            </div>
                            <div className=' grid grid-cols-12 '>
                                <Label className='flex items-center text-lg col-span-2'>节点类型</Label>
                                <Select name='type'>
                                    <SelectTrigger className='col-span-2'>
                                        <SelectValue placeholder='选择一个模块'/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value='1'>模块</SelectItem>
                                            <SelectItem value='2'>菜单</SelectItem>
                                            <SelectItem value='3'>操作</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className=' grid grid-cols-12 gap-2'>
                                <Label htmlFor='action_name' className='text-lg col-span-2 flex items-center'>
                                    操作名称
                                </Label>
                                <Input id='action_name' name='action_name' className='col-span-5'/>
                            </div>
                            <div className=' grid grid-cols-12 gap-2'>
                                <Label htmlFor='url' className='text-lg col-span-2 flex items-center'>
                                    操作地址
                                </Label>
                                <Input id='url' name='url' className='col-span-5'/>
                            </div>
                            <div className=' grid grid-cols-12 '>
                                <Label className='flex items-center text-lg col-span-2'>所属模块</Label>
                                <Select name='module_id'>
                                    <SelectTrigger className='col-span-2'>
                                        <SelectValue placeholder='选择一个模块'/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value='0'>顶级模块</SelectItem>
                                            {modules?.map((module) =>
                                                (<SelectItem
                                                    key={module.id}
                                                    value={module.id.toString()}>
                                                    {module.name}
                                                </SelectItem>))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className=' grid grid-cols-12 gap-2'>
                                <Label htmlFor='sort' className='text-lg col-span-2 flex items-center'>
                                    排序
                                </Label>
                                <Input id='sort' name='sort' defaultValue='100' className='col-span-5'/>
                            </div>
                            <div className=' grid grid-cols-12 gap-2'>
                                <Label htmlFor='description' className='text-lg col-span-2 flex items-center'>
                                    描述
                                </Label>
                                <Textarea id='description'
                                          name='description'
                                          placeholder="输入你的模块描述"
                                          className='col-span-10'/>
                            </div>
                            <div className="grid grid-cols-12 gap-2">
                                <label
                                    htmlFor="status"
                                    className="text-lg col-span-2"
                                >
                                    状态
                                </label>
                                <div className='flex items-center gap-4'>
                                    <Checkbox id="status"
                                              checked={isChecked}
                                              onClick={handleCheckboxChange}/>
                                    <Checkbox id="status" checked={!isChecked}
                                              onClick={handleCheckboxChange}/>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <Button type='submit' className='text-lg'>submit</Button>
                        </div>
                    </div>
                </div>
            </Card>

        </form>
    );
};

export default CreateAccessForm;
