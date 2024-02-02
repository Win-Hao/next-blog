import React from 'react';
import AddRoleForm from "@/app/(admin)/_components/role/addRoleForm";
import {Card} from "@/components/ui/card";

const NewRolePage = () => {
    return (
        <Card className='p-5'>
            <AddRoleForm/>
        </Card>
    );
};

export default NewRolePage;
