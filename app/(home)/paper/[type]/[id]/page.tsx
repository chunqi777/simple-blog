import { MDEditor } from "@/app/ui/markdownEditor/mdEditor"
import Image from "next/image"

interface paperProps {
    params: {
        type: string,
        id: string
    }
}

export default function Paper({ params }: paperProps) {
    return (
        <div className="flex flex-col bg-slate-50">
            <div className="relative w-full h-[456px]">
                <Image
                    src={'/background/1.png'}
                    alt="1"
                    fill
                    priority
                    className="object-cover select-none"
                />
                <div className="flex flex-col w-full max-w-[780px] h-[105px] absolute bottom-[20px] left-1/2 translate-x-[-50%] text-white font-bold">
                    <div className="text-4xl text-shadow-md">GraphQL 实现递归查询</div>
                    <div className="pt-[18px] text-[14px]">Mashiro · 2019-12-30 · 28,601 次阅读</div>
                </div>
            </div>
            <div className="h-full w-full max-w-[800px] mx-auto">
                <div className="pt-10 h-full w-full">
                    <MDEditor content="" />
                </div>
            </div>
        </div>
    )
}