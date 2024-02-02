'use client'
import React from 'react';
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import * as actions from '@/actions/role/editRole'
import {useFormState} from "react-dom";

const EditDialog = ({children, rid, title, description, status}:
                        {
                            children: React.ReactNode,
                            rid: number,
                            title: string,
                            description: string,
                            status: boolean
                        }) => {
    const [formState, action] = useFormState(actions.EditRole, {
        error: {}
    })
    return (

        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="link" size='xs'>{children}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>EDIT ROLE</DialogTitle>
                        <DialogDescription>
                            Make changes to your role here. Click save when done.
                        </DialogDescription>
                    </DialogHeader>
                    <form action={action}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    name='title'
                                    defaultValue={title}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Input
                                    id="description"
                                    name='description'
                                    defaultValue={description}
                                    className="col-span-3"
                                />

                                <input type='hidden' name='rid' value={rid.toString()}/>
                            </div>
                            <div className='grid grid-cols-4 gap-4 items-center'>
                                <Label className='text-right'>Status</Label>
                                <Select name='status' defaultValue={status ? 'true' : 'false'}>
                                    <SelectTrigger className='w-[180px]'>
                                        <SelectValue placeholder={status ? 'true' : 'false'}/>
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
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit">Save changes</Button>
                                
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default EditDialog;
