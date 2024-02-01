'use client'

import { search } from "@/app/lib/entity/paper"
import Link from "next/link"
import { FoldIcon, TimeIcon } from "../icons/icon"
import Search from "./search"

interface SearchListProps {
    value: {
        query: string,
        data: search[]
    }
}

export default function SearchList({ value }: SearchListProps) {

    const onSearchChange = (value: string) => {

    }

    const a = () => {
        {
            value.data.map((item, index) => {
                return (
                    <div key={index} className="w-full h-28 my-4 rounded bg-origin-50">
                        <Link href={"/paper/" + item.type + "/" + item.uid}>
                            <div className="w-full h-full text-[#989898]">
                                <div className="flex justify-between items-center w-full pt-2 px-4 text-nowrap">
                                    <div className="inline-block text-2xl max-w-[350px] truncate text-black">
                                        {item.title}
                                    </div>
                                    <div className="max-w-[100px] truncate relative flex-nowrap flex items-center">
                                        <FoldIcon className="mx-1" width="16px" />
                                        {item.type}
                                    </div>
                                    <div className="max-w-[170px] truncate relative flex-nowrap flex items-center">
                                        <TimeIcon className="mx-1" width="16px" />
                                        {item.date}
                                    </div>
                                </div>
                                <div className="w-[750px] break-words line-clamp-3 px-4 py-1 overflow-hidden text-black">
                                    {item.description}
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }

    return (
        <div className="w-full md:w-[750px] mx-auto">
            <div className="w-full h-full pt-[30%]">
                <Search searchWidth="100%" onSearchChange={onSearchChange} />
                <div className="w-full h-full my-8">
                    {value.data.length !== 0 ? <>
                        {
                            value.data.map((item, index) => {
                                return (
                                    <div key={index} className="w-full h-28 my-4 rounded bg-origin-50">
                                        <Link href={"/paper/" + item.type + "/" + item.uid}>
                                            <div className="w-full h-full text-[#989898]">
                                                <div className="flex justify-between items-center w-full pt-2 px-4 text-nowrap">
                                                    <div className="inline-block text-2xl max-w-[350px] truncate text-black">
                                                        {item.title}
                                                    </div>
                                                    <div className="max-w-[100px] truncate relative flex-nowrap flex items-center">
                                                        <FoldIcon className="mx-1" width="16px" />
                                                        {item.type}
                                                    </div>
                                                    <div className="max-w-[170px] truncate relative flex-nowrap flex items-center">
                                                        <TimeIcon className="mx-1" width="16px" />
                                                        {item.date}
                                                    </div>
                                                </div>
                                                <div className="w-[750px] break-words line-clamp-3 px-4 py-1 overflow-hidden text-black">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </> : <>
                        <div className="text-4xl text-center mt-16">未找到文章</div>
                    </>
                    }
                </div>

            </div>
        </div>
    )
}