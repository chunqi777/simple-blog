'use client'

// 导入getSearch函数，search函数，debounce函数，clsx函数，Link函数，useRouter函数，useLayoutEffect函数，useRef函数，useState函数，Search函数，NavLinks函数，navbar.css文件
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


// 定义isScrollTop函数，用于判断页面是否滚动到顶部
function isScrollTop(): boolean {
    return document.documentElement.scrollTop === 0
}

// 定义Navbar函数，用于渲染导航栏
export default function Navbar() {
    // 使用useState函数定义ScrollTop状态，用于控制背景颜色
    const [ScrollTop, setBackgroundColor] = useState<boolean | null>(true)
    // 使用useState函数定义searchList状态，用于存储搜索结果
    const [searchList, setSearchList] = useState<search[]>([])
    // 使用useRef函数定义searchValue引用，用于存储搜索值
    const searchValue = useRef("")
    // 使用useRouter函数定义router引用，用于获取路由信息
    const router = useRouter()

    // 定义search函数，用于搜索数据
    const search = debounce(async (value: string) => {
        const data = await getSearch(value)

        setSearchList(data)
    }, 500);

    // 定义handleChange函数，用于处理搜索值的变化
    const handleChange = (value: string) => {
        searchValue.current = value;

        if (value.length === 0) {
            setSearchList([]);
        } else {
            search(value);
        }
    };

    // 定义onPressEnter函数，用于跳转到搜索页面
    const onPressEnter = () => {
        if (searchValue.current.length > 0) {
            router.push(`/search?q=${searchValue.current}`)
        } else {
            router.push('/search')
        }

        setSearchList([]);
    }

    // 使用useLayoutEffect函数，在组件挂载时，添加滚动事件监听，并设置背景颜色
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

    // 返回渲染结果
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