import { search } from "@/app/lib/entity/paper";
import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, useLayoutEffect, useState } from "react";
import { SearchIcon, XCircleIcon } from "../icons/icon";
import './search.css';

// 定义 searchProps 接口，用于限制 Search 组件的属性
interface searchProps extends HTMLAttributes<HTMLElement> {
    searchWidth?: string;
    searchHeight?: string;
    placeholder?: string;
    searchType?: string;
    searchList?: search[];
    onSearchChange: (search: string) => void;
    onPressEnter?: () => void;
}
// 导出 Search 组件
export default function Search({
    searchWidth = "256px", searchHeight = "40px", placeholder = "Search", searchType = "text",
    searchList = [], onSearchChange, onPressEnter = () => { }, ...rest
}: searchProps) {
    // 使用 useState 创建 showIcon 状态
    const [showIcon, setShowIcon] = useState(false);
    const [showSearchList, setShowSearchList] = useState(false);

    // 定义 handleChange 函数，用于处理 input 元素的 change 事件
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
        handleFocus();
    }

    // 定义 handleClear 函数，用于处理清空按钮的点击事件
    const handleClear = () => {
        const input = document.getElementsByClassName("search-input")[0] as HTMLInputElement; // 重新获取焦点
        input.focus();
        input.value = "";
        onSearchChange("");
    }

    // 定义 handleFocus 函数，用于处理 input 元素的 focus 事件
    const handleFocus = () => {
        setShowIcon(true);
        setShowSearchList(true);
    }

    // 定义 handleBlur 函数，用于处理 input 元素的 blur 事件
    const handleBlur = () => {
        setTimeout(() => {
            setShowIcon(false);
            setShowSearchList(false);
        }, 100)
    }

    const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const input = document.getElementsByClassName("search-input")[0] as HTMLInputElement;
            input.blur();
            onPressEnter();
            setTimeout(() => {
                setShowIcon(false);
                setShowSearchList(false);
            }, 100)
        }
    }

    useLayoutEffect(() => {
        const input = document.getElementsByClassName("search-input")[0] as HTMLInputElement;
        input.value = ""

        return () => {
            const input = document.getElementsByClassName("search-input")[0] as HTMLInputElement;
            input.value = ""
        }
    }, [])

    return (
        <div className={"relative rounded border-2 has-[:focus]:border-origin-100 has-[:focus]:bg-white transition-colors duration-300 " + rest.className} style={{ width: searchWidth, height: searchHeight }}>
            <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 z-50 text-[#73767a]" strokeWidth={1.8} />
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-full rounded">
                <input className="search-input peer w-full h-full px-10 border-[transparent] bg-[transparent] rounded placeholder:text-[#73767a] outline-none"
                    id="search" name="search" required type={searchType} placeholder={placeholder} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handlePressEnter} />
                {searchList.length !== 0 &&
                    <SearchList className={clsx({ "visible": showSearchList, "invisible": !showSearchList })} value={searchList} />
                }
            </div>
            {showIcon &&
                <button className="clean absolute top-1/2 -translate-y-1/2 right-3 text-[#73767a]" onClick={handleClear} >
                    <XCircleIcon strokeWidth={1.8} />
                </button>
            }
        </div>
    )
}

interface SearchListProps extends HTMLAttributes<HTMLElement> {
    value: search[]
}


function SearchList({ value = [], ...rest }: SearchListProps) {

    return (
        <div className={clsx("absolute top-[calc(100%-2px)] w-[calc(100%+4px)] max-h-44 overflow-y-scroll scroll-auto -left-[2px] bg-white border-2 border-origin-100 border-t-0 rounded rounded-t-none " + rest.className)}>
            <>
                {value.map((item, index) => {
                    return (
                        <Link className="group" href={"/paper/" + item.type + "/" + item.uid} key={index}>
                            <ul className="h-10 flex justify-center items-center group-first:!border-t-0 group-last:!border-b-0 group-odd:border-t-2 group-odd:border-b-2">
                                <span className="truncate">{item.title}</span>
                            </ul>
                        </Link>
                    )
                })}
            </>
        </div>
    )
}
