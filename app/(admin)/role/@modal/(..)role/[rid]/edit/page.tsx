import React from 'react';
import EditDialog from "@/app/(admin)/_components/role/editDialog";

interface InterceptedPageProps {
    params: {
        rid: string
    }
    searchParams: {
        title: string,
        description: string,
        status: string
    }
}

const InterceptedPage = ({params, searchParams}: InterceptedPageProps) => {

    return (
        <EditDialog title={searchParams.title}
                    description={searchParams.description}
                    status={searchParams.status}
                    rid={parseInt(params.rid)}/>

    );
};

export default InterceptedPage;
