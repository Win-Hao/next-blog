import React from 'react';
import ManagerList from "@/app/(admin)/_components/manager/ManagerList";
import {FetchManagers} from "@/lib/data";
import {Manager} from "@/types";

const ManagerPage = async () => {
    const managers: Manager[] = await FetchManagers()
    return (
        <div>
            <ManagerList managers={managers}/>
        </div>
    );
};

export default ManagerPage;
