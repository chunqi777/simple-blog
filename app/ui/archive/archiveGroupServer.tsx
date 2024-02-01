import { fetchArchivePaperList } from "@/app/lib/data";
import ArchivesCard from "./archivesCard";


interface ArchiveGroupProps {
    value: string
}

export default async function ArchiverGroup({ value }: ArchiveGroupProps) {
    const cardValues = await fetchArchivePaperList(value)

    if (cardValues.length === 0) {
        return <div>No data</div>
    } else {
        return (
            <>
                {cardValues.map((cardValue, index) => {
                    return <ArchivesCard value={cardValue} key={index} />
                })}
            </>
        )
    }
}