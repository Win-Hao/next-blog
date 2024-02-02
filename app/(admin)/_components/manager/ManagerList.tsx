import React from 'react';
import {Manager} from "@/types";
import {Card} from "@/components/ui/card";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {format} from "date-fns";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface ManagerListProps {
    managers: Manager[]
}

const ManagerList = ({managers}: ManagerListProps) => {
    return (
        <Card>
            <Table>
                <TableCaption>A list of your managers.</TableCaption>
                <TableHeader>
                    <TableRow className='bg-muted/50'>
                        <TableHead>管理员名称</TableHead>
                        <TableHead>管理员电话</TableHead>
                        <TableHead>管理员邮箱</TableHead>
                        <TableHead>管理员角色</TableHead>
                        <TableHead>创建时间</TableHead>
                        <TableHead className='text-center'>操作</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {managers.map((manager) => (
                        <TableRow key={manager.id} className='odd:bg-white even:bg-muted/50'>
                            <TableCell>{manager.username}</TableCell>
                            <TableCell>{manager.mobile}</TableCell>
                            <TableCell>{manager.email}</TableCell>
                            <TableCell>{manager.role.title}</TableCell>
                            <TableCell>{format(new Date(manager.created_at * 1000), 'yyyy/MM/dd')}</TableCell>
                            <TableCell className='text-center'>
                                <Button variant='link' size='xs'>
                                    <Link href={`/manager/${manager.id}/edit`}>
                                        修改
                                    </Link>
                                </Button>
                                <Button variant='link' size='xs'>
                                    删除
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default ManagerList;
