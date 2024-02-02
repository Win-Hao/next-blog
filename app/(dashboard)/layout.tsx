import React from 'react';
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <nav>
                <Header/>
                <Navbar/>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default DashboardLayout;
