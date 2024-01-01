'use client'

import clsx from "clsx";
import { useLayoutEffect, useState } from "react";
import NavLinks from "./navLinks";


function isScrollTop(): boolean {
    return document.documentElement.scrollTop === 0
}

export default function Navbar() {
    const [backgroundColor, setBackgroundColor] = useState<boolean | null>(true)

    useLayoutEffect(() => {
        const handleScroll = () => {
            setBackgroundColor(isScrollTop())
        }
        window.scrollTo(0, 0)
        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={clsx("w-full h-14 hidden text-center sm:flex text-white transition-all",
            {
                "bg-[#ffffff00]": backgroundColor,
                "bg-[rgba(0,0,0,0.7)]": !backgroundColor
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
