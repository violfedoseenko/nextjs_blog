'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react";

type NavLink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({navLinks}: Props) => {
    const pathName = usePathname() //можем сравнивать текущее активное положение
    return (
        <>
        {navLinks.map( link => {
            const isActive = pathName === link.href
            return (
                <Link
                    key={link.label}
                    href={link.href}
                    className={isActive ? 'active' : ''}
                >
                    {link.label}
                </Link>
            )
        })

        }
        </>
)}

export {Navigation}