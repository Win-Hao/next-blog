'use client'
import React from 'react';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Card} from "@/components/ui/card";
import {Role} from "@/types";
import {useRouter, useSearchParams} from "next/navigation";
import DeleteDialog from "@/app/(admin)/_components/ui/deleteDialog";
import {Button} from "@/components/ui/button";

interface RoleDetailProps {
    roles: Role[]
}

const RoleDetail = ({roles}: RoleDetailProps) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const clickHandler = (role: Role) => {
        const Params = new URLSearchParams(searchParams)
        Params.set('title', role.title)
        Params.set('description', role.description)
        Params.set('status', role.status ? 'true' : 'false')
        router.push(`/role/${role.id}/edit?${Params}`)
    }

    return (
        <>
            <Card className='select-none'>
                <Table>
                    <TableCaption>A list of your roles.</TableCaption>
                    <TableHeader>
                        <TableRow className='bg-muted/50'>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Operation</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roles.map((role) => (
                            <TableRow key={role.id} className='odd:bg-white even:bg-muted/50'>
                                <TableCell>{role.title}</TableCell>
                                <TableCell>{role.description}</TableCell>
                                <TableCell>{role.status ? <p>true</p> : <p>false</p>}</TableCell>
                                <TableCell className='flex gap-1'>
                                    <Button variant='link' size='xs' onClick={() => clickHandler(role)}>
                                        修改
                                    </Button>
                                    <DeleteDialog rid={role.id}>
                                        删除
                                    </DeleteDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </>
    );
};

export default RoleDetail;
