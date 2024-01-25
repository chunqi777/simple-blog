import { cardValue, fetchCardData } from "@/app/lib/data";
import { CardGroup } from "./card";

interface CardGroupProps {
    maxLength: number
}

export default async function CardGroupSever({ maxLength = 5 }: CardGroupProps) {
    const cardData: cardValue[] = await fetchCardData();

    return (
        <CardGroup value={cardData} maxLength={maxLength} />
    )
}