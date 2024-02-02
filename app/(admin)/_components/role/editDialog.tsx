'use client'
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button"
import {useFormState} from "react-dom";
import * as actions from "@/actions/role/editRole";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import {usePathname, useRouter} from "next/navigation";

const EditDialog = ({title, description, status, rid}: {

    title: string,
    description: string,
    status: string
    rid: number
}) => {
    const [isOpen, setIsOpen] = useState(true)
    const router = useRouter()
    const pathname = usePathname()
    const [formState, action] = useFormState(actions.EditRole, {
        error: {}
    })
    useEffect(() => {
        // 如果当前路由是'/role'，则打开对话框
        if (pathname !== '/role') {
            setIsOpen(true);
        }
    }, [pathname]);
    return (
        <form action={action}>
            <AlertDialog open={isOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button onClick={() => {
                            setIsOpen(!isOpen)
                            router.push('/role')
                        }}>Cancel</Button>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </form>
    );
};

export default EditDialog;
