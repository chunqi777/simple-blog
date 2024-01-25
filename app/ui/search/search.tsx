import { HTMLAttributes, useState } from "react";
import { SearchIcon, XCircleIcon } from "../icons/icon";
import './search.css';

// 定义 searchProps 接口，用于限制 Search 组件的属性
interface searchProps extends HTMLAttributes<HTMLElement> {
    searchWidth?: string;
    searchHeight?: string;
    placeholder?: string;
    searchType?: string;
    onSearchChange: (search: string) => void;
}
// 导出 Search 组件
export default function Search({
    searchWidth = "256px", searchHeight = "40px", placeholder = "Search", searchType = "text", onSearchChange, ...rest
}: searchProps) {
    // 使用 useState 创建 showIcon 状态
    const [showIcon, setShowIcon] = useState(false);


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
    }

    // 定义 handleBlur 函数，用于处理 input 元素的 blur 事件
    const handleBlur = () => {
        setTimeout(() => {
            setShowIcon(false);
        }, 100)

    }

    return (
        <div className={"relative " + rest.className} style={{ width: searchWidth, height: searchHeight }}>
            <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 text-[#73767a]" strokeWidth={1.8} />
            <input className="search-input bg-[transparent]  w-full h-full pl-10 pr-10 rounded-lg border-2 border-solid placeholder:text-[#73767a] outline-none focus:border-origin-100 transition-colors duration-300"
                id="search" type={searchType} placeholder={placeholder} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            {showIcon &&
                <button className="clean absolute top-1/2 -translate-y-1/2 right-3 text-[#73767a]" onClick={handleClear} >
                    <XCircleIcon strokeWidth={1.8} />
                </button>
            }
        </div>
    )
}
