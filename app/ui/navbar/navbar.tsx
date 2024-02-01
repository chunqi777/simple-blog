'use client'

import { getSearch } from "@/app/lib/data";
import { search } from "@/app/lib/entity/paper";
import { debounce } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import Search from "../search/search";
import NavLinks from "./navLinks";
import './navbar.css';


function isScrollTop(): boolean {
    return document.documentElement.scrollTop === 0
}

export default function Navbar() {
    const [ScrollTop, setBackgroundColor] = useState<boolean | null>(true)
    const [searchList, setSearchList] = useState<search[]>([])
    const searchValue = useRef("")
    const router = useRouter()

    const search = (value: string) => {
        getSearch(value).then(res => {
            setSearchList(res)
        });
    };

    const handleChange = debounce((value: string) => {
        if (value !== "") {
            searchValue.current = value;
            search(value);
        } else if (value === "") {
            setSearchList([]);
        }
    }, 500);

    const onPressEnter = () => {
        router.push(`/search?value=${searchValue.current}`)
        setSearchList([]);
        searchValue.current = ""
    }

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
        <div className={clsx("navbar",
            {
                "bg-[transparent]": ScrollTop,
                "bg-[rgba(255,255,255,.95)]": !ScrollTop,
                "shadow-[0_1px_40px_-8px_rgba(0,0,0,.5)]": !ScrollTop,
            })}>
            <div className="w-full h-full flex px-4 justify-between">
                <Link href={"/"} className="min-w-52 text-4xl opacity-100 flex items-center justify-center">
                    <div>LOGO</div>
                </Link>
                <div className="flex justify-end h-full items-center">
                    <div className="min-w-52 text-xl">
                        <Search className={clsx({ "border-[transparent]": ScrollTop })} onSearchChange={handleChange} onPressEnter={onPressEnter} searchList={searchList} />
                    </div>
                    <div className="flex justify-center h-full">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}
