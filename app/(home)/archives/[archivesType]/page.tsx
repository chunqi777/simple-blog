import ArchiverGroup from "@/app/ui/archive/archiveGroupServer";
import ArchivesCardSkeleton from "@/app/ui/skeleton/archivesCardSkeleton";
// 导入 cardValue 和 fetchTypeListData 函数
// 导入 Image 组件
import Image from "next/image";
// 导入 Suspense、lazy、useLayoutEffect、useState 函数
import { Suspense } from "react";


// 定义 archivesListProps 接口
interface archivesListProps {
    params: {
        archivesType: string, // 类型名称
    }
}

// 导出 ArchivesList 函数s
export default function ArchivesList({ params }: archivesListProps) {
    // 对 params.archivesList 进行解码
    const decodedArchivesType = decodeURIComponent(params.archivesType);

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
                    {decodedArchivesType}
                </div>
            </div>
            <div className="flex flex-col min-w-[750px] mx-auto mb-10">
                <Suspense fallback={Array.from({ length: 2 }, (_, index) => {
                    return (
                        <ArchivesCardSkeleton key={index} />
                    )
                })}>
                    <ArchiverGroup value={decodedArchivesType} />
                </Suspense>
            </div>
        </div>
    )
}