'use client'

import clsx from "clsx";
import { useLayoutEffect, useState } from "react";
import NavLinks from "./navLinks";


function isScrollTop(): boolean {
    return document.documentElement.scrollTop === 0
}

export default function Navbar() {
    const [ScrollTop, setBackgroundColor] = useState<boolean | null>(true)

    useLayoutEffect(() => {
        const handleScroll = () => {
            setBackgroundColor(isScrollTop())
        }

        const handleLocalStorage = () => {
            localStorage.clear()
            window.scrollTo(0, 0)
        }

        handleScroll()

        window.addEventListener("beforeunload", handleLocalStorage)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("beforeunload", handleLocalStorage)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={clsx("w-full h-14 hidden z-[9999] text-center sm:flex text-[#464646] hover:bg-[rgba(255,255,255,.95)] transition-all duration-[400ms] font-[QuicksandBold]",

            {
                "bg-[#ffffff00]": ScrollTop,
                "bg-[rgba(255,255,255,.95)]": !ScrollTop,
                "shadow-[0_1px_40px_-8px_rgba(0,0,0,.5)]": !ScrollTop,
            })}>
            <div className="w-full h-full flex px-4 justify-between">
                <div className="min-w-52 text-4xl opacity-100 flex items-center justify-center">
                    <div>LOGO</div>
                </div>
                <div className="flex justify-end h-full items-center">
                    <div className="min-w-52 text-4xl">
                        <div>SEARCH</div>
                    </div>
                    <div className="flex justify-center h-full">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}
