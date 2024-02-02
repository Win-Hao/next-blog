import React from 'react';
import {FetchRoles} from "@/lib/data";
import RoleDetail from "@/app/(admin)/_components/role/roleDetail";

const RolePage = async () => {
    const roles = await FetchRoles()
    return (
        <>
            {roles.length ? <RoleDetail roles={roles}/> : <p>not roles found</p>}
        </>
    );
};

export default RolePage;
