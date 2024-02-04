import { search } from "@/app/lib/entity/paper";
import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes, useState } from "react";
import { SearchIcon } from "../svgIcon/svgIcon";
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

    // 定义 handlePressEnter 函数，用于处理按下 enter 键的事件
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

    const handleButtonClick = () => {
        onPressEnter();
    }

    return (
        <div className={"relative flex rounded border-2 has-[:focus]:border-origin-100 has-[:focus]:bg-white transition-colors duration-300 " + rest.className} style={{ width: searchWidth, height: searchHeight }}>
            <div className="w-[85%] h-full rounded peer-[search-input]">
                <input className="search-input peer w-full h-full px-4 border-[transparent] bg-[transparent] rounded placeholder:text-[#73767a] outline-none"
                    name="search" required type={searchType} placeholder={placeholder} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handlePressEnter} />
                {searchList.length !== 0 &&
                    <SearchList className={clsx(
                        { "visible": showSearchList, "invisible": !showSearchList }
                    )} value={searchList} />
                }
            </div>
            <button className="flex-1 h-full relative rounded hover:bg-slate-400 transition-colors" onClick={handleButtonClick}>
                <SearchIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50" strokeWidth={1.8} />
            </button>
        </div>
    )
}

interface SearchListProps extends HTMLAttributes<HTMLElement> {
    value: search[]
}

function SearchList({ value = [], ...rest }: SearchListProps) {

    return (
        <div className={clsx("absolute top-[calc(104%+1px)] z-50 w-[calc(100%+4px)] max-h-56 overflow-y-scroll scroll-auto -left-[2px] bg-white border-2 border-t-0 rounded rounded-t-none " + rest.className)}>
            <>
                {value.map((item, index) => {
                    return (
                        <Link className="group" href={"/paper/" + item.type + "/" + item.uid} key={index}>
                            <ul className="h-10 flex flex-nowrap justify-between items-center px-2 group-first:!border-t-0 group-last:!border-b-0 group-odd:border-t-2 group-odd:border-b-2">
                                <span className="truncate text-left">{item.title}</span>
                                <span className="text-xs text-[#989898] bg-[#edecec] px-2 py-px rounded-lg">
                                    <span>{item.type}</span>
                                </span>
                            </ul>
                        </Link>
                    )
                })}
            </>
        </div>
    )
}