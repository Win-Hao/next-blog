import React from 'react';
import MenuItems from "@/components/header/MenuItems";
import {FaHome} from "react-icons/fa";
import {RiErrorWarningFill} from "react-icons/ri";
import Link from "next/link";
import * as actions from '@/actions/auth/signOut'
import {FaPowerOff} from "react-icons/fa";
import {Paths} from "@/types";
import {Button} from '@/components/ui/button'

const Paths: Paths[] = [
    {id: 1, title: 'HOME', address: '/', icon: <FaHome/>},
    {id: 2, title: 'ABOUT', address: '/about', icon: <RiErrorWarningFill/>}
]
const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center h-20  max-w-screen-2xl sm:mx-auto">
                <div className="flex">
                    {Paths.map((path) =>
                        <MenuItems
                            key={path.id}
                            Title={path.title}
                            Icon={path.icon}
                            Address={path.address}
                        />)}
                </div>
                <div className="flex space-x-4 items-center mr-4">
                    <Link href='/' className='select-none'>
                        <span className='text-2xl bg-blue-500 px-3 py-2 rounded-2xl text-white font-bold '>ZYG</span>
                        <span className='text-xl hidden sm:inline'>BLOG</span>
                    </Link>
                    <form action={actions.SignOut}>
                        <Button type='submit'
                                className=' border-2 border-red-400 bg-white text-black hover:text-white hover:bg-red-400'>
                            <p className='hidden sm:inline'>sign out</p>
                            <div className='sm:hidden text-xl'><FaPowerOff/></div>
                        </Button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default Header;
