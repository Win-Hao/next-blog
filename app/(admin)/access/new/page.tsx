import React from 'react';
import CreateAccessForm from "@/app/(admin)/_components/access/CreateAccessForm";
import {FetchModule} from "@/lib/data";

const NewAccessPage = async () => {
    const modules = await FetchModule()
    return (
        <div>
            <CreateAccessForm modules={modules}/>
        </div>
    );
};

export default NewAccessPage;
