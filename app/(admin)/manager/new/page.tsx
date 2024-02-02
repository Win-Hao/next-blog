import React from 'react';
import {FetchRoles} from "@/lib/data";
import CreateManagerForm from "@/app/(admin)/_components/manager/CreateManagerForm";

const NewManagerPage = async () => {
    const Roles = await FetchRoles()
    return (
        <>

            <CreateManagerForm roles={Roles}/>
        </>
    );
};

export default NewManagerPage;
