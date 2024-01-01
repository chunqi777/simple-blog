'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { name: 'Home', href: '/' },
    { name: 'OverView', href: '/dashboard/invoices' },
    { name: 'Type', href: '/dashboard/customers' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex w-[120px] text-nowrap h-full transition-all relative text-xl',
                            'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[115px] after:h-1 after:hover:bg-[rgba(255,255,255,0.7)] after:transition-all after:rounded-[2px]',
                            {
                                'after:bg-[rgba(255,255,255,0.7)]': pathname === link.href
                            }
                        )}
                    >
                        <p className="w-full h-full flex items-center justify-center">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}