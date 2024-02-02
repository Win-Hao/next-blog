'use client'
import {useRouter} from "next/navigation";
import NavbarItem from "./navbarItem"
import {paths} from "@/constants";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const router = useRouter()

    return (
        <>
            <div
                className='flex flex-row justify-center items-center space-x-20 h-16 bg-zinc-400 mb-3 select-none'>
                {paths.map((path) => <NavbarItem key={path.id} label={path.label} path={path.path}/>)}
            </div>
        </>

    );
};

export default Navbar;
