import { useState } from "react";
import { CheckIcon, PencilSquareIcon, TrashIcon, XMarkIcon } from "../icons/icon";
import Pagination from "../pagination/pagination";
import Search from "../search/search";

const value = [
    { id: "12341111111111111111133333333333333333333", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 1 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 1 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
    { id: "1234", title: "简单博客", type: "java", time: "3024-1-23", status: 0 },
]

// 导出Table函数
export default function Table() {
    // 声明一个搜索状态变量，并设置初始值为空字符串
    const [search, setSearch] = useState<string>("");
    // 声明一个数据变量，并设置初始值为空数组
    const [data, setData] = useState<any[]>([]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-10">
                <Search searchValue={setSearch} searchWidth="512px" />
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
                                        <span className="px-2 truncate">{item.id}</span>
                                        <span className="px-2 truncate">{item.title}</span>
                                        <span className="px-2 truncate">{item.type}</span>
                                        <span className="px-2 truncate">{item.time}</span>
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
                                            <button className="mx-2 h-10 w-10 border-solid border-2 px-1 py-1 rounded hover:scale-[1.2] transition-transform duration-300">
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
            <Pagination data={value} setData={setData} pageSize={6} />
        </div>
    )
}