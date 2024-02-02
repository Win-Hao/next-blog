import React from 'react';
import {Card} from "@/components/ui/card";
import EditRoleForm from "@/app/(admin)/_components/role/editRoleForm";

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

const EditPage = ({params, searchParams}: EditPageProps) => {

    return (
        <Card className='p-5 '>
            <EditRoleForm params={params} searchParams={searchParams}/>
        </Card>
    );
};

export default EditPage;
