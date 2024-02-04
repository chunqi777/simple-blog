'use client'

import { getSearch } from "@/app/lib/data"
import { search } from "@/app/lib/entity/paper"
import { debounce } from "@/app/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import Search from "./search"
import SearchCard from "./searchCard"

// 定义一个函数组件 SearchList
export default function SearchList() {
    // 使用 useSearchParams 获取搜索参数
    const params = useSearchParams()
    // 使用 useRouter 获取路由
    const router = useRouter()

    // 使用 useState 定义三个状态变量 isEmpty、list 和 searchList
    const [isEmpty, setEmpty] = useState<boolean>(true)
    const [list, setList] = useState<search[]>([])
    const [searchList, setSearchList] = useState<search[]>([])

    // 使用 useRef 定义一个引用变量 queryRef
    const queryRef = useRef("")

    // 使用 debounce 创建一个防抖函数 getSearchList，接收一个参数 value
    const getSearchList = debounce(async (value: string) => {
        // 如果 value 不为空，则请求数据
        if (Boolean(value.trim())) {
            const data = await getSearch(value)
            setSearchList(data)
        } else {
            // 如果 value 为空，则清空 searchList
            setSearchList([])
        }
    }, 300)

    // 定义一个函数 fetchSearchList，接收一个参数 value
    const fetchSearchList = async (value: string) => {
        // 请求数据
        const data = await getSearch(value)
        // 如果 data 为空，则设置 isEmpty 为 false
        if (data.length === 0) {
            setEmpty(false)
        } else {
            // 如果 data 不为空，则设置 isEmpty 为 true
            setEmpty(true)
        }
        // 设置 list 为 data
        setList(data)
    }

    // 定义一个函数 onSearchChange，接收一个参数 value
    const onSearchChange = (value: string) => {
        // 将 queryRef 的值设置为 value
        queryRef.current = value
        // 调用 getSearchList 函数，传入 value
        getSearchList(value);
    }

    // 定义一个函数 onPressEnter
    const onPressEnter = async () => {
        // 如果 queryRef 的值不为空，则调用 fetchSearchList 函数，传入 queryRef 的值
        if (queryRef.current) {
            await fetchSearchList(queryRef.current)
            // 跳转到搜索页面，传入 queryRef 的值
            router.push(`/search?q=${queryRef.current}`)
        } else {
            // 如果 queryRef 的值为空，则调用 fetchSearchList 函数，传入 queryRef 的值
            await fetchSearchList(queryRef.current)
            // 跳转到搜索页面
            router.push('/search')
        }
    }

    // 使用 useEffect 监听 params 的变化，当 params 发生变化时，调用 fetchSearchList 函数
    useEffect(() => {
        const init = async () => {
            await fetchSearchList(params.get('q') as string)
        }
        init();
    }, [params])

    // 返回一个 div 元素，包含 Search 组件和 SearchCard 组件
    return (
        <div className="w-full md:w-[750px] mx-auto">
            <div className="w-full h-full pt-[30%]">
                <Search searchWidth="100%" onSearchChange={onSearchChange} searchList={searchList} onPressEnter={onPressEnter} />
                {/* 如果 isEmpty 为 true，则显示 SearchCard 组件，否则显示一个提示文本 */}
                {isEmpty ? <SearchCard searchList={list} /> : <div className="text-4xl text-center mt-16">未找到文章</div>}
            </div>
        </div>
    )
}