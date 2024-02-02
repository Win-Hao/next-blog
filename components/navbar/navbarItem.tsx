import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavbarItemProps {
    label: string,
    path: string,
}

const NavbarItem = ({label, path}: NavbarItemProps) => {
    const currentPath = usePathname()
    const isActive = currentPath.includes(path) && path.length > 1 || currentPath === path
    return (
        <div>
            <Link className={`text-white text-lg hover:text-blue-500 transition-colors 
               ${isActive && 'underline underline-offset-8 decoration-4 decoration-blue-500 '}
            `} href={path}>{label}</Link>
        </div>
    );
};

export default NavbarItem;
