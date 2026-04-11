'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const pages = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'PROJECT', path: '/project' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const isActive = (path: string) => {
        return currentPath === path;
    }

    return (
        <>
            <header className="fixed w-full top-0 shadow-[0_1px_12px_rgba(0,0,0,0.06)] z-99999">
                <div className={`flex transition-all duration-200 bg-white py-4 max-w-full mx-auto text-center items-center justify-around z-50`}>

                    <div className="logo"><Link href="/" className="text-xl font-medium">CHONLAPHAT</Link></div>

                    <div className={`toggle_btn lg:hidden text-xl`} onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    </div>

                    <div className={`navbar ${isOpen ? "flex" : "hidden"} lg:relative lg:p-0 lg:block absolute lg:bg-transparent bg-white right-0 left-0 lg:top-0 top-14`}>
                        <ul className="flex flex-col lg:flex-row gap-1 text-center w-full">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link href={page.path} onClick={() => setIsOpen(false)} className={isActive(page.path)
                                    ? 'text-sky-500 bg-sky-50 p-5 lg:px-3 lg:py-2 lg:rounded-full text-xs font-medium transition-all block'
                                    : 'text-gray-600 p-5 lg:px-3 lg:py-2 hover:text-black hover:bg-gray-50 rounded-full duration-200 text-xs font-medium transition-all block'}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </header>
        </>
    );
}