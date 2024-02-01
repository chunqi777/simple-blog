'use client'

import { fetchAllPaperData } from "@/app/lib/data";
import { tableCard } from "@/app/lib/entity/paper";
import { useLayoutEffect, useRef, useState } from "react";
import { CheckIcon, PencilSquareIcon, TrashIcon, XMarkIcon } from "../icons/icon";
import Pagination from "../pagination/pagination";
import Search from "../search/search";


// 导出Table函数
export default function Table() {
    // 定义一个value状态，用于存储数据
    const [value, setValue] = useState<tableCard[]>([])
    // 使用useRef创建一个valueRef，用于存储value的值
    const valueRef = useRef(value)
    // 定义一个data状态，用于存储当前页的数据
    const [data, setData] = useState<tableCard[]>(value)
    // 使用useRef创建一个pageCurrent，用于存储当前页
    const pageCurrent = useRef(1)
    // 定义每一页显示的数据条数
    const pageSize = 6
    // 定义数据的总条数
    const total = valueRef.current.length


    // 使用useLayoutEffect，在页面渲染时，获取数据
    useLayoutEffect(() => {
        const init = async () => {
            const paperData = await fetchAllPaperData()
            // 更新value状态
            setValue(paperData)
            // 更新valueRef的值
            valueRef.current = paperData
            // 更新当前页的数据
            handlePageChange()
        }

        init()
    }, [])

    // 定义一个handleSearchChange函数，用于处理搜索功能
    const handleSearchChange = (search: string) => {
        // 如果搜索内容为空，则将valueRef的值赋值给value
        if (search === "") {
            valueRef.current = value
            // 将当前页重置为1
            pageCurrent.current = 1
            // 更新当前页的数据
            handlePageChange()
            return;
        }

        // 根据搜索内容，过滤数据
        const matchData = valueRef.current.filter((item) => item.title.includes(search))
        // 将过滤后的数据赋值给valueRef
        valueRef.current = matchData
        // 更新当前页的数据
        handlePageChange()
    }

    // 定义一个handlePageChange函数，用于处理页数变化
    const handlePageChange = (page: number = 1) => {
        // 根据当前页和每页显示的数据条数，获取当前页的数据
        setData(valueRef.current.slice((page - 1) * pageSize, page * pageSize))
    }

    const handleEditor = (data: tableCard) => {
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-10">
                <Search onSearchChange={handleSearchChange} searchWidth="512px" />
            </div>
            <div className="w-full h-[calc(100%-120px)] min-h-[580px] bg-shadow rounded my-4">
                <div className="grid grid-cols-6 grid-rows-1 items-center justify-items-center h-16 text-xl font-bold">
                    <span className="px-4">#</span>
                    <span className="px-4">标题</span>
                    <span className="px-4">类别</span>
                    <span className="px-4">发布时间</span>
                    <span className="px-4">状态</span>
                </div>
                <div className="w-full h-[calc(100%-64px)] py-2 px-2 grid grid-cols-1 grid-rows-6 rounded-xl">
                    <>
                        {data.length !== 0 ?
                            data.map((item, index) => {
                                return (
                                    <div key={index} className="grid grid-cols-6 grid-rows-1  items-center text-center text-lg font-medium bg-white mb-1">
                                        <span className="px-2 truncate">{item.uid}</span>
                                        <span className="px-2 truncate">{item.title}</span>
                                        <span className="px-2 truncate">{item.type}</span>
                                        <span className="px-2 truncate">{item.date}</span>
                                        {item.status === 0 ? (
                                            <div className="w-full h-full relative select-none">
                                                <span className="bg-green-500 w-4/5 h-10 rounded-full flex items-center justify-center text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                                    <span>已发布</span>
                                                    <CheckIcon className="ml-4" strokeWidth={3} width="24px" />
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full relative select-none">
                                                <span className="bg-red-500 w-4/5 h-10 rounded-full flex items-center justify-center text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                                    <span>未发布</span>
                                                    <XMarkIcon className="ml-4" strokeWidth={3} width="24px" />
                                                </span>
                                            </div>
                                        )}
                                        <div>
                                            <button onClick={() => handleEditor(item)} className="mx-2 h-10 w-10 border-solid border-2 px-1 py-1 rounded hover:scale-[1.2] transition-transform duration-300">
                                                <PencilSquareIcon width="28px" />
                                            </button>
                                            <button className="mx-2 h-10 w-10 border-solid border-2 px-1 py-1 rounded hover:scale-[1.2] transition-transform duration-300">
                                                <TrashIcon width="28px" />
                                            </button>
                                        </div>
                                    </div>
                                )
                            }) : (
                                <>
                                    <div className="text-4xl">loading...</div>
                                </>
                            )
                        }
                    </>
                </div>
            </div>
            <Pagination
                pageSize={pageSize}
                total={total}
                pageCurrent={pageCurrent}
                currentChange={handlePageChange}
            />
        </div>
    )
}