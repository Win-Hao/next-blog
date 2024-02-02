import React from 'react';
import Sidebar from "@/app/(admin)/_components/sidebar/sidebar";
import Navbar from "@/app/(admin)/_components/navbar/navbar";


const AdminLayout = ({children}: { children: React.ReactNode }) => {
    return (

        <div className='flex flex-row'>
            <nav className='h-screen basis-1/5 bg-gray-200'>
                <Sidebar/>
            </nav>
            <div className='basis-4/5'>
                <div className='p-5'><Navbar/></div>
                <div className='px-3'>
                    {children}
                </div>
            </div>

        </div>

    );
};

export default AdminLayout;
