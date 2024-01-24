'use client'

import clsx from "clsx";
import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons/icon";

interface PaginationProps {
    pageSize: number,
    total: number,
    pageCurrent: React.MutableRefObject<number>

    prevClick?: () => void,
    nextClick?: () => void,
    currentChange: (page: number) => void
}

// 导出默认函数Pagination，用于分页显示数据
export default function Pagination({ pageSize, total, pageCurrent, prevClick = () => { }, nextClick = () => { }, currentChange }: PaginationProps) {

    // 计算总页数
    const pageTotal = Math.ceil(total / pageSize)

    // 当pageCurrent.current发生变化时，调用handlePageChange函数，传入当前页码
    useEffect(() => {
        handlePageChange(pageCurrent.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // 点击上一页按钮时，调用handlePrevClick函数，如果当前页码大于1，则将当前页码减1，调用currentChange函数，传入当前页码，调用prevClick函数
    const handlePrevClick = () => {
        prevClick();
        if (pageCurrent.current > 1) {
            pageCurrent.current--;
            // 调用currentChange函数，传入当前页码
            handlePageChange(pageCurrent.current);
        }
        // 调用prevClick函数

    }

    // 点击下一页按钮时，调用handleNextClick函数，如果当前页码小于总页数，则将当前页码加1，调用currentChange函数，传入当前页码，调用nextClick函数
    const handleNextClick = () => {
        nextClick();
        if (pageCurrent.current < pageTotal) {
            pageCurrent.current++;
            // 调用currentChange函数，传入当前页码
            handlePageChange(pageCurrent.current);
        }
        // 调用nextClick函数

    }

    // 定义handlePageChange函数，传入当前页码，调用currentChange函数，传入当前页码
    const handlePageChange = (page: number) => {
        pageCurrent.current = page;
        currentChange(pageCurrent.current);
    }


    return (
        <div className="h-10 w-full relative">
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-nowrap items-center">
                <button onClick={handlePrevClick}>
                    <ChevronLeftIcon className="hover:text-origin-100 transition-colors duration-300" width="26px" />
                </button>
                <>
                    {Array.from({ length: pageTotal }, (_, index) => {
                        return (
                            <button key={index} onClick={() => handlePageChange(index + 1)} className={clsx("w-[34px] h-[34px] text-2xl mx-1 hover:text-origin-100 transition-colors duration-300",
                                {
                                    "text-origin-100": pageCurrent.current === index + 1
                                }
                            )}>
                                {index + 1}
                            </button>
                        )
                    })}
                </>
                <button onClick={handleNextClick}>
                    <ChevronRightIcon className="hover:text-origin-100 transition-colors duration-300" width="26px" />
                </button>
            </div>
        </div>
    )
}