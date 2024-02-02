'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {JSX} from "react/jsx-dev-runtime";


interface HeaderProps {
    Title: string
    Icon: React.JSX.Element
    Address: string
}

const MenuItems = ({Title, Icon, Address}: HeaderProps) => {
    const currentPath = usePathname()
    return (
        <div>
            <Link href={Address} className='mx-4 lg:mx-6 hover:text-blue-500 select-none'>
                <div className='text-2xl sm:hidden mx-4'>{Icon}</div>
                <p className={`hidden text-2xl font-medium sm:inline ${
                    currentPath === Address && 'text-blue-500'
                }`}>{Title}</p>
            </Link>
        </div>
    );
};

export default MenuItems;
