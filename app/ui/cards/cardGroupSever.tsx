import { fetchCardData } from "@/app/lib/data";
import { card } from "@/app/lib/entity/paper";
import { CardGroup } from "./card";

interface CardGroupProps {
    maxLength: number
}

export default async function CardGroupSever({ maxLength = 5 }: CardGroupProps) {
    const cardData: card[] = await fetchCardData();
    return (
        <CardGroup value={cardData} maxLength={maxLength} />
    )
}