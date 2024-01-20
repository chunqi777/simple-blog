'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { title: 'Home', href: '/admin' },
    { title: 'Invoices', href: '/admin/invoice' },
    { title: 'adminHome', href: '/' },
]

export default function SideLinks() {
    const pathname = usePathname()
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex flex-1 flex-col bg-shadow overflow-hidden my-4 rounded-xl">
                <>
                    {links.map((link, index) => {
                        return (
                            <div key={index} className="w-full h-[64px] bg-white">
                                <Link href={link.href} key={index}
                                    className={clsx("flex justify-center items-center w-full h-14 bg-shadow rounded-xl transition-colors",
                                        "hover:text-[rgba(254,150,0)] hover:bg-[rgba(254,150,0,.2)]",
                                        {
                                            "bg-[rgba(254,150,0,.2)] text-[rgba(254,150,0)]": pathname === link.href,
                                        })}>
                                    <div>{link.title}</div>
                                </Link>
                            </div>

                        )
                    })}
                </>
            </div>
            <button className="bg-shadow w-full h-14 rounded-xl hover:text-[rgba(254,150,0)] hover:bg-[rgba(254,150,0,.2)] transition-colors">
                Sign Out
            </button>
        </div>

    )
}