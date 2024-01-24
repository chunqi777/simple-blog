'use client'

import { useLayoutEffect, useRef, useState } from "react"
import { cardValue, fetchCardData } from "../../lib/data"
import Card from "./card"

// CardGroup组件的props类型
interface CardGroupProps {
    currentNum: number
}

// 导出CardGroup组件
export default function CardGroup({ currentNum }: CardGroupProps) {
    // 声明cardValues状态，用于存储卡片数据
    const [cardValues, setCardValues] = useState<cardValue[]>([])
    // 声明cardValuesRef，用于存储卡片数据的引用
    const cardValuesRef = useRef(cardValues)
    // 声明isLoading状态，用于控制加载状态
    const [isLoading, setIsLoading] = useState(true)

    // 使用useLayoutEffect钩子，用于在组件挂载时获取卡片数据
    useLayoutEffect(() => {
        const getValues = () => {
            // 调用fetchCardData函数获取卡片数据
            fetchCardData().then(res => {
                // 更新cardValues状态
                setCardValues(res)
                // 更新cardValuesRef
                cardValuesRef.current = res
                // 更新isLoading状态
                setIsLoading(false)
            })
        }

        // 如果本地存储中有当前页面的卡片数据，则从本地存储中获取
        if (localStorage.getItem('cardValues' + currentNum)) {
            setCardValues(JSON.parse(localStorage.getItem('cardValues' + currentNum) as string) as cardValue[])
            setIsLoading(false)
        } else getValues() // 否则从服务器获取

        // 返回清除函数，用于在组件卸载时清除本地存储中的卡片数据
        return () => {
            if (cardValuesRef.current.length !== 0 && cardValuesRef.current !== null) {
                localStorage.setItem("cardValues" + currentNum, JSON.stringify(cardValuesRef.current))
            }
        }
    }, [currentNum])

    // 如果isLoading为true，则显示加载状态
    if (isLoading) {
        return <div>loading...</div>
    }

    // 返回Card组件
    return (
        <>
            {cardValues.map((value, index) => {
                return (
                    <Card key={index} index={currentNum + "-" + index} value={value} />
                )
            })}
        </>
    );
}

