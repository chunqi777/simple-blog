'use client'

import { useCallback, useLayoutEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons/icon";

interface PaginationProps {
    data: any[],
    setData: React.Dispatch<React.SetStateAction<any[]>>,
    pageSize: number,
}

type PaginationState = {
    currentPage: number,
    pageSize: number,
    totalPages: number,
}

const paginationState: PaginationState = { currentPage: 1, pageSize: 5, totalPages: 0 }

// 导出默认函数Pagination，用于分页显示数据
export default function Pagination({ data = [], setData, pageSize }: PaginationProps) {
    // 使用useRef创建一个引用，用于存储数据
    const valueRef = useRef(data);

    // 使用useCallback创建一个回调函数，用于更新数据
    const setValue = useCallback(() => {
        console.log(paginationState.currentPage, paginationState.pageSize, paginationState.totalPages, valueRef.current.length);
        // 根据当前页码和每页显示数量，计算出当前页面的数据
        setData(valueRef.current.slice((paginationState.currentPage - 1) * paginationState.pageSize, paginationState.currentPage * paginationState.pageSize));
    }, [setData])

    // 创建点击上一页的回调函数
    const handlePrevClick = () => {
        // 如果当前页码大于1，则将当前页码减1，并调用setValue函数更新数据
        if (paginationState.currentPage > 1) {
            paginationState.currentPage--;
            setValue();
        }
    }
    // 创建点击下一页的回调函数
    const handleNextClick = () => {
        // 如果当前页码小于总页数，则将当前页码加1，并调用setValue函数更新数据
        if (paginationState.currentPage < paginationState.totalPages) {
            paginationState.currentPage++;
            setValue();
        }
    }

    // 使用useLayoutEffect创建一个副作用，用于计算总页数和每页显示数量
    useLayoutEffect(() => {
        // 计算总页数
        paginationState.totalPages = Math.ceil(valueRef.current.length / pageSize);
        // 设置每页显示数量
        paginationState.pageSize = pageSize;
        // 调用setValue函数更新数据
        setValue()
    }, [pageSize, setValue])

    return (
        <div className="h-10 w-full relative">
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-nowrap items-center">
                <button onClick={handlePrevClick}>
                    <ChevronLeftIcon width="30px" />
                </button>
                <>
                    {Array.from({ length: paginationState.totalPages }, (_, index) => {
                        return (
                            <button key={index}>{index + 1}</button>
                        )
                    })}
                </>
                <button onClick={handleNextClick}>
                    <ChevronRightIcon width="30px" />
                </button>
            </div>
        </div>
    )
}