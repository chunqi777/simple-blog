'use client'

import { useLayoutEffect, useRef, useState } from "react";
import { cardValue, fetchCardData } from "../../lib/data";
import Card from "./card";

interface CardGroupProps {
    currentNum: number
}

export default function CardGroup({ currentNum }: CardGroupProps) {
    const [cardValues, setCardValues] = useState<cardValue[]>([])
    const cardValuesRef = useRef(cardValues)
    const [isLoading, setIsLoading] = useState(true)

    useLayoutEffect(() => {
        const getValues = () => {
            fetchCardData().then(res => {
                setCardValues(res)
                cardValuesRef.current = res
                setIsLoading(false)
            })
        }

        if (localStorage.getItem('cardValues' + currentNum)) {
            setCardValues(JSON.parse(localStorage.getItem('cardValues' + currentNum) as string) as cardValue[])
            setIsLoading(false)
        } else getValues() // 初始化

        return () => {
            if (cardValuesRef.current.length !== 0 && cardValuesRef.current !== null) {
                localStorage.setItem("cardValues" + currentNum, JSON.stringify(cardValuesRef.current))
            }
        }
    }, [currentNum])

    if (isLoading) {
        return <div>loading...</div>
    }

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

