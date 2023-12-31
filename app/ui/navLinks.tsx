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
                            'flex w-[120px] text-nowrap h-full  relative text-xl hover:text-[#FE9600] transition-[color] duration-[450ms]',
                            'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:hover:w-[115px] after:h-1 after:rounded-[2.5px] after:transition-all after:duration-[450ms] after:hover:bg-[#FE9600]',
                            'focus:text-[#FE9600] focus:after:w-[115px] focus:after:bg-[#FE9600]'
                        )}
                    >
                        <p className="w-full h-full flex items-center justify-center">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}