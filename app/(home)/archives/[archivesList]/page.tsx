'use client'

// 导入 cardValue 和 fetchTypeListData 函数
import { cardValue, fetchTypeListData } from "@/app/lib/data";
// 导入 ArchivesCardSkeleton 组件
import ArchivesCardSkeleton from "@/app/ui/skeleton/archivesCardSkeleton";
// 导入 Image 组件
import Image from "next/image";
// 导入 Suspense、lazy、useLayoutEffect、useState 函数
import { Suspense, lazy, useLayoutEffect, useState } from "react";

// 导入 ArchivesCard 组件
const ArchivesCard = lazy(() => import("@/app/ui/home/archivesCard"));

// 定义 archivesListProps 接口
interface archivesListProps {
    params: {
        archivesList: string, // 类型名称
    }
}

// 导出 ArchivesList 函数
export default function ArchivesList({ params }: archivesListProps) {
    // 使用 useState 函数初始化 archivesList 状态
    const [archivesList, setArchivesList] = useState<cardValue[]>([]);
    // 对 params.archivesList 进行解码
    const decodedArchivesList = decodeURIComponent(params.archivesList);

    // 使用 useLayoutEffect 函数，当 archivesList 状态发生变化时，执行 getData 函数
    useLayoutEffect(() => {
        const getData = async () => {
            // 调用 fetchTypeListData 函数，获取数据
            const data = await fetchTypeListData();
            // 设置 archivesList 状态
            setArchivesList(data);
        }

        // 执行 getData 函数
        getData();
    }, [])

    // 返回渲染结果
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