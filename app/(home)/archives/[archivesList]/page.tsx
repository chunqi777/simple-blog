'use client'

import { cardValue, fetchTypeListData } from "@/app/lib/data";
import ArchivesCardSkeleton from "@/app/ui/home/skeleton/archivesCardSkeleton";
import Image from "next/image";
import { Suspense, lazy, useLayoutEffect, useState } from "react";

const ArchivesCard = lazy(() => import("@/app/ui/home/archivesCard"));

interface archivesListProps {
    params: {
        archivesList: string, // 类型名称
    }
}

export default function ArchivesList({ params }: archivesListProps) {
    const [archivesList, setArchivesList] = useState<cardValue[]>([]);
    const decodedArchivesList = decodeURIComponent(params.archivesList);

    useLayoutEffect(() => {
        const getData = async () => {
            const data = await fetchTypeListData();
            setArchivesList(data);
        }

        getData();
    }, [])

    return (
        <div className="flex flex-col w-full h-full min-h-screen bg-slate-50">
            <div className="h-[356px] w-full relative">
                <Image
                    src={"/background/3.png"}
                    alt="img"
                    fill
                    sizes="(max-width: 1000px) 100vw, (max-width: 768px) 50vw, (max-width: 648px) 33vw"
                    className="object-cover select-none"
                />
                <div className="absolute bottom-[35%] left-1/2 translate-x-[-50%] min-w-40 text-4xl font-bold text-white bg-[rgba(0,0,0,.6)] px-10 py-3 text-center rounded">
                    {decodedArchivesList}
                </div>
            </div>
            <div className="flex flex-col min-w-[750px] mx-auto mb-10">
                <>
                    {archivesList.map((item, index) => {
                        return (
                            <Suspense key={index} fallback={<ArchivesCardSkeleton />}>
                                <ArchivesCard value={item} />
                            </Suspense>
                        )
                    })}
                </>
            </div>
        </div>
    )
}