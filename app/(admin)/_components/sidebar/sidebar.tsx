'use client'
import React from 'react';
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {usePathname} from "next/navigation";

const MenuItems = [
    {
        title: '用户管理',
        list: [
            {
                title: '增加用户',
                path: '/manager/new'
            },
            {
                title: '用户列表',
                path: '/manager'
            }
        ]
    },
    {
        title: '角色管理',
        list: [
            {
                title: '增加角色',
                path: '/role/new'
            },
            {
                title: '角色列表',
                path: '/role'
            }
        ]
    },
    {
        title: '权限管理',
        list: [
            {
                title: '权限列表',
                path: '/access'
            },
            {
                title: '增加权限',
                path: '/access/new'
            }
        ]
    }
]
const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div>
            {MenuItems.map((item) => <Disclosure as='div' key={item.title}>
                {({open}) => (
                    <>
                        <Disclosure.Button
                            className='flex w-full items-center justify-between hover:bg-gray-300
                            px-5 py-4 select-none font-semibold transition duration-300
                            '>
                            <p>{item.title}</p>
                            <ChevronUpIcon
                                className={`${open ? 'rotate-180 transform' : 'rotate-90 transform'} h-5 w-5 text-zinc-800`}
                            />
                        </Disclosure.Button>
                        {item.list.map((list) =>
                            <Link href={list.path} key={list.title}>
                                <Disclosure.Panel className={`${list.path === pathname ? 'bg-gray-300' : ''}
                                w-full items-center justify-between hover:bg-gray-300 
                                px-10 py-4 select-none font-medium transition duration-300`}>
                                    {list.title}
                                </Disclosure.Panel>
                            </Link>)}

                    </>
                )}
            </Disclosure>)}

        </div>
    );
};

export default Sidebar;
