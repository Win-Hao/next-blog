import React from 'react';
import EditManagerForm from "@/app/(admin)/_components/manager/editManagerForm";
import {FetchManager, FetchRoles} from "@/lib/data";

const Page = async ({params}: {
    params: {
        id: string
    }
}) => {
    const roles = await FetchRoles()
    const manager = await FetchManager(params.id)
    return (
        <div>
            <EditManagerForm roles={roles} manager={manager}/>
        </div>
    );
};

export default Page;
