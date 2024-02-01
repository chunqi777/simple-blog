'use client'

import { SignOut } from "@/app/lib/data"
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
                                    className={clsx("flex justify-center items-center w-full h-14  rounded-xl transition-colors",
                                        "hover:text-[rgba(254,150,0)] hover:bg-origin-20",
                                        {
                                            "bg-origin-20 text-[rgba(254,150,0)]": pathname === link.href,
                                            "bg-shadow": pathname !== link.href
                                        })}>
                                    <div>{link.title}</div>
                                </Link>
                            </div>

                        )
                    })}
                </>
            </div>
            <form action={async () => {
                await SignOut();
            }}>
                <button className="bg-shadow w-full h-14 rounded-xl flex justify-center items-center hover:text-[rgba(254,150,0)] hover:bg-[rgba(254,150,0,.2)] transition-colors">
                    <span>
                        Sign Out
                    </span>
                </button>
            </form>
        </div>

    )
}